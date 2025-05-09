import { useState } from "react";

const CreateBlogsForm = ({ createBlog }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [blogsVisible, setBlogsVisible] = useState(false);

  const hideWhenVisible = { display: blogsVisible ? "none" : "" };
  const showWhenVisible = { display: blogsVisible ? "" : "none" };

  const submit = (event) => {
    event.preventDefault();
    createBlog({ title, author, url });
    setTitle("");
    setAuthor("");
    setUrl("");
  };

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={() => setBlogsVisible(true)}>Create Blogs</button>
      </div>
      <div style={showWhenVisible}>
        <button onClick={() => setBlogsVisible(false)}>Hide Blogs</button>
        <form onSubmit={submit}>
          <h3>Create new Blog</h3>
          <div>
            Title:
            <input
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>
          <div>
            Author:
            <input
              value={author}
              onChange={({ target }) => setAuthor(target.value)}
            />
          </div>
          <div>
            URL:
            <input
              value={url}
              onChange={({ target }) => setUrl(target.value)}
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogsForm;