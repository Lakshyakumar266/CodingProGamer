import React from 'react'

function Projects() {
  return (
    <>
      <div className="p-2">
        <h3 className='text-2xl font-semibold text-zinc-700 dark:text-zinc-300 p-2 text-center'> Projects </h3>
        <div className="projects shadow-outer space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 p-4 m-4">

          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((elem, index) => (
            <a href='/' className='item-project overflow-hidden w-[400px] h-[400px] rounded'>
              <img className='hover:brightness-50 hover:scale-125 ease-in-out duration-200 w-[400px] h-[400px]' src={`https://picsum.photos/${elem}00/${elem}00`}
                alt="img" />
            </a>
          ))}

        </div>
      </div>
    </>
  )
}

export default Projects