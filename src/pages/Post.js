import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//Components
import PostCard from "../components/PostCard";

const url = `http://localhost:4000`;

function Post() {
  const [singlePost, setSinglePost] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${url}/post/${id}`)
      .then(function (response) {
        console.log({ response });
        setSinglePost(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, [id]);

  return (
    <div className="PageWrapper">
      <h1>Post</h1>
      <PostCard post={singlePost} />
    </div>
  );
}

export default Post;
