import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseConfig from "./components/FirebaseConfig";

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
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [setErrors, userInformation, setUserInformation] = useState({});
  const [appInitialized, setAppInitialized] = useState(false);

  useEffect(() => {
    initializeApp(firebaseConfig);
    setAppInitialized(true);
  }, []);

  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserInformation(user);
          setLoggedIn(true);
        } else {
          setUserInformation({});
          setLoggedIn(false);
        }
        setLoading(false);
      });
    }
  }, [appInitialized]);

  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserInformation({});
        setLoggedIn(false);
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  if (loading || !appInitialized) return null;

  function App() {
    return (
      <div>
        <Header logout={logout} loggedIn={loggedIn} />
        <Router>
          <Routes>
            <Route
              path="/login"
              element={
                !loggedIn ? (
                  <Login
                    setErrors={setErrors}
                    setLoggedIn={setLoggedIn}
                    setUserInformation={setUserInformation}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/create-user"
              element={
                !loggedIn ? (
                  <CreateUser
                    setErrors={setErrors}
                    setLoggedIn={setLoggedIn}
                    setUserInformation={setUserInformation}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/add-post"
              element={loggedIn ? <AddPost /> : <Navigate to="/login" />}
            />
            <Route
              path="/post/:id"
              element={loggedIn ? <Post /> : <Navigate to="/login" />}
            />
            <Route
              path="/user/:id"
              element={
                loggedIn ? (
                  <UserProfile userInformation={userInformation} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/"
              element={loggedIn ? <Dashboard /> : <Navigate to="/login" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
