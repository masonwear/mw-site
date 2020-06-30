import Layout from '../components/Layout'
import Header from '../components/Header'
import { getPosts, getPortfolio, getAllPosts } from './api/posts';
import Link from 'next/link';




const PostsPage = (props) => (

  <Layout>
  
   <div className="posts">
   <h1>Writing & Blog</h1>
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
      line-height: 65px;
      letter-spacing: -0.4px;
      
      color: #0F171B;
      
      opacity: 0.8;



    }

    .posts {
      max-width: 500px;
        margin: 0 auto;
    
    
    `}




    </style>
    </Layout> 
); 

    

PostsPage.getInitialProps = async () => {
    const posts = await getAllPosts();
    return { posts: posts}
    
  
    }

export default PostsPage