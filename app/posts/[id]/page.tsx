import { use } from 'react';

const fetchPost = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const PostPage = ({ params }: { params: { id: string } }) => {
  const post = use(fetchPost(params.id));

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded p-6">
        <h1 className="text-4xl font-extrabold mb-4 text-emerald-600">{post.title}</h1>
        <p className="text-gray-700 mb-4">{post.body}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag: string) => (
            <span key={tag} className="bg-emerald-100 text-emerald-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <div>
            <span className="mr-4">👍 {post.reactions.likes}</span>
            <span>👎 {post.reactions.dislikes}</span>
          </div>
          <div>👀 {post.views} views</div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
