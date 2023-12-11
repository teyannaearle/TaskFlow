import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { apiURL } from "../../util/apiURL.js"
import GoogleButton from 'react-google-button' 
import axios from "axios";

const API = apiURL()

function GButton() {
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

  return (
    <GoogleButton type="dark" onClick={loginWithGoogle}/>
  )
}

export default GButton