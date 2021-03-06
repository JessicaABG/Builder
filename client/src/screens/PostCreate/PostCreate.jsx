import { useState } from 'react'
import './PostCreate.css'
import { Layout } from '../../components'
import { Redirect } from 'react-router-dom'
import { createPost } from '../../services/posts'

const PostCreate = (props) => {
  const [post, setPost] = useState({
    title: '',
    imgURL: '',
    servicer: '',
    description: '',
  })
console.log(props);
  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setPost({
      ...post,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createPost(post)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/posts`} />
  }
  return (
    <>
    
    <Layout user={props.user}>
    <div className="pageLabelDiv"><h1 className="pageLabel">Post New Project</h1></div>
      <form className='create-form' onSubmit={handleSubmit}>
        
        <input
          className='servicer'
          placeholder='Servicer'
          value={post.servicer}
          name='servicer'
          required
          onChange={handleChange}
        />
 
        <input
          className='input-image-link'
          placeholder='Image Link'
          value={post.imgURL}
          name='imgURL'
          required
          onChange={handleChange}
        />

        
        <input
          className='input-name'
          placeholder='Title'
          value={post.title}
          name='title'
          required
          autoFocus
          onChange={handleChange}
        />
        <textarea
          className='textarea-description'
          rows={5}
          placeholder='Description'
          value={post.description}
          name='description'
          required
          onChange={handleChange}
        />
        <button 
        type='submit' className='submit-button'>
          Submit
        </button>

      </form>
      
    </Layout>
    </>
  )
}

export default PostCreate
