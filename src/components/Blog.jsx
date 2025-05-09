const Blog = ({ blog }) => {
  const containerStyle = {
    marginBottom: '10px',
    padding: '10px', 
    borderRadius: '5px',
  };

  const textStyle = {
    margin: '5px 0', // Reduce espacio entre elementos
  };

  return (
    <div style={containerStyle}>
      <h3 style={textStyle}>{blog.title}</h3>
      <p style={textStyle}>URL: <a href={blog.url}>{blog.url}</a></p>
      <p style={textStyle}>Likes: {blog.likes}</p>
    </div>
  );
};

export default Blog;