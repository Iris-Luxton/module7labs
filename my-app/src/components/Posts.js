import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MIDDLEWARE_URL = "https://jsonplaceholder.typicode.com/users/1/posts";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    fetch(MIDDLEWARE_URL)
      .then(response => response.json())
      .then(posts => {
        setPosts(posts);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const timestamp = Date.now();
    const id = posts.length + 1;
    const post = { ...newPost, timestamp, id };
    setPosts([...posts, post]);
    setNewPost({ title: "", body: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPost(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>My Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>

      <h2>Create a new post</h2>
      <h2>Please note that this submit function is not working as we don't have database set up yet</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={newPost.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Body:
          <textarea name="body" value={newPost.body} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Posts;