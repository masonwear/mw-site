import React from 'react'
import { Link } from 'next-routes'


const PostItem = ({ post }) => (
  
    <Link route='post' params={{ slug: post.title }}>
      <a>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </a>
    </Link>
  
)

export default PostItem