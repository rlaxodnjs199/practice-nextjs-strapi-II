import axios from 'axios';
import PostPreview from '../../components/PostPreview';

function Post({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <PostPreview post={post} />
      ))}
    </>
  );
}

export default Post;

export async function getStaticProps() {
  const postsRes = await axios.get('http://localhost:1337/api/posts');

  return {
    props: {
      posts: postsRes.data.data,
    },
  };
}
