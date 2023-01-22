import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProjectSingle() {
    const params = useParams();
    const { slug } = params;
    const navigate = useNavigate();


    const [Post, setPost] = useState([])
    const [Paragraph, setParagraph] = useState([])

    useEffect(() => {
        let url = `/project/post`;
        let requestBlogs = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ slug: slug })
        };
        fetch(url, requestBlogs)
            .then(response => response.json())
            .then(data => {
                setPost(data["response"]["data"]);
                setParagraph(data["response"]["data"]["content"].split(/\r?\n/));
            }).catch((e) => {
                navigate('/projects')
                toast.error(`No Post Named "${slug}" `, { theme: "colored", autoClose: 1000 })
            });

    }, [navigate, slug])

    useEffect(()=>{
        /*
        Query logic
        */
        console.log('i fire once');
  },[]);

    return (
        <div className=''>
            <div className="imageShow mb-6">
                <img className='w-[100vw] h-[35vw]' src={`${process.env.REACT_APP_PROXY}/static/images/projects/${Post.imageBig}`} alt={Post.imageBig} onError={(e) => e.target.src = `/static/images/defaultImage.jpg`} />
            </div>
            <div className="container contentShow m-auto">
                <div className="title capitalize dark:text-zinc-200 mb-6">
                    <h3 className='text-3xl'>{Post.title}</h3>
                </div>

                <div className="content dark:text-zinc-200 mb-4 break-words	">
                    {Paragraph.map((element, index) => (
                        <p key={index} className="m-2">{element}</p>
                    ))}
                </div>

                <div className="links">
                    {Post.links ? (
                        <>
                            <a href={Post.siteLink} target="_blank" rel="noreferrer" type="button" className="inline-block px-6 py-2.5 dark:bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md dark:hover:bg-gray-900 hover:bg-zinc-900 hover:shadow-sm dark:focus:bg-gray-900 focus:bg-zinc-900 focus:shadow-lg focus:outline-none focus:ring-0 dark:active:bg-gray-900 active:bg-zinc-900 active:shadow-lg transition duration-150 ease-in-out color-bg-dark mx-2"><span>View Site</span></a>

                            <a href={Post.codeLink} target='_blank' rel="noreferrer" type="button" className="inline-block px-6 py-2.5 dark:bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md dark:hover:bg-gray-900 hover:bg-zinc-900 hover:shadow-sm dark:focus:bg-gray-900 focus:bg-zinc-900 focus:shadow-lg focus:outline-none focus:ring-0 dark:active:bg-gray-900 active:bg-zinc-900 active:shadow-lg transition duration-150 ease-in-out color-bg-dark mx-2"><span>View Code</span></a>
                        </>
                    ) : (
                        <>
                            <div className='text-lg text-gray-600 dark:text-gray-400'>
                                This Projects Has no Links...
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectSingle