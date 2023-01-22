import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function BlogSingle() {
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;
  
  const [Post, setPost] = useState([])
  const [html, setHTML] = useState({ __html: "" });

  useEffect(() => {
    let url = `/blog/post`;
    let requestBlogs = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug: slug })
    };
    fetch(url, requestBlogs)
      .then(response => response.json())
      .then(data => {
        setPost(data["response"]["data"]);
        setHTML({ __html: data["response"]["data"]["content"] });
      }).catch((e) => {
        toast.error(`No Blog Named "${slug}"`,{ theme: "colored", autoClose: 1000 })
        navigate('/blogs')
      });
  }, [])

  return (
    <div className='m-3'>
      <div className="title text-2xl capitalize text-zinc-800 dark:text-zinc-300">
        {Post.title}
      </div>
      <div id="blogContent" className="content">
        <div className="blog m-4 shadow-outer rounded p-2 !text-zinc-900 dark:!text-zinc-200 dark:!bg-zinc-800" dangerouslySetInnerHTML={html}></div>

        <div className="blockquote text-end lg:block hidden text-zinc-800 dark:text-zinc-300">
          <figure>
            <blockquote className="blockquote text-[1.25rem] mb-[1rem]">
              <p>{Post.title}</p>
            </blockquote>
            <figcaption className="blockquote-footer mt-[-1rem] mb-[1rem] text-[.975em] text-[#6c757d]">
              <cite title={process.env.REACT_APP_AUTHOR}>{process.env.REACT_APP_AUTHOR}</cite>
            </figcaption>
          </figure>
        </div>

      </div>
    </div>
  )
}

export default BlogSingle