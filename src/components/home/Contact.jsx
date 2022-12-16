import React from 'react'

function Contact() {
  return (
    <>
      <div className="lg:m-4 text-center rounded lg:shadow-outer">
        <h3 className='text-2xl font-semibold text-zinc-700 mb-4 dark:text-zinc-300 p-2'> Contact Me</h3>
        <div className="contact flex justify-between lg:flex-row flex-col">

          <div className="credintials shadow-outer rounded m-4 dark:bg-zinc-800">
            <h3 className='text-xl font-semibold text-zinc-800 dark:text-zinc-300 p-2 text-center'> Emails</h3>
            <ul className='list-disc mx-4 p-4 mt-0 pt-0 text-left'>
              <li className='text-lg font-semibold text-zinc-700 m-4 dark:text-zinc-400'>getsetandcode@gmail.com (Primary email)</li>
              <li className='text-lg font-semibold text-zinc-700 m-4 dark:text-zinc-400'>contact@codingprogamer.in (Secondary email)</li>
            </ul>

            <div className="social-links mx-4 my-2">
              <ul className='list-none my-4 mt-0 pt-0 text-center flex '>
                <li className='lg:text-lg text-xs font-medium text-zinc-800 dark:text-gray-500 mx-2 my-1'>@codingprogamer <br /> (Inatagram)</li>
                <li className='lg:text-lg text-xs font-medium text-zinc-800 dark:text-gray-500 mx-2 my-1'>/codingprogamer <br /> (Twitter)</li>
                <li className='lg:text-lg text-xs font-medium text-stone-800 dark:text-gray-500 mx-2 my-1'>/lakshyakumar266 <br /> (github)</li>
              </ul>
            </div>
          </div>

          <div className="messageBox shadow-outer rounded m-4 dark:bg-zinc-800">
            <div className="mb-3 m-4 text-left">
              <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-outer min-w-[30vw] min-h-[20vh] dark:bg-gray-700 dark:placeholder-gray-500 dark:text-white" style={{ resize: "none" }} id="contactMessage" rows="5" placeholder="Enter Your Message here..."></textarea>

              <input type="submit" className='border border-neutral-900 color-bg-dark text-neutral-100 rounded-md px-8 py-1 transition duration-300 ease hover:bg-neutral-800 focus:outline-none focus:ring dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 shadow-outer text-md m-4 mx-0 cursor-pointer' value="SEND" />
            </div>
          </div>

        </div>

        <div className="Notes p-2">
          <div className="shadow-outer p-4 rounded dark:bg-gray-800">
            <h3 className='text-xl font-semibold text-zinc-800 dark:text-zinc-300 text-center'>*** Note ***</h3>
            <ul className="list-disc justify-between p-4 flex flex-wrap text-left dark:text-zinc-400">
              <div>
                <li>24/7 Support Service. Your messages are regularly checked.</li>
                <li>Self Promotion. You are not allowed to send promotion messages.</li>
              </div>

              <div>
                <li>Message Bot. You are not allowed to use bots on the website.</li>
                <li>Contact. If you are using message option then email recammended.</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact