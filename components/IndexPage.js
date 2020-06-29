import { getPosts } from '../pages/api/posts';

IndexPage.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts: posts }
}

const IndexPage = (props) => (
  <ul>
    {props.posts.map(post => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);

export default IndexPage
