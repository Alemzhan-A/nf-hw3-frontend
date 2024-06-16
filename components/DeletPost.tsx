import React from 'react';
import { usePosts } from '@/app/context/PostsContext';

interface DeletePostProps {
  postId: string;
}

const DeletePost: React.FC<DeletePostProps> = ({ postId }) => {
  const { deletePost } = usePosts();

  const handleDelete = () => {
    deletePost(postId);
  };

  return (
    <button onClick={handleDelete}>Delete Post</button>
  );
};

export default DeletePost;
