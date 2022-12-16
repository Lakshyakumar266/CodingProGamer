/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from './../logo.svg'

import { BsChevronUp } from 'react-icons/bs'

function Footer() {
  return (
    <>
      <div className="backToTop flex items-center justify-end">
        <a href="#" className="mt-12 flex mx-6">
          <BsChevronUp className='text-4xl font-bold arrow-up bg-zinc-900 text-gray-100 rounded p-1 dark:bg-gray-200 dark:text-zinc-900 hover:dark:bg-gray-300 hover:bg-zinc-800' />
        </a>
      </div>

      <footer className='font-roboto shadow-outer mt-6'>
      <div className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-zinc-800 bg-zinc-100">

        <div className="sm:flex sm:items-center sm:justify-between ">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img src={logo} className="mr-3 h-8" alt="Logo" />
            <span className="self-center text-2xl whitespace-nowrap dark:text-white">Coding ProGamer</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

      </div>


        <div className="footerCopyright bg-gray-300 dark:bg-stone-900 p-4 px-5 shadow dark:text-white text-gray-600 lg:text-lg text-md dark:text-gray-300 text-center">
          &copy; Coding ProGamer&#8482; All Rights Reserved
        </div>


      </footer>


      {/* <footer className="p-4 bg-white rounded-lg md:px-6 md:py-8 dark:bg-zinc-800 font-roboto shadow-outer mt-6"> 
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img src={logo} className="mr-3 h-8" alt="Logo" />
            <span className="self-center text-2xl font-cascadia whitespace-nowrap dark:text-white">Coding ProGamer</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-zinc-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> &copy; Coding ProGamer&#8482; All Rights Reserved
    </span>
</footer> */}


    </>
  )
}

export default Footer