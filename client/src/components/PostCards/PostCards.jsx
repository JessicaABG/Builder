import { useState, useEffect } from 'react'
import './PostCards.css'
import PostCard from '../PostCard/PostCard'
import { getPosts } from '../../services/posts'

const PostCards = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
    }
    fetchPosts()
  }, [])

  const CARDS = posts
    .reverse()
    .map((post, index) =>
        <PostCard
          _id={post._id}
          name={post.title}
          imgURL={post.imgURL}
          key={index}
        />
    )

  return (
    <>
    <h1 className="pageLabel"> Find your next Build.er</h1>
    <div className='post-cards'>
      <div className='cards'>{CARDS}</div>
    </div>
    </>
  )
}

export default PostCards
