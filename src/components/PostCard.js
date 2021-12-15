import React from "react";

function PostCard({ post }) {
  return (
    <div className="PostCard">
      <p>{post.postMessage}</p>
    </div>
  );
}

export default PostCard;
