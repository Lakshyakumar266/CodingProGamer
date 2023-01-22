import React, { useEffect } from 'react'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link } from 'react-router-dom'
import Loading from '../utils/svgs/Loading'

function Projects() {
  let fullURL = window.location.href

  const [ProjectAll, setProjectAll] = useState([])
  const [Projects, setProjects] = useState([])
  const [LoadLength, setLoadLength] = useState(6)

  
  const UseFilter = (e) => { };

  useEffect(() => {
    let requestProject = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    };
    fetch('/project/list', requestProject)
      .then(response => response.json())
      .then(data => {

        setProjectAll(data["response"]["data"]);
        setProjects(data["response"]["data"].slice(0, 6));

      });
  }, [])

  const fetchMoreData = () => {
    setTimeout(() => {
      setProjects(Projects.concat(ProjectAll.slice(LoadLength, (LoadLength + 6))))
      setLoadLength(LoadLength + 6)
    }, 300);
  };

  return (
    <>
      <div className="p-2">
        <div className="filters lg:m-2 p-2 lg:flex justify-between">
          <div className="filterTime text-gray-600 font-semibold m-2">
            <Link to="/projects?filter=oldest" className='text-gray-500 hover:text-gray-400 ease-in' onClick={UseFilter}>Latest {'>'} Oldest</Link>
            &nbsp;
            /
            &nbsp;
            <Link to="/projects?filter=a-z" className='text-gray-500 hover:text-gray-400 ease-in'>A - Z {'>'} Z - A</Link>
          </div>
          <div className="search m-2">

            <form className="flex items-center">
              <label htmlFor="searchInput" className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="searchInput" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="@Search" required />
              </div>
              <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:focus:ring-gray-800">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokwidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span className="sr-only">Search</span>
              </button>
            </form>

          </div>

        </div>

        <div className="projectsTab">
          <h3 className='text-2xl font-semibold text-zinc-700 dark:text-zinc-300 p-2 text-center'> Projects </h3>
          <InfiniteScroll
            dataLength={Projects.length}
            next={fetchMoreData}
            hasMore={Projects.length !== ProjectAll.length}
            loader={<Loading />}
          >

            <div className="projects shadow-outer space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 md:space-y-0 md:gap-1 md:grid md:grid-cols-2 p-4 m-4">
              {Projects.map((element, index) => (
                <Link to={`/project/${element.slug}`} key={index} className='lg:p-0 p-1 item-project overflow-hidden w-[400px] h-[400px] '>
                  <img className='hover:brightness-50 lg:hover:scale-125 ease-in-out duration-200 w-[400px] h-[400px]' src={`/static/images/projects/${element.imageShort}`} alt={element.imageShort} onError={(e) => e.target.src = `/static/images/defaultImage.jpg`} />
                </Link>
              ))}

            </div>

          </InfiniteScroll>
        </div>

      </div>
    </>
  )
}

export default Projects