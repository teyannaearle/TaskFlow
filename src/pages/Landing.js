import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { apiURL } from "../util/apiURL.js"
import axios from "axios";
import GoogleButton from 'react-google-button'
import "./Landing.scss"

const API = apiURL()

function Landing() {

  const auth = getAuth()

  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    let result = null;

    try { 
      await signInWithPopup(auth, googleProvider)
      .then((userCred) => { 
        result = userCred.user
        const { email, accessToken } = result
        checkUser(email, accessToken)
      }) 
    } catch(error){
      result = error.code;
    }
    return result
  }

  const checkUser = async (email, accessToken) => {
    try {
      await axios.get(`${API}/users/${email}`, {
        headers:{
          Authorization: "Bearer " + accessToken,
        }
      })
      .then((res) => {
        if (res.data.success) {
          console.log("logged in")
        } else {
          signUp(email, accessToken)
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  const signUp = async (email, accessToken) => {
    let newUser = { email };
    try {
      await axios
        .post(`${API}/users/`, newUser, {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        })
        .then((res) => {
          if (res.data.success) {
            console.log("signed up & logged in")
          }
        });
    } catch (error) {
      console.error(error);
    }
  }; 
  
  const logout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("logged outtt")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className="Landing">
      <div className="Page__container">
        <h1>TaskFlow</h1>
        <div className="Landing__container">
          <h2> Where Your Tasks Find Their Flow </h2>
          <button>About</button>
          <GoogleButton type="dark" onClick={loginWithGoogle}/>
          <button onClick={logout}>logout</button>
        </div>   
      </div>
    </div>
  )
}

export default Landing