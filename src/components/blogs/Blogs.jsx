import React, { useEffect, useState } from 'react'
import Loading from '../utils/svgs/Loading'
import BlogPrev from './BlogPrev'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';


function Blogs() {
    const [BlogsAll, setBlogsAll] = useState([])
    const [Blogs, setBlogs] = useState([])
    const [LoadLength, setLoadLength] = useState(5)

    const getBlogs = () => {
        let requestBlogs = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        };
        fetch('/blog/list', requestBlogs)
            .then(response => response.json())
            .then(data => {
                setBlogsAll(data["response"]["data"]);
                setBlogs(data["response"]["data"].slice(0, 5));
        });
    }

    useEffect(() => {
        getBlogs()
    }, [])

    let fetchMoreData = () => {
        setTimeout(() => {
            setBlogs(Blogs.concat(BlogsAll.slice(LoadLength, (LoadLength + 5))))
            setLoadLength(LoadLength + 5)
        }, 300);
    }

    return (
        <>
            <div className="container">
                <div className="filters lg:m-2 p-2 lg:flex justify-between">
                    <div className="filterTime text-gray-600 font-semibold m-2">
                        <Link to="/blogs?filter=oldest" className='text-gray-500 hover:text-gray-400 ease-in'>Latest {'>'} Oldest</Link>
                        &nbsp;
                        /
                        &nbsp;
                        <Link to="/blogs?filter=a-z" className='text-gray-500 hover:text-gray-400 ease-in'>A - Z {'>'} Z - A</Link>
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

                <div className="blogs lg:m-4 p-4">
                    <h3 className='text-2xl text-gray-700 mb-4 dark:text-gray-300'> Relevent Blogs</h3>
                    <div className="blogs-row">
                        <InfiniteScroll
                            dataLength={Blogs.length}
                            next={fetchMoreData}
                            hasMore={Blogs.length !== BlogsAll.length}
                            loader={<Loading />}
                        >
                            {Blogs.map((element, index) => {
                                return (
                                    <BlogPrev key={index} title={element.title} description={element.about} datetime={element.datetime} id={element.id} words="12,364" promo={element.image} link={element.slug} />
                                )
                            })}
                        </InfiniteScroll>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blogs