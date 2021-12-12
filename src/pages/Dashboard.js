import React, { useEffect, useState } from "react";
import axios from "axios";
//Components
import PostCard from "../components/PostCard";

const url = `http://localhost:4000`;

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        console.log({ response });
        setPosts(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, []);

  return (
    <div className="PageWrapper">
      <h1>Dashboard</h1>
      {posts.map((posts, i) => (
        <PostCard posts={posts} key={i} />
      ))}
    </div>
  );
}

export default Dashboard;
