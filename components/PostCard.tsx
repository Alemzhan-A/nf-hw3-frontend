"use client";

import Link from 'next/link';
import { Post } from '../interfaces/post';
import { usePosts } from '@/app/context/PostsContext';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { deletePost } = usePosts();

  const handleDelete = () => {
    deletePost(post.id);
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 m-4">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-emerald-600 dark:text-emerald-400">{post.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">{post.body.substring(0, 100)}...</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100 text-emerald-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center text-gray-600 dark:text-gray-400 text-sm">
          <div>
            <span className="mr-4">👍 {post.reactions.likes}</span>
            <span>👎 {post.reactions.dislikes}</span>
          </div>
          <div>👀 {post.views} views</div>
        </div>
        <Link href={`/posts/${post.id}`} legacyBehavior>
          <a className="text-emerald-500 dark:text-emerald-400 hover:underline mt-4 block">Read more</a>
        </Link>
        <div className="mt-4 flex justify-between">
          <Link href={`/posts/edit/${post.id}`} legacyBehavior>
            <a className="text-blue-500 dark:text-blue-400 hover:underline">Edit</a>
          </Link>
          <button onClick={handleDelete} className="text-red-500 dark:text-red-400 hover:underline">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
