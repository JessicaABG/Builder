import { useState, useEffect } from 'react'
import './App.css'
import Home from './screens/Home/Home'
import Posts from './screens/Posts/Posts'
import PostCreate from './screens/PostCreate/PostCreate'
import PostEdit from './screens/PostEdit/PostEdit'
import PostDetail from './screens/PostDetail/PostDetail'
import { Route, Switch, Redirect } from 'react-router-dom'
import { verifyUser } from './services/users'
import SignUp from './screens/SignUp/SignUp'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className="app">
      
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>
        <Route exact path="/posts">
          <Posts user={user} />
        </Route>
        <Route path="/add-post">
          {user ? <PostCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/posts/:id/edit">
          {user ? <PostEdit user={user} /> : <Redirect to='/' />}
        </Route>
        <Route exact path="/posts/:id">
          <PostDetail user={user} />
        </Route>
      </Switch>
    </div>
  )
}
export default App