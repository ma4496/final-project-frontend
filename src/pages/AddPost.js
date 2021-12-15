import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddPostForm from "../components/AddPostForm";

const baseUrl = `http://localhost:4000`;

function AddPost({ userInformation }) {
  const navigate = useNavigate();

  function submitPost(e) {
    e.preventDefault();

    const postMessage = e.currentTarget.postMessage.value;
    const userName = userInformation.displayName;
    const userID = userInformation.uid;

    console.log({ postMessage });

    const url = `${baseUrl}/create?postMessage=${postMessage}&userName=${userName}&userID=${userID}`;
    axios
      .get(url)
      .then(function (response) {
        console.log({ response });
        navigate("/", { replace: true });
      })
      .catch(function (error) {
        console.warn(error);
      });
  }

  return (
    <div className="PageWrapper">
      <h1>Add Post</h1>
      <AddPostForm submitPost={submitPost} />
    </div>
  );
}

export default AddPost;
