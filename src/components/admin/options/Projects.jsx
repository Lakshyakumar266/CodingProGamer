import React from 'react'
import EditProject from './projectOption/EditProject';
import ListProject from './projectOption/ListProject'
import UploadProject from './projectOption/UploadProject'

function Projects(props) {
  //   slug
  // imageBig
  // imageShort
  // title
  // content
  // links
  // siteLink
  // codeLink

  const list = [
    {
      id: 1,
      slug: "test_slug",
      imageBig: "BigImage.jpg",
      imageShort: "ShortImage.jpg",
      title: "this is a test title. only for development perpose. only for development perpose.",
      content: "this is a test content for projects. this is a demo content. this is a long paragraph.",
      links: 1,
      siteLink: "/",
      codeLink: "/",
      datetime: "2023-01-01 16:24:57"
    },
    {
      id: 2,
      slug: "test_slug2",
      imageBig: "BigImage2.jpg",
      imageShort: "ShortImage2.jpg",
      title: "this is a test title. only for development perpose. 2",
      content: "this is a test content for projects. this is a demo content. this is a long paragraph. 2",
      links: 0,
      siteLink: "/",
      codeLink: "/",
      datetime: "2023-01-01 16:25:25"
    }
  ];

  return (
    <>
      <div className="container">

      {props.edit ? 
      (
        <EditProject id={props.edit[2]}/>
      )
      :
      (<>
        <UploadProject />
        <ListProject data={list} />
      </>)
      }

      </div>
    </>
  )
}

export default Projects