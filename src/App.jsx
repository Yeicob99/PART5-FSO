import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import CreateBlogsForm from './components/CreateBlogsForm'
import Notification from './components/Notifications';

const App = () => {
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])
  

  useEffect(() => {
    if (user) {
      blogService.getAll().then(blogs => {
        console.log('Blogs fetched from API:', blogs) // Verifica la estructura de los datos
        setBlogs(blogs)
      })
    }
  }, [user])

  const handleLogin = async (credentials) => {
    try {
      const userData = await loginService.login(credentials)
      if (userData) {
        setUser(userData)
        blogService.setToken(userData.token)
        window.localStorage.setItem('loggedBlogappUser', JSON.stringify(userData))
      } else {
        console.error('No user data returned')
      }
    } catch (error) {
      console.error('Wrong credentials', error)
      setNotification('Wrong credentials'),
      setTimeout(() => setNotification(null), 5000) // Limpia el mensaje después de 5 segundos
    }
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('loggedBlogappUser')
  }

  const addBlog = async (blogObject) => {
    try {
      const newBlog = await blogService.create(blogObject)
      setBlogs(blogs.concat(newBlog))
      setNotification(`A new blog ${newBlog.title} by ${newBlog.author} added`) // Mensaje de éxito
      setTimeout(() => 
        setNotification(null), 5000) // Limpia el mensaje después de 5 segundos
    } catch (error) {
      console.error('error creating blog', error)
      setNotificacion('Error creating blog')
      setTimeout(() => setNotification(null), 5000) // Limpia el mensaje después de 5 segundos
    }
  }

  if (user === null) {
    return (
      <div>
      <Notification message = {notification} />
      <h2>Log in to application</h2>
        <LoginForm handleLogin={handleLogin} />
      </div>
    )
  }


  return (
    <div>
      <Notification message = {notification} />
      <CreateBlogsForm createBlog={addBlog} />
      <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
      <p>{user.name} logged in <button onClick={handleLogout}>Logout</button></p>
    </div>
  )
}

export default App