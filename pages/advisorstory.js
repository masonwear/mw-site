import Layout from '../components/Layout'
import Header from '../components/Header'
import { getPosts } from '../pages/api/posts';
import Link from 'next/link';






const IndexPage = (props) => (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>
          <Link href={`/[slug]`} as={`/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );


IndexPage.getInitialProps = async () => {
    const posts = await getPosts();
    return { posts: posts }
  }

export default IndexPage