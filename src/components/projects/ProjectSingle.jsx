import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function ProjectSingle() {
    const params = useParams();
    const { slug } = params;
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
                console.log(data["response"]);
            });
    }, [slug])



    return (
        <div className='container'>
            <div className="imageShow">
                <img src="" alt="" />
            </div>
            <div className="contentShow"></div>
            <div className="links"></div>
        </div>
    )
}

export default ProjectSingle