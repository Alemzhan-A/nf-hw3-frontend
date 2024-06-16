"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { Post } from '@/interfaces/post';

interface PostsContextProps {
  posts: Post[];
  addPost: (post: Post) => void;
  updatePost: (updatedPost: Post) => void;
  deletePost: (postId: number) => void;
}

const PostsContext = createContext<PostsContextProps | undefined>(undefined);

export const usePosts = (): PostsContextProps => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
};

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>(() => {
    if (typeof window !== 'undefined') {
      const savedPosts = localStorage.getItem('posts');
      return savedPosts ? JSON.parse(savedPosts) : [];
    }
    return [];
  });

  const addPost = (post: Post) => {
    const updatedPosts = [...posts, post];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const updatePost = (updatedPost: Post) => {
    const updatedPosts = posts.map(post => post.id === updatedPost.id ? updatedPost : post);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const deletePost = (postId: number) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <PostsContext.Provider value={{ posts, addPost, updatePost, deletePost }}>
      {children}
    </PostsContext.Provider>
  );
};
