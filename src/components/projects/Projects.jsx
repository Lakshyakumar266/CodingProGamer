import React, { useEffect } from 'react'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link } from 'react-router-dom'
import Loading from '../utils/svgs/Loading'

function Projects() {
  const [ProjectAll, setProjectAll] = useState([])
  const [Projects, setProjects] = useState([])
  const [LoadLength, setLoadLength] = useState(6)

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
      console.log(LoadLength, Projects.length);
    }, 300);
  };

  const ImageCheck = (str) => {
    let image = String(str).toLowerCase();
    if (image.includes("jpg") || image.includes("png") || image.includes("jpeg")) {
      return `${process.env.REACT_APP_PROXY}/static/images/projects/${str}`
    } else {
      return `${process.env.REACT_APP_PROXY}/static/images/defaultImage.jpg`
    }
  }

  return (
    <>
      <div className="p-2">
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
                <img className='hover:brightness-50 lg:hover:scale-125 ease-in-out duration-200 w-[400px] h-[400px]' src={ImageCheck(element.imageShort)}
                  alt="img" />
              </Link>
            ))}

          </div>

        </InfiniteScroll>

      </div>
    </>
  )
}

export default Projects