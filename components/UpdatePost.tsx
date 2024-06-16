import React, { useState } from 'react';
import { usePosts } from '@/app/context/PostsContext';
import { Post } from '../interfaces/post';

interface UpdatePostProps {
  post: Post;
}

const UpdatePost: React.FC<UpdatePostProps> = ({ post }) => {
  const { updatePost } = usePosts();
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSubmit = () => {
    const updatedPost: Post = {
      ...post,
      title,
      body,
    };
    updatePost(updatedPost);
  };

  return (
    <div>
      <h2>Update Post</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" />
      <button onClick={handleSubmit}>Update Post</button>
    </div>
  );
};

export default UpdatePost;
