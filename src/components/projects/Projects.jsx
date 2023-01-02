import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <>
      <div className="p-2">
        <h3 className='text-2xl font-semibold text-zinc-700 dark:text-zinc-300 p-2 text-center'> Projects </h3>
        <div className="projects shadow-outer space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 md:space-y-0 md:gap-1 md:grid md:grid-cols-2 p-4 m-4">

          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((elem, index) => (
              <Link to='/' key={index} className='lg:p-0 p-1 item-project overflow-hidden w-[400px] h-[400px] '>
                <img className='hover:brightness-50 lg:hover:scale-125 ease-in-out duration-200 w-[400px] h-[400px]' src={`https://picsum.photos/${elem}00/${elem}00`}
                  alt="img" />
              </Link>
          ))}

        </div>
      </div>
    </>
  )
}

export default Projects