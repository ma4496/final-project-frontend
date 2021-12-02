import React from "react";

function Header() {
  return (
    <header className="HeaderWrapper">
      <div className="Header PageWrapper">
        <p>Site</p>
        <nav>
          <a href="/">Dashboard</a>
          <a href="/login">Login</a>
          <a href="/create-user">Create User</a>
          <a href="/add-post">Add Post</a>
          <a href="/user/:id">My Profile</a>
          <a href="/logout">Logout</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
