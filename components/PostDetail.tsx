import { useState } from 'react';
import { Post } from '../interfaces/post';
import { usePosts } from '@/app/context/PostsContext';

interface PostDetailProps {
  post: Post;
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  const { deletePost } = usePosts();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    deletePost(post.id);
  };


  return (
    <div className="bg-white shadow-md rounded p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
      <div className="flex justify-end mt-4">
        <button onClick={() => setIsEditing(true)} className="mr-4 p-2 bg-blue-500 text-white rounded">Edit</button>
        <button onClick={handleDelete} className="p-2 bg-red-500 text-white rounded">Delete</button>
      </div>
    </div>
  );
};

export default PostDetail;
