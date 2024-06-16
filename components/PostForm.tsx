import { useState, useEffect } from 'react';
import { usePosts } from '@/app/context/PostsContext';
import { Post } from '../interfaces/post';

interface PostFormProps {
  post?: Post;
  onClose: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ post, onClose }) => {
  const { addPost, updatePost } = usePosts();
  const [title, setTitle] = useState(post?.title || '');
  const [body, setBody] = useState(post?.body || '');
  const [tags, setTags] = useState(post?.tags.join(', ') || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTags = tags.split(',').map(tag => tag.trim());
    if (post) {
      updatePost({ ...post, title, body, tags: newTags });
    } else {
      addPost({ id: Date.now(), title, body, tags: newTags, reactions: { likes: 0, dislikes: 0 }, views: 0 });
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 dark:text-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold mb-4">{post ? 'Edit Post' : 'Add Post'}</h2>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Tags (comma separated)</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex justify-end">
        <button type="button" onClick={onClose} className="mr-4 p-2 bg-gray-300 rounded">Cancel</button>
        <button type="submit" className="p-2 bg-emerald-500 text-white rounded">{post ? 'Update' : 'Add'}</button>
      </div>
    </form>
  );
};

export default PostForm;
