import React, { useCallback } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import CreateUserForm from "../components/CreateUserForm";

function CreateUser({ setLoggedIn, setUserInformation }) {
  const signUpUser = useCallback(
    (e) => {
      e.preventDefault();
      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      const displayName = e.currentTarget.displayName.value;
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
        .then((UserCredential) => {
          const user = UserCredential.user;

          user
            .updateProfile({
              displayName: username,
            })
            .then(function () {
              setLoggedIn(true);
              setUserInformation({
                email: user.email,
                displayName: user.displayName,
                uid: user.uid,
                accessToken: user.accessToken,
              });
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ error, errorCode, errorMessage });
        });
    },
    [setLoggedIn, setUserInformation]
  );
  return (
    <div>
      <h1>Create User</h1>
      <CreateUserForm signUpUser={signUpUser} />
    </div>
  );
}

export default CreateUser;
