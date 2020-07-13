// Import getSinglePost function
import { getSinglePost } from './api/posts';
import Layout from '../components/Layout'
import Header from '../components/Header'
import Email from '../components/Email'


// PostPage page component
const PostPage = (props) => {
  if (!props.post) return <p>Error!</p>

  // Render post title and content in the page from props
  return (
    <Layout>


      <div className="head-wrap">
        <Header></Header>
      </div>

      <div className="single-post">

        <h1>{props.post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.post.html }} /></div>

      <div className="email-wrap">
        <Email></Email>
      </div>

      <style jsx> {`
    
      .single-post {
        max-width: 500px;
        margin: 0 auto;
      }
      
      .head-wrap {
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