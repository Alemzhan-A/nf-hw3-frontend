'use client';

import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import PostCard from '../components/PostCard';
import { Post } from '../interfaces/post';
import { useAuth } from './context/AuthContext';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetchPosts();
        setPosts(response.data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    if (isAuthenticated) {
      getPosts();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="w-full h-full min-h-screen bg-white dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-emerald-600 dark:text-emerald-400">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
