import { useState, useEffect } from 'react'
import './Posts.css'


import { Layout, Post, Search, Sort } from '../../components'
import { AZ, ZA, } from '../../utils/sort'
import { getPosts } from '../../services/posts'

const Posts = (props) => {
  const [posts, setPosts] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState('name-ascending')

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
      setSearchResult(allPosts)
    }
    fetchPosts()
  }, [])

  const handleSort = (type) => {
    if (type !== '' && type !== undefined) {
      setSortType(type)
    }
    switch (type) {
      case 'name-ascending':
        setSearchResult(AZ(searchResult))
        break
      case 'name-descending':
        setSearchResult(ZA(searchResult))
        break
      default:
        break
    }
  }

  if (applySort) {
    handleSort(sortType)
    setApplySort(false)
  }

  const handleSearch = (event) => {
    console.log(posts)
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setSearchResult(results)
    setApplySort(true)
  }

  const handleSubmit = (event) => event.preventDefault()
    console.log('res', searchResult)
  return (
    
    <Layout user={props.user}>
      <div className="pageLabelDiv"><h1 className="pageLabel">Search Posts</h1></div>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <div className='posts'>
        {searchResult.map((post, index) => {
          return (
            <Post
              _id={post._id}
              title={post.title}
              imgURL={post.imgURL}
              key={index}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Posts
