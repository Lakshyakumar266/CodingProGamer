import React, { useRef, useState, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function EditBlog(props) {
    const params = useParams();
    const { task } = params;
    const navigate = useNavigate();

    // eslint-disable-next-line no-unused-vars
    const [html, setHTML] = useState({ __html: "" });

    const [Image, setImage] = useState({
        picturePreview: '',
        pictureAsFile: '',
        fileName: ''
    })

    const [Form, setForm] = useState({
        id: '',
        title: '',
        about: '',
        content: '',
        image: '',
        slug: '',
    })

    const editorRef = useRef(null);

    useEffect(() => {
        const blogSlug = task.replace('blog_edit_', '')
        // console.log(blogSlug);
        let url = `/blog/post`;
        let requestBlogs = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ slug: blogSlug })
        };
        fetch(url, requestBlogs)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setForm(data["response"]["data"]);
                setImage({
                    picturePreview: `${process.env.REACT_APP_PROXY}/static/images/blogs/${data["response"]["data"]['image']}`,
                    /* this contains the file we want to send */
                    pictureAsFile: data["response"]["data"]['image'],

                    fileName: data["response"]["data"]['image']
                })
                setHTML({ __html: data["response"]["data"]['content'] });
            });
    }, [task])


    function handleInput(event) {
        const name = event.target.name
        const value = event.target.value
        setForm((prev) => {
            return { ...prev, [name]: value }
        })
        setForm((prev) => {
            return { ...prev, content: editorRef.current.getContent() }
        })
    }

    const handleImage = (e) => {
        setImage({
            /* contains the preview, if you want to show the picture to the user
              you can access it with this.state.currentPicture
                 */
            picturePreview: URL.createObjectURL(e.target.files[0]),
            /* this contains the file we want to send */
            pictureAsFile: e.target.files[0],

            fileName: ''
        })
    }

    const handleDeleteBlog = (e) => {
        const check = window.confirm(`Delet blog. ${Form.title}`);
        if (check) {
            fetch('/blog/delete', {
                method: 'POST',
                body: JSON.stringify({ id: Form.id }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data['response']['data']);
                    console.log(data['response']['deleted']);
                    navigate(`/dashboard/blog`)
                    // Handle data
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    }

    const handleImageSubmit = (e) => {
        // image, imageName

        const formData = new FormData();
        formData.append(
            "image",
            Image.pictureAsFile
        );
        fetch(`${process.env.REACT_APP_PROXY}/upload/blog`, {
            method: "POST",
            body: formData
        }).then((response) => {
            response.json().then((data) => {
                setImage((prev) => {
                    return { ...prev, fileName: data['data']['filename'] }
                })
                setForm((prev) => {
                    return { ...prev, image: data['data']['filename'] }
                })
                toast.success("Updated the Blog Image.", { theme: "colored", autoClose: 1000 })
            })
        });
        // console.log(Image);
        e.preventDefault()
    }

    const handleSubmit = (e) => {

        fetch('/blog/update', {
            method: 'POST',
            body: JSON.stringify(Form),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                //   console.log(data['response']['data']);
                toast.success("Updated the Blog.", { theme: "colored", autoClose: 1000 })
                navigate(`/blogpost/${Form.slug}`)
                // Handle data
            })
            .catch((err) => {
                toast.error("Can't Update the Blog.", { theme: "colored", autoClose: 1000 })
                console.log(err.message);
            });

        e.preventDefault()
    }

    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
                <h1 className="text-2xl dark:text-gray-200 mb-4">Edit Blog</h1>
                <form action="" method="POST" onSubmit={handleSubmit}>
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
                            value={Form.title}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block uppercase tracking-wide text-zinc-400 text-md font-bold mb-2" htmlFor="about">
                            About
                        </label>
                        <textarea className="no-resize appearance-none block w-full text-gray-600 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-white focus:border-gray-500 h-48 resize-none font-medium" placeholder='about...' id="about"
                            name='about'
                            value={Form.about}
                            onChange={handleInput}></textarea>

                        <p className="text-gray-600 text-xs italic">Use Only Text. Tags Not allowed.</p>

                    </div>
                    <div className="mb-5">
                        <label className="block uppercase tracking-wide text-zinc-400 text-md font-bold mb-2" htmlFor="Editor">
                            Content
                        </label>

                        <Editor id='Editor'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue={Form.content}
                            onInit={(evt, editor) => editorRef.current = editor}
                            init={{
                                height: 500,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                    'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                                ],
                                toolbar: 'undo redo | blocks | bold italic | alignleft aligncentre alignright alignjustify | indent outdent | bullist numlist | fullscreen',
                                contextmenu: 'undo redo | inserttable | cell row column deletetable | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
                            }}
                        />
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
                            value={Form.slug}
                            onChange={handleInput}
                            className="w-full rounded-md border border-gray-100 bg-white py-2 px-6 text-base font-medium text-gray-600 outline-none focus:border-gray-400 focus:shadow-md"
                        />
                    </div>

                    <div className='mb-5'>
                        <h1 className="block uppercase tracking-wide text-zinc-400 text-md font-bold mb-2">
                            Select Image.
                        </h1>
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <div className="mb-2">
                                    <input className="block w-full mb-2 text-md text-gray-900 border p-2 rounded-sm cursor-pointer bg-zinc-100 dark:text-zinc-400 focus:outline-none dark:border-gray-600 dark:placeholder-zinc-400" id="image_short" type="file" onChange={handleImage} />

                                    <input type="hidden" name="imageName" value={Image.fileName} />
                                </div>
                                <div>
                                    <img src={Image.picturePreview} alt={Image.fileName} />
                                </div>
                                <button
                                    className="hover:shadow-form rounded-md bg-zinc-800 py-2 px-4 text-center text-base text-white outline-none m-1" onClick={handleImageSubmit}>
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='text-right'>
                        <button
                            className="hover:shadow-form rounded-md bg-zinc-800 py-3 px-8 text-center text-base font-semibold text-white outline-none m-1 float-right" type='submit'>
                            POST
                        </button>

                        <button
                            className="hover:shadow-form rounded-md bg-zinc-800 py-3 px-8 text-center text-base font-semibold text-white outline-none m-1 float-left" type='button' onClick={handleDeleteBlog}>
                            DELETE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditBlog