import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog, handleLike, handleDelete, user }) => {
  const [toggleBlog, setToggleblog] = useState(false)

  const containerStyle = {
    width: '300px',
    height: 'auto',
    paddingTop: 10,
    paddingLeft: 2,
    borderRadius: '25px',
    border: '5px rgb(0, 0, 0)',
    backgroundColor: 'rgb(155, 211, 138)',
    marginBottom: 15,
    textAlign: 'center',
    margin: '0 auto',
  }

  const textStyle = {
    margin: '5px 0',
  }

  const handleLikeClick = () => {
    handleLike(blog.id)
  }

  console.log('blog:', blog)
  console.log('user:', user)

  const blogUserId = typeof blog.author === 'object' ? blog.author.id : blog.author
  const canDelete = user && blogUserId === user.id


  return (
    <div style={containerStyle} className='blog-visible'>
      <h3 style={textStyle}>{blog.title}</h3>
      <button onClick={() => setToggleblog(!toggleBlog)}>
        {toggleBlog ? 'Hide' : 'View Details'}
      </button>

      {toggleBlog && (
        <>
          <p style={textStyle}>
            URL: <a href={blog.url}>{blog.url}</a>
          </p>
          <p style={textStyle}>Likes: {blog.likes}</p>
          <p style={textStyle}>Author: {typeof blog.author === 'object' ? blog.author.name : blog.author}</p>
          <button onClick={handleLikeClick}>Like</button>
          {canDelete && (
            <button onClick={() => handleDelete(blog)}> Delete </button>
          )}
        </>
      )}
    </div>
  )

}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

export default Blog
