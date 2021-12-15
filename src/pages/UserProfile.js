import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";

const url = `http://localhost:4000`;

function UserProfile({ userInformation }) {
  console.log(userInformation);

  const [userPosts, setUserPosts] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${url}/post/user/${id}`)
      .then(function (response) {
        console.log({ response });
        setUserPosts(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, [id]);

  return (
    <div className="PageWrapper">
      <h1>Username:</h1>
      <p> {userInformation.email} </p>
      <h2>Posts</h2>
      {userPosts.map((post, i) => (
        <PostCard post={post} key={i} />
      ))}
    </div>
  );
}

export default UserProfile;
