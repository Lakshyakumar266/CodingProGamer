import React from 'react'

function BlogPrev(props) {
  return (
    <>
      <div className="lg:max-w-full lg:flex shadow-outer m-2">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url('${props.promo}')` }} title={props.promo} >
        </div>

        <div className="bg-white dark:bg-gray-800 rounded lg:rounded-md p-4 flex flex-col justify-between leading-normal lg:w-full">
          <div className="mb-8">
            {/* <p className="text-sm text-gray-600 flex items-center">
              <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p> */}
            <div className="text-gray-900 dark:text-gray-400 font-bold text-xl mb-2 capitalize">{props.title}</div>
            <a href={props.link} className="text-gray-700 text-base dark:text-gray-500">{props.description}
            </a>
          </div>
          <a href={props.link} className='underline text-gray-800 dark:text-gray-500 mb-1 font-semibold'>Read more...</a>
          <div className="flex items-center text-gray-600">
            <span className='datePost'>{props.datetime}</span>
            &nbsp;
            <span className='blogSno'>(#{props.id}),</span>
            &nbsp;
            <span className='wordCount'>{props.length} Words.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPrev