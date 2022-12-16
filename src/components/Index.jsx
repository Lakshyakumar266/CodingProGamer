import React, { useEffect, useState } from 'react'

import BlogPrev from './blogs/BlogPrev'

import Logo from './../logo.svg'
import './../App.css'
import YoutubePng from './utils/images/youtube.png'
import InstagramPng from './utils/images/instagram.png'
import LinkedinPng from './utils/images/linkedin.png'

function Index(props) {
    const [SocialLinks, setSocialLinks] = useState([])
    const [Features, setFeatures] = useState([])
    const [Blogs, setBlogs] = useState([])
    const [Projects, setProjects] = useState([])

    useEffect(() => {
        setSocialLinks({
            youtube: "/",
            instagram: "/",
            twitter: "/",
            github: "/",
            linkdin: "/"
        })

        setFeatures([
            {
                title: 'Light & Dark Theme',
                desc: 'Introducing our new feature this allows you to change colour schema.'
            },
            {
                title: 'News Letter',
                desc: 'Get daily updates and news we done in future.'
            },
            {
                title: 'Blogs',
                desc: 'Read My Blogs that must help you in future, My experience in a blog.'
            }
        ])

        setProjects([
            {
                name: "JARVIS",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
                link: "/"
            },
            {
                name: "Cardia",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
                link: "/"
            },
            {
                name: "Simple Website template",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
                link: "/"
            },
            {
                name: "React Website Giver",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
                link: "/"
            }
        ])

        setBlogs([
            {
                name: "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                description: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto.",
                datetime: "30/09/2022",
                id: "153",
                words: "18,090",
                promo: "https://picsum.photos/200/300",
                link: "/"
            },
            {
                name: "qui est esse",
                description: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla.",
                datetime: "30/09/2022",
                id: "153",
                words: "18,090",
                promo: "https://picsum.photos/300/300",
                link: "/"
            },
            {
                name: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                description: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut.",
                datetime: "30/09/2022",
                id: "153",
                words: "18,090",
                promo: "https://picsum.photos/300/400",
                link: "/"
            },
            {
                name: "eum et est occaecati",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
                datetime: "30/09/2022",
                id: "153",
                words: "18,090",
                promo: "https://picsum.photos/400/400",
                link: "/"
            },
            {
                name: "dolorem eum magni eos aperiam quia",
                description: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae.",
                datetime: "30/09/2022",
                id: "153",
                words: "18,090",
                promo: "https://picsum.photos/500/400",
                link: "/"
            }
        ])


        if (props.theme === 'light') {
            document.getElementById('themeChange').checked = false
        } else if (props.theme === 'dark') {
            document.getElementById('themeChange').checked = true
        }

    }, [props])

    const ToogleTheme = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
            props.setTheme('light')
        } else {
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
            props.setTheme('dark')
        }
    }


    return (
        <>
            <div className="container m-auto font-roboto">
                {/* Home Screen */}
                <div className="HomeScreen lg:w-95 mt-5 lg:rounded-[1rem] lg:flex justify-between items-center lg:bg-slate-50 lg:shadow-outer dark:lg:bg-[#232323] dark:text-gray-50">
                    {/* Only For Phone */}
                    <div className="block lg:hidden top p-5 items-center flex justify-center">
                        <img src={Logo} alt="logo" className='lg:w-96 lg:h-96 w-80 h-95' />
                    </div>
                    {/* For Both */}
                    <div className="left justify-items-start lg:m-4 text-center lg:text-left pt-2 lg:p-0">
                        <h2 className='text-3xl lg:text-5xl mt-5 font-light lg:pb-9'>Coding ProGamer</h2>
                        <div className="btns mt-6 lg:mt-9">
                            <a href='/' className="BlogsLink border border-neutral-900 color-bg-dark text-neutral-100 rounded-md px-4 py-2 m-2 transition duration-300 ease hover:bg-neutral-800 focus:outline-none focus:ring dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 shadow-outer text-xl">Blogs</a>

                            <a href='/' className="ProjectsLink border border-neutral-900 color-bg-dark text-neutral-100 rounded-md px-4 py-2 m-2 transition duration-300 ease hover:bg-neutral-800 focus:outline-none focus:ring dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 shadow-outer text-xl">Projects</a>
                        </div>
                    </div>
                    {/* Only For Pc */}
                    <div className="hidden lg:block right p-5 items-center flex justify-center">
                        <img src={Logo} alt="logo" className='lg:w-96 lg:h-96 w-80 h-95' />
                    </div>
                </div>


                <div className="FollowLinks mt-16">

                    {/* Follow Links */}
                    <div className="pt-10 bg-gray-50 dark:bg-transparent lg:flex ">

                        <div className="w-full lg:w-3/12 px-4 mx-auto mb-20">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-outer rounded-lg mt-16 h-52 dark:bg-[#232323] ">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full px-4 flex justify-center">
                                            <div className="absolute -m-16 -ml-20 lg:-ml-16 -mt-26">
                                                <img alt={YoutubePng} src={YoutubePng} className="shadow-outer rounded-full h-auto align-middle border-none w-36 bg-red-600" />
                                            </div>
                                        </div>
                                        <div className="px-6 ">
                                            <div className="text-center mt-24">
                                                <h3 className="text-xl mb-2 text-gray-800 mb-4 dark:text-zinc-400">
                                                    Youtube
                                                    <p>
                                                        (Coding ProGamer)
                                                    </p>
                                                </h3>
                                                <a href={SocialLinks['youtube']} className="border border-red-600 bg-red-600 text-neutral-100 rounded-md px-4 py-1 transition duration-300 ease hover:bg-red-500 focus:outline-none focus:ring">Follow Now</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/12 px-4 mx-auto mb-20">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-outer rounded-lg mt-16 h-52 dark:bg-[#232323]">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full px-4 flex justify-center">
                                            <div className="absolute -m-16 -ml-20 lg:-ml-16 -mt-26">
                                                <img alt={InstagramPng} src={InstagramPng} className="shadow-outer rounded-full h-auto align-middle border-none w-36 bg-red-600" />
                                            </div>
                                        </div>
                                        <div className="px-6">
                                            <div className="text-center  mt-24">
                                                <h3 className="text-xl mb-2 text-gray-800 mb-4 dark:text-zinc-400">
                                                    Instagram
                                                    <p>
                                                        (CodingProGamer)
                                                    </p>
                                                </h3>
                                                <a href={SocialLinks['instagram']} className="border border-red-600 bg-[#E1306C] text-neutral-100 rounded-md px-4 py-1 transition duration-300 ease hover:bg-pink-500 focus:outline-none focus:ring">Follow Now</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/12 px-4 mx-auto mb-20">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-outer rounded-lg mt-16 h-52 dark:bg-[#232323]">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full px-4 flex justify-center">
                                            <div className="absolute -m-16 -ml-20 lg:-ml-16 -mt-26">
                                                <img alt={LinkedinPng} src={LinkedinPng} className="shadow-outer rounded-full h-auto align-middle border-none w-36 bg-red-600" />
                                            </div>
                                        </div>
                                        <div className="px-6">
                                            <div className="text-center mt-24">
                                                <h3 className="text-xl mb-2 text-gray-800 mb-4 dark:text-zinc-400">
                                                    Linked In
                                                    <p>
                                                        (Lakshya Kumar)
                                                    </p>
                                                </h3>
                                                <a href={SocialLinks['instagram']} className="border border-blue-800 bg-[#0077b5] text-neutral-100 rounded-md px-4 py-1 transition duration-300 ease hover:bg-[#00a0dc] focus:outline-none focus:ring">Follow Now</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="PostsGroup grid grid-cols-3 grid-flow-row gap-4 lg:mx-0 mx-2 font-roboto">
                        <div className="ListBlogs lg:col-span-2 col-span-3">
                            <h3 className='text-2xl text-gray-700 pb-6 dark:text-gray-300 font-roboto'>Featured Blogs</h3>
                            {/* Blogs */}
                            {Blogs.map((elem, index) => (

                                <BlogPrev key={index} title={elem.name} description={elem.description} datetime={elem.datetime} id={elem.id} length={elem.words} promo={elem.promo} link={elem.link} />

                            ))}

                            <div className="my-4">

                                <a href='/' className="loadMore border border-neutral-900 color-bg-dark text-neutral-100 rounded-md px-4 py-2 m-2 transition duration-300 ease hover:bg-neutral-800 focus:outline-none focus:ring dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 shadow-outer text-xl my-4">Load More...</a>
                            </div>
                        </div>

                        <div className="ListProjects bg-gray-200 p-4 lg:col-span-1 col-span-3 dark:bg-zinc-800">

                            {/* Projects */}
                            <h3 className='text-2xl text-gray-700 mb-4 dark:text-gray-300 '>Frequent Projects</h3>

                            <div className="projects">
                                {Projects.map((elem, index) => (

                                    <div key={index} className="rounded shadow-outer bg-gray-100 m-2 dark:bg-gray-700">
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-6 mt-2 text-center text-gray-800 dark:text-gray-400">{elem.name}</div>
                                            <p className="text-gray-700 text-base dark:text-gray-500">
                                                {elem.description}
                                            </p>
                                        </div>
                                        <div className="p-6">
                                            <a href={elem.link} className="px-3 py-2 text-md font-semibold text-gray-700 dark:text-gray-400 mr-2 mb-4 underline">Read More...</a>
                                        </div>
                                    </div>

                                ))}
                                <div className="my-4">

                                    <a href='/' className="loadMore border border-neutral-900 color-bg-dark text-neutral-100 rounded-md px-4 py-2 m-2 transition duration-300 ease hover:bg-neutral-800 focus:outline-none focus:ring dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 shadow-outer text-md my-4">Load More...</a>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* News Later Subscribe */}
                    <div className="my-6 Subscribe w-95 m-auto color-bg-dark text-gray-100 p-4 lg:flex justify-between items-center shadow-outer lg:mx-0 mx-2">
                        <div className='mx-6 my-4'>
                            <h4 className='text-lg lg:text-xl text-gray-300 mb-2 uppercase'>Subscribe Our News Letter's</h4>
                            <p className='text-md text-gray-400'>We will e-mail you every new news...</p>
                        </div>
                        <form className='flex mx-6'>
                            <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-64 mr-2" placeholder="name@email.com" />

                            <input type="submit" className='border border-red-600 bg-red-600 text-neutral-100 rounded-sm px-4 py-1 transition duration-300 ease hover:bg-red-500 focus:outline-none focus:ring cursor-pointer' value="FOLLOW" />
                        </form>
                    </div>

                    {/* Features */}
                    <div className="Features bg-stone-300 font-roboto text-center dark:bg-gray-800 dark:text-zinc-200 lg:min-h-[60vh]">
                        <h3 className='text-xl lg:text-2xl text-zinc-800 p-4 text-bold dark:text-zinc-200'>Features</h3>
                        <div className='mt-2 lg:flex justify-between px-6 pb-4'>

                            <div className="features p-5">
                                <ul className='list-disc font-roboto text-left capitalize'>
                                    {Features.map((elem, index) => (

                                        <li key={index}>
                                            <b className='text-zinc-900 dark:text-zinc-300'>{elem.title}. </b>
                                            {elem.desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Settings */}
                            <div className="settings bg-stone-800 text-stone-300 p-4 px-6 min-w-[30vw] text-start lg:min-h-[40vh]">
                                <h3 className='text-xl lg:text-1xl p-4 text-bold uppercase text-center'>Settings</h3>

                                <div className="feature text-stone-200">
                                    <label className="inline-flex relative items-center cursor-pointer">
                                        <input type="checkbox" id='themeChange' className="sr-only peer" onClick={ToogleTheme} />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <span className="ml-3 text-sm font-medium text-zinc-300">Switch Dark & Light Theme.</span>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Index