import { useState } from 'react'

const CreateBlogsForm = ({ createBlog }) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [blogsVisible, setBlogsVisible] = useState(false)

  const createButtonStyle = {
    width: '200px',
    height: '50px',
    paddingTop: 10,
    paddingLeft: 2,
    borderRadius: '25px',
    border: '5px rgb(0, 0, 0)',
    backgroundColor: 'rgb(187, 128, 18)',
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    cursor: 'pointer',
    fontSize: '16px',
  }
  const formStyle = {
    width: '300px',
    height: '200px',
    backgroundColor: 'rgb(187, 128, 18)',
  }

  const hideWhenVisible = { display: blogsVisible ? 'none' : '' }
  const showWhenVisible = { display: blogsVisible ? '' : 'none' }

  const submit = (event) => {
    event.preventDefault()
    createBlog({ title, author, url })
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <div className="formDiv">
      <div style={hideWhenVisible}>
        <button style={createButtonStyle} onClick={() => setBlogsVisible(true)}>Create Blogs</button>
      </div>
      <div style={showWhenVisible}>
        <button onClick={() => setBlogsVisible(false)}>Hide Blogs</button>
        <form style={formStyle} onSubmit={submit}>
          <h3>Create new Blog</h3>
          <div>
            Title:
            <input placeholder='title'
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>
          <div>
            Author:
            <input placeholder='author'
              value={author}
              onChange={({ target }) => setAuthor(target.value)}
            />
          </div>
          <div>
            URL:
            <input placeholder='url'
              value={url}
              onChange={({ target }) => setUrl(target.value)}
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlogsForm