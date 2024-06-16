import { useState } from 'react';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { usePosts } from '@/app/context/PostsContext';

const PostsPage = () => {
  const { posts } = usePosts();
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="container mx-auto p-4 bg-white dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-emerald-600 dark:text-emerald-400">Posts</h1>
      <div className="mb-4 flex justify-end">
        <button onClick={() => setIsAdding(true)} className="p-2 bg-emerald-500 text-white rounded">Add Post</button>
      </div>
      {isAdding && <PostForm onClose={() => setIsAdding(false)} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
