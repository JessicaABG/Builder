import './Home.css'
import { Layout, PostCards } from '../../components'

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='home'>
        <PostCards />
      </div>
    </Layout>
  )
}

export default Home
