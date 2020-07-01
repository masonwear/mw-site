import { Helmet } from 'react-helmet';

function Layout(props) {
    return ( 
      
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
          
          html {
            position: relative;
            min-height: 100%;
          }
          
          body {
            background-color: #F4F0ED;
            padding: 0;
            margin: 0;
            margin-bottom: 330px;
            width: 100%;
            
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizelegibility;
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Domine', serif;
            opacity: 0.8;
          }
          
          h1 {
            font-style: normal;
            font-weight: 500;
            font-size: 26.16px;
            line-height: 30px;
            letter-spacing: -0.4px;
            color: #0F171B;
          }
          
          h2 {
            font-style: normal;
            font-weight: 500;
            font-size: 19px;
            line-height: 20px;
            letter-spacing: -0.4px;
            color: #0F171B;
          }

          h3 {
            font-weight: 500;
            font-size: 17px;
            line-height: 20px;
            letter-spacing: -0.4px;
            color: #0F171B;
          }

          p {
            font-family: DM Sans;
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 1.6;
            color: #0F171B;
            margin-bottom: 30px;
            opacity: 0.8;
          }

          a {
            color: #EA7884;
            text-decoration: none;
            
            
          }

          ul {
            font-family: DM Sans;
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 1.6;
            color: #0F171B;
            
            list-style-type: none;
            list-style-position:inside;
            margin:0;
            padding:0;
            opacity: .8;
          }

          li {
            color: #0F171B;
          }
          
          .blog-posts li a {
            display: block; 
          }
          
          .excerpt {
            margin-bottom: 10px;
            display: block; 
          }

          img {
            max-width: 100%;
            height: auto;
          }
          
          .single-post figure {
            margin: 0; 
          }
          
          .single-post img {
            max-width: none;
            width: 100%; 
          }
          
          .email-wrap {
            width: 100%;
            background: #ffffff;
            padding: 60px 0;
            
            position: absolute;
            bottom: 0;
          }
          
          @media only screen and (max-width : 500px) {
            
            body {
              margin-bottom: 0;
            }
            
            .header,
            .body,
            .posts,
            .single-post {
              padding: 0 30px;
            }
            
            .email-wrap {
              padding: 60px 30px; 
              width: auto;
              position: static;
              margin-top: 50px;
            }
            
            .email-wrap form {
              display: block;
            }
            
            .email-wrap input {
              width: 100%; 
            }
            
            .email-wrap input[type="email"] {
              margin-bottom: 15px;
              box-sizing: border-box;
              margin-right: 0;
            }

            
            
          }

        `}</style>

        <Helmet>
          <title>Mason Wear - Maker of Things</title>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Domine:wght@700&display=swap" rel="stylesheet" />
          
          <meta name="HandheldFriendly" content="True"/>
          <meta name="MobileOptimized" content="320"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta property="og:title" content="Mason Wear - Maker of Things"/>
          <meta property="og:description" content="I'm a serial maker of things on the internet based out of Austin, TX. I thrive off of launching new projects on the web and experimenting on products."/>
          <meta property="og:image" content="/static/MasonLogo.png"/>
          <meta property="og:site_name" content="Mason Wear - Maker of Things"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:image:alt" content="My fancy logo."/>
          
        </Helmet>
      </div>
    )
    
  }
  
  export default Layout