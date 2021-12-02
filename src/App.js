import {
  NAvigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//Style
import "./App.css";

//Components
import AddPost from "./pages/AddPost";
import CreateUser from "./pages/CreateUser";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Post from "./pages/Post";
import UserProfile from "./pages/UserProfile";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
