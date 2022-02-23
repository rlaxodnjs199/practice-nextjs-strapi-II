import { useState, useEffect } from 'react';
import PostPreview from './PostPreview';

function HomeLatestPosts({ posts }) {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    setLatestPosts(posts.slice(0, 5));
  }, [posts]);

  return (
    <>
      {' '}
      <h2>Latest Posts</h2>
      {latestPosts.map(post => (
        <PostPreview post={post} key={post.id} />
      ))}
    </>
  );
}

export default HomeLatestPosts;
