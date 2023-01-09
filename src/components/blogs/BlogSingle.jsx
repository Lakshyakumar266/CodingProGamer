import React from 'react'
import { useParams } from 'react-router-dom';

function BlogSingle() {
    const params = useParams();
    const { slug } = params;
    
  return (
    <div>BlogSingle {slug}</div>
  )
}

export default BlogSingle