import React from 'react'
import EditBlog from './blogOption/EditBlog';
import ListBlogs from './blogOption/ListBlogs'
import UploadBlog from './blogOption/UploadBlog'

function Blogs(props) {

  const list = [
    {
      id: 1,
      slug: "slug_1",
      title: "title_1",
      about: "about_1",
      content: "content_1",
      image: "image_1.jpg",
      datetime: "2022-12-31 08:16:19"
    },
    {
      id: 2,
      slug: "slug_2",
      title: "title_2",
      about: "about_2",
      content: "content_2",
      image: "image_2.jpeg",
      datetime: "2022-12-31 08:16:19"
    }
  ];


  return (
    <div className="container">
      {props.edit ? 
      (
        <EditBlog id={props.edit[2]}/>
      )
      :
      (<>
        <UploadBlog />

        <ListBlogs data={list} />
      </>)
      }

    </div>
  )
}

export default Blogs