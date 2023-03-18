import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from './Comment';
import withTimeAgo from './withTimeAgo';

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newCommentBody, setNewCommentBody] = useState('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(post => {
        setPost(post);
      })
      .catch(error => {
        console.error(error);
      });
  }, [postId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = newCommentBody;
    const timestamp = Date.now();
    const newComment = { body, timestamp };
    setComments([...comments, newComment]);
    setNewCommentBody('');
  };

  const handleNewCommentChange = (event) => {
    setNewCommentBody(event.target.value);
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  const CommentWithTimeAgo = withTimeAgo(Comment);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <CommentWithTimeAgo key={index} body={comment.body} timestamp={comment.timestamp} />
      ))}

      <form onSubmit={handleSubmit}>
        <label>
          Comment:
          <input type="text" value={newCommentBody} onChange={handleNewCommentChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Post;