import Layout from '../components/Layout'
import Header from '../components/Header'
import Email from '../components/Email'
import { getPosts, getPortfolio, getAllPosts } from './api/posts';
import Link from 'next/link';


const PostsPage = (props) => (

  <Layout>
  
   <div className="head-wrap">
    <Header></Header>
   </div>
    
   <div className="posts">
   
   <h1>Writing & Blog</h1>
    <ul>
      {props.posts.map(post => ( 
        <li key={post.id}>
          <Link href={`/[slug]`} as={`/${post.slug}`}>
            <a>{post.title}</a>
          </Link>

          <div className="excerpt">
            {post.custom_excerpt}
          </div>
        </li>
      ))}
    </ul>
    </div>
    <div className="email-wrap">
      <Email></Email>
    </div>
   <style jsx> {`
    
    
    
    a {

      font-family: ITC Souvenir Std;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      letter-spacing: -0.4px;
      color: #EA7884;;
      opacity: 0.8;
    }
    
    .head-wrap {
      max-width: 500px;
      margin: 0 auto;  
    }

    .posts {
      max-width: 500px;
      margin: 0 auto;
      margin-bottom: 85px;
    }
        
    
    
    `}




    </style>
    </Layout> 
); 

    

PostsPage.getInitialProps = async () => {
    const posts = await getPosts();
    return { posts: posts}
    
  
    }

export default PostsPage