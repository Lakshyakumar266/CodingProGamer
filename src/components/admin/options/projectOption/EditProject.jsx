import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Alert from '../../../Alert';

function EditProject(props) {
  const params = useParams();
  const { task } = params;
  const navigate = useNavigate();

  const [Form, setForm] = useState({
    title: '',
    content: '',
    slug: '',
    imageBig: '',
    imageShort: '',
    hasLinks: false,
    siteLink: '',
    codeLink: ''
  })


  const [Image, setImage] = useState({
    imageShort_fileName: '',
    imageBig_fileName: '',
    imageShort: {
      picturePreview: '',
      pictureAsFile: '',
    },
    imageBig: {
      picturePreview: '',
      pictureAsFile: '',
    }
  })


  useEffect(() => {
    const blogSlug = task.replace('project_edit_', '')
    // console.log(blogSlug);
    let url = `/project/post`;
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
          imageShort_fileName: data["response"]["data"]['imageShort'],
          imageBig_fileName: data["response"]["data"]['imageBig'],
          imageShort: {
            picturePreview: `${process.env.REACT_APP_PROXY}/static/images/projects/${data["response"]["data"]['imageShort']}`,
            /* this contains the file we want to send */
            pictureAsFile: data["response"]["data"]['image'],
            fileName: data["response"]["data"]['image']
          },
          imageBig: {
            picturePreview: `${process.env.REACT_APP_PROXY}/static/images/projects/${data["response"]["data"]['imageBig']}`,
            /* this contains the file we want to send */
            pictureAsFile: data["response"]["data"]['image'],
            fileName: data["response"]["data"]['image']
          }
        })
      });
  }, [task])

  const handleInput = (event) => {
    const name = event.target.name
    const value = event.target.value
    setForm((prev) => {
      return { ...prev, [name]: value }
    })
    if (name === 'hasLinks') {
      const isChecked = event.target.checked;
      setForm((prev) => {
        return { ...prev, hasLinks: isChecked }
      })
    }
  }

  const handleImage = (event) => {
    const name = event.target.name;
    if (name === 'image_short') {
      setImage((prev) => {
        return {
          ...prev,
          imageShort: {
            picturePreview: URL.createObjectURL(event.target.files[0]),
            pictureAsFile: event.target.files[0],
          }
        }
      })
    } else {
      setImage((prev) => {
        return {
          ...prev,
          imageBig: {
            picturePreview: URL.createObjectURL(event.target.files[0]),
            pictureAsFile: event.target.files[0],
          }
        }
      })
    }
  }

  const handleImageSubmit = (e) => {
    // image, imageName
    const formData = new FormData();
    formData.append(
      "images",
      Image.imageShort.pictureAsFile
    );
    formData.append(
      "images",
      Image.imageBig.pictureAsFile
    );
    fetch(`${process.env.REACT_APP_PROXY}/upload/project`, {
      method: "POST",
      body: formData
    }).then((response) => {
      response.json().then((data) => {
        setImage((prev) => {
          return { ...prev, imageBig_fileName: data['data']['imageBig'], imageShort_fileName: data['data']['imageShort'] }
        })
        setForm((prev) => {
          // ImageShort imageLarge
          return { ...prev, imageShort: data['data']['imageShort'], imageBig: data['data']['imageBig'] }
        })
        toast.success("Updated the the Project Images.",{ theme: "colored", autoClose: 1000 })
      })
    });

    e.preventDefault()
  }

  const handleSubmit = (e) => {
    console.log(Form);
    fetch('/project/update', {
      method: 'POST',
      body: JSON.stringify(Form),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data['response']);
        setForm({
          title: '',
          content: '',
          slug: '',
          imageBig: '',
          imageShort: '',
          hasLinks: false,
          siteLink: '',
          codeLink: ''
        })
        setImage({
          imageShort_fileName: '',
          imageBig_fileName: '',
          imageShort: {
            picturePreview: '',
            pictureAsFile: '',
          },
          imageBig: {
            picturePreview: '',
            pictureAsFile: '',
          }
        })
        toast.success("Updated the Project.",{ theme: "colored", autoClose: 1000 })
        navigate(`/project/${Form.slug}`)
      })
      .catch((err) => {
        console.log(err.message);
        toast.success("Can't Update the Project.",{ theme: "colored", autoClose: 1000 })
      });

    // console.log(Image);
    // console.log(Form);
    e.preventDefault();
  }


  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <h1 className="text-2xl dark:text-gray-200 mb-4">Upload Project</h1>
          <form action="" method="POST" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block uppercase tracking-wide text-zinc-400 text-md font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={Form.title}
                onChange={handleInput}
                id="title"
                placeholder="Title"
                className="w-full rounded-md border border-gray-100 bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-gray-400 focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label className="block uppercase tracking-wide text-zinc-400 text-md font-bold mb-2" htmlFor="content">
                Content
              </label>
              <textarea className="no-resize appearance-none block w-full text-gray-600 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-white focus:border-gray-500 h-48 resize-none font-medium" placeholder='content...' id="content"
                name='content'
                value={Form.content}
                onChange={handleInput}></textarea>

              <p className="text-gray-600 text-xs italic">Use Only Text. Tags Not allowed.</p>

            </div>

            <div className="mb-5">
              <label className="block uppercase tracking-wide text-zinc-400 text-md font-bold mb-2" htmlFor="slug">
                Url Slug
              </label>
              <input
                type="slug"
                name="slug"
                onChange={handleInput}
                value={Form.slug}
                id="slug"
                placeholder="slug"
                className="w-full rounded-md border border-gray-100 bg-white py-2 px-6 text-base font-medium text-gray-600 outline-none focus:border-gray-400 focus:shadow-md"
              />
            </div>

            <div className='mb-5'>
              {/* <h1 className="block uppercase tracking-wide text-zinc-400 text-md font-bold mb-2">
                                Select Large/Short Images.
                            </h1> */}
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-2">
                    <label htmlFor="image_short" className='block uppercase tracking-wide text-zinc-400 text-md font-bold mb-2'>SHORT Image</label>
                    <input className="block w-full mb-2 text-md text-gray-900 border p-1 rounded-sm cursor-pointer bg-zinc-100 dark:text-zinc-400 focus:outline-none dark:border-gray-600 dark:placeholder-zinc-400" id="image_short" type="file" name='image_short' onChange={handleImage} />
                    <input type="hidden" id="imageShort" name="ImageShort" value={Image.imageShort_fileName} />
                    <img src={Image.imageShort.picturePreview} alt="" />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-2">
                    <label htmlFor="image_big" className='block uppercase tracking-wide text-zinc-400 text-md font-bold mb-2'>LARGE Image</label>
                    <input className="block w-full mb-2 text-md text-gray-900 border p-1 rounded-sm cursor-pointer bg-zinc-100 dark:text-zinc-400 focus:outline-none dark:border-gray-600 dark:placeholder-zinc-400" id="image_big" type="file" name='image_big' onChange={handleImage} />
                    <input type="hidden" id="imageBig" name="imageBig" value={Image.imageBig_fileName} />
                    <img src={Image.imageBig.picturePreview} alt="" />
                  </div>
                </div>
                <button
                  className="hover:shadow-form rounded-md bg-zinc-800 py-2 px-4 mx-3 text-center text-base text-white outline-none" onClick={handleImageSubmit}>
                  Upload
                </button>
              </div>
            </div>

            <div className="mb-5">
              <label className="md:w-2/3 block font-bold text-zinc-400">
                <input className="mr-2 leading-tight" type="checkbox" id='hasLinks'
                  onChange={handleInput}
                  value={Form.hasLinks}
                  name='hasLinks' />
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
                      name="siteLink"
                      onChange={handleInput}
                      value={Form.siteLink}
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
                      name="codeLink"
                      onChange={handleInput}
                      value={Form.codeLink}
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

export default EditProject