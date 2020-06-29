import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Email from '../components/Email'

import {getPosts} from '../pages/api/posts'


export default function Home() {
  return (
   
    
    <Layout>
    
    <div className ="home">
    
    <div className="header"><Header></Header></div>
    <div className="body"><Intro></Intro>
    <Projects></Projects></div>
    <div className="email"><Email></Email></div>
    
  
    

          
            
            
            <style jsx>{`
            
            .home {
              display: grid;
              grid-template-columns: 0.7fr 1.5fr 1.2fr 0.6fr;
              grid-template-rows: 0.2fr 2.7fr 0.1fr;
              gap: 1px 1px;
              grid-template-areas: ". header header ." ". body body ." ". email email .";
              
            }  
            
            .header{
              grid-area: header;

            }

            .body{
              grid-area: body;
            }

            .email{

              grid-area: email;
            }




          `}

            </style>


          
            </div> 
          </Layout>
          
          
          )
          }
