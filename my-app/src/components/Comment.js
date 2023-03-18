import React from 'react';
import withTimeAgo from './withTimeAgo';

const Comment = ({ body, timestamp }) => {
  const timeAgo = new Date(timestamp).toLocaleString();
  return (
    <div>
      <p>{body}</p>
      <small>{timeAgo} ({timestamp})</small>
    </div>
  );
};

export default withTimeAgo(Comment);