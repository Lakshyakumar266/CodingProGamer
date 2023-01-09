import React from 'react'
import { Link } from 'react-router-dom'

function BlogPrev(props) {
  
  const ImageCheck = (str) => {
    let image = String(str).toLowerCase();
    if (image.includes("jpg") || image.includes("png") || image.includes("jpeg")) {
      return `${process.env.REACT_APP_PROXY}/static/images/blogs/${str}`
    } else {
      return `${process.env.REACT_APP_PROXY}/static/images/defaultImage.jpg`
    }
  }

  return (
    <>
      <div className="lg:max-w-full lg:flex shadow-outer m-2">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url('${ImageCheck(props.promo)}')` }} title={props.promo} >
        </div>

        <div className="bg-white dark:bg-gray-800 rounded lg:rounded-md p-4 flex flex-col justify-between leading-normal lg:w-full">
          <div className="mb-8">
            <div className="text-gray-900 dark:text-gray-400 font-bold text-xl mb-2 capitalize">{props.title}</div>
            <Link to={`/blogpost/${props.link}`} className="text-gray-700 text-base dark:text-gray-500">{props.description}
            </Link>
          </div>
          <Link to={`/blogpost/${props.link}`} className='underline text-gray-800 dark:text-gray-500 mb-1 font-semibold'>Read more...</Link>
          <div className="flex items-center text-gray-600">
            <span className='datePost'>{props.datetime}</span>
            &nbsp;
            <span className='blogSno'>(#{props.id}),</span>
            &nbsp;
            <span className='wordCount'>{props.words} Words.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPrev