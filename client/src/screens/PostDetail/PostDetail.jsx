import { useState, useEffect } from 'react'
import './PostDetail.css'
import { Layout } from '../../components'
import { getPost, deletePost } from '../../services/posts'
import { useParams, Link, useHistory } from 'react-router-dom'

const PostDetail = (props) => {
  const [post, setPost] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  const history = useHistory()
  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
      setLoaded(true)
    }
    fetchPost()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout user={props.user}>
      <div className='post-detail'>
        <img
          className='post-detail-image'
          src={post.imgURL}
          alt={post.title}
        />
        <div className='detail'>
          <div className='name'>{post.title}</div>
          <div className='price'>{`User: ${post.servicer}`}</div>
          <div className='description'>${post.description}</div>
          <div className='button-container'>
            <Link className='edit-button' to={`/posts/${post._id}/edit`}>
              Edit
            </Link>
            <button
              className='delete-button'
              onClick={async() => {await deletePost(post._id); history.push("/posts")}}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostDetail
