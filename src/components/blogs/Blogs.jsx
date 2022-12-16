import React from 'react'
import BlogPrev from './BlogPrev'

function Blogs() {
    return (
        <>
            <div className="container">
                <div className="filters lg:m-2 p-2 lg:flex justify-between">
                    <div className="filterTime text-gray-600 font-semibold m-2">
                        <button className='text-gray-500 hover:text-gray-400 ease-in'>Latest {'>'} Oldest</button>
                        &nbsp;
                        /
                        &nbsp;
                        <button className='text-gray-500 hover:text-gray-400 ease-in'>A - Z {'>'} Z - A</button>
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
                        <BlogPrev title="name" description="description" datetime="21/11/2022" id="123" words="12,364" promo="https://picsum.photos/500/400" link="/" />
                        <BlogPrev title="name" description="description" datetime="21/11/2022" id="123" words="12,364" promo="https://picsum.photos/500/400" link="/" />
                        <BlogPrev title="name" description="description" datetime="21/11/2022" id="123" words="12,364" promo="https://picsum.photos/500/400" link="/" />
                    </div>

                    <div className="text-gray-700 focus:ring-4 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 dar:text-gray-300 text-center">
                        <svg role="status" className="inline mr-3 w-7 h-7 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#1C64F2" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                        </svg>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Blogs