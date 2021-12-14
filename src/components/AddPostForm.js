import React from "react";

function AddPostForm({ submitPost }) {
  return (
    <div className="Form">
      <h2>Add Post Form</h2>
      <form onSubmit={(e) => submitPost(e)}>
        <label htmlFor="postMessage">Post Message</label>
        <input
          type="text"
          name="postMessage"
          placeholder="Enter message"
        ></input>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default AddPostForm;
