// Import getSinglePost function
import { getSinglePost } from './api/posts';
import Layout from '../components/Layout'
import Header from '../components/Header'


// PostPage page component
const PostPage = (props) => {
  // Render post title and content in the page from props
  return (
      <Layout>
     
    
    <div className = "post">
      <h1>{props.post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
    </div>

    <style jsx> {`
    
      .post {

        max-width: 500px;
        margin: 0 auto;
      }
    
    
    
    
    `}




    </style>
   
    </Layout>
    
  )
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
PostPage.getInitialProps = async (params) => {
  const post = await getSinglePost(params.query.slug);
  return { post: post }
};


export default PostPage