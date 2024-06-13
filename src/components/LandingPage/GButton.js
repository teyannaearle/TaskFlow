import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { apiURL } from "../../util/apiURL.js";
import GoogleButton from "react-google-button";

const API = apiURL();

function GButton() {
  const auth = getAuth();
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    let result = null;

    try {
      await signInWithPopup(auth, googleProvider).then((userCred) => {
        result = userCred.user;
        const { email, accessToken } = result;
        checkUser(email, accessToken);
      });
    } catch (error) {
      result = error.code;
    }
    return result;
  };

  const checkUser = async (email, accessToken) => {
    try {
      const response = await fetch(`${API}/users/${email}`, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });

      const data = await response.json();
      const { success, payload } = data;

      if (success) {
        localStorage.setItem("user", payload.user_id);
        navigate("/home");
      } else {
        signUp(email, accessToken);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async (email, accessToken) => {
    try {
      const response = await fetch(`${API}/users/`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      const { success, payload } = data;

      if (success) {
        localStorage.setItem("user", payload.user_id);
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return <GoogleButton type="dark" className="googleButton" onClick={loginWithGoogle}  />;
}

export default GButton;
