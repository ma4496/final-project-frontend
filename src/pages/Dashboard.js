import React, { useEffect, useState } from "react";
import axios from "axios";
//Components
import PostCard from "../components/PostCard";

const url =
  `https://evening-ocean-32386.herokuapp.com` || `http://localhost:4000`;

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://evening-ocean-32386.herokuapp.com/`)
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
      <div className="ContentWrapper">
        <h1>Dashboard</h1>
        {posts.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
