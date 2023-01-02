import React from 'react'

function UploadProject() {
    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                    <h1 className="text-2xl dark:text-gray-200 mb-4">Upload Project</h1>
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div className="mb-5">
                            <label className="block uppercase tracking-wide text-zinc-400 text-md font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Title"
                                className="w-full rounded-md border border-gray-100 bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-gray-400 focus:shadow-md"
                            />
                        </div>

                        <div className="mb-5">
                            <label className="block uppercase tracking-wide text-zinc-400 text-md font-bold mb-2" htmlFor="content">
                                Content
                            </label>
                            <textarea className="no-resize appearance-none block w-full text-gray-600 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-white focus:border-gray-500 h-48 resize-none font-medium" placeholder='content...' id="content"></textarea>

                            <p className="text-gray-600 text-xs italic">Use Only Text. Tags Not allowed.</p>

                        </div>

                        <div className="mb-5">
                            <label className="block uppercase tracking-wide text-zinc-400 text-md font-bold mb-2" htmlFor="slug">
                                Url Slug
                            </label>
                            <input
                                type="slug"
                                name="slug"
                                id="slug"
                                placeholder="slug"
                                className="w-full rounded-md border border-gray-100 bg-white py-2 px-6 text-base font-medium text-gray-600 outline-none focus:border-gray-400 focus:shadow-md" 
                            />
                        </div>

                        <div className='mb-5'>
                            <h1 className="block uppercase tracking-wide text-zinc-400 text-md font-bold mb-2">
                                Select Large/Short Images.
                            </h1>
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-2">
                                        <input className="block w-full mb-2 text-md text-gray-900 border p-1 rounded-sm cursor-pointer bg-zinc-100 dark:text-zinc-400 focus:outline-none dark:border-gray-600 dark:placeholder-zinc-400" id="image_short" type="file" />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-2">
                                        <input className="block w-full mb-2 text-md text-gray-900 border p-1 rounded-sm cursor-pointer bg-zinc-100 dark:text-zinc-400 focus:outline-none dark:border-gray-600 dark:placeholder-zinc-400" id="image_large" type="file"  />
                                    </div>
                                </div>
                                <button
                                    className="hover:shadow-form rounded-md bg-zinc-800 py-2 px-4 mx-3 text-center text-base text-white outline-none">
                                    Upload
                                </button>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label className="md:w-2/3 block font-bold text-zinc-400">
                                <input className="mr-2 leading-tight" type="checkbox" id='links'/>
                                <span className="text-md">
                                    Links Enabled/Disabled
                                </span>
                            </label>
                        </div>

                        <div className='mb-5'>
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-2">
                                        <label className="block uppercase tracking-wide text-zinc-400 text-md font-bold mb-2" htmlFor="Site_Link">
                                            Site Link
                                        </label>
                                        <input
                                            type="Site_Link"
                                            name="Site_Link"
                                            id="Site_Link"
                                            placeholder="https://xyzsite.com/"
                                            className="w-full rounded-md border border-gray-100 bg-white py-2 px-4 text-base font-medium text-gray-600 outline-none focus:border-gray-400 focus:shadow-md" />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-2">
                                        <label className="block uppercase tracking-wide text-zinc-400 text-md font-bold mb-2" htmlFor="Code_Link">
                                            Code Link
                                        </label>
                                        <input
                                            type="Code_Link"
                                            name="Code_Link"
                                            id="Code_Link"
                                            placeholder="https://www.github.com/mycodelink"
                                            className="w-full rounded-md border border-gray-100 bg-white py-2 px-4 text-base font-medium text-gray-600 outline-none focus:border-gray-400 focus:shadow-md" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='text-right'>
                            <button
                                className="hover:shadow-form rounded-md bg-zinc-800 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                POST
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UploadProject