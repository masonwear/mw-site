import Layout from '../components/Layout'
import Header from '../components/Header'
import { getPosts, getPortfolio, getAllPosts } from './api/posts';
import Link from 'next/link';




const PostsPage = (props) => (

  <Layout>
   <div className="posts">
    <ul>
      {props.posts.map(post => ( 
        <li key={post.id}>
          <Link href={`/[slug]`} as={`/${post.slug}`}>
            <a>{post.title}</a>
            
            
          </Link>
        </li>
      ))}
    </ul>
    </div>
   <style jsx> {`
    
    
    
    a {

      font-family: ITC Souvenir Std;
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 20px;
      letter-spacing: -0.4px;

      color: #0F171B;

      opacity: 0.8;




    }

    .posts {
      margin-bottom: 85px;
      display: flex;
    }
    
    
    `}




    </style>
    </Layout> 
); 

    

PostsPage.getInitialProps = async () => {
    const posts = await getAllPosts();
    return { posts: posts}
    
  
    }

export default PostsPage