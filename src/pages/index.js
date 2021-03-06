import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Email from '../components/Email'
import { getPosts } from './api/posts';
import Link from 'next/link';
import Social from '../components/Social'


const IndexPage = (props) => (


  <Layout>


    <div className="home">

      <Header></Header>

      <div className="body">
        <Intro></Intro>
        <Projects></Projects>


        <h2>Writing & Blog:</h2>

        <ul className="blog-posts">
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
          <div className="see-all">
            <Link href="/posts"><a className="see-all-link">See All</a></Link> &rarr;


    </div>
        </ul>





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
        
        .see-all {
          margin-top: 20px;
        
        
        }
       

      `}
    </style>

  </Layout>


);

IndexPage.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts: posts }
}




export default IndexPage