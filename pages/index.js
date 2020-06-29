import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Email from '../components/Email'

import { getPosts } from '../pages/api/posts';

const IndexPage = (props) => (
  <ul>
    {props.posts.map(post => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);

IndexPage.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts: posts }
}



export default function Home() {
  return (
   
    
  <Layout>
    
    <div className="home">
    
    <div className="header"><Header></Header></div>
    
    <div className="body">
      <Intro></Intro>
      <Projects></Projects>
    </div>
    
    </div> 
    
    <div className="email-wrap">
      <Email></Email>
    </div>

    <style jsx>
      {`
        .home {
          max-width: 500px;
          margin: 0 auto;
        }
        
        .body {
          margin-bottom: 85px;
        }
        
        .email-wrap {
          width: 100%;
          background: #ffffff;
          padding: 60px 0;
        }

      `}
    </style>
          
  </Layout>
          
  )
}
