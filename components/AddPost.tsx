import React, { useState } from 'react';
import { usePosts } from '@/app/context/PostsContext';
import { Post } from '../interfaces/post';

const AddPost: React.FC = () => {
  const { addPost } = usePosts();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    const newPost: Post = {
      id: Date.now().toString(),
      title,
      body,
      tags: [],
      reactions: { likes: 0, dislikes: 0 },
      views: 0,
    };
    addPost(newPost);
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <h2>Add Post</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" />
      <button onClick={handleSubmit}>Add Post</button>
    </div>
  );
};

export default AddPost;
