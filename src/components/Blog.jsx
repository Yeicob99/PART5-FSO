import React, { useState } from 'react'

const Blog = ({ blog, handleLike }) => {
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

  return (
    <div style={containerStyle}>
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
          <button onClick={handleLikeClick}>Like</button>
        </>
      )}
    </div>
  )
}

export default Blog
