import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { apiURL } from "../../util/apiURL.js"
import GoogleButton from 'react-google-button' 
import axios from "axios";

const API = apiURL()

function GButton() {
    const auth = getAuth()
    const navigate = useNavigate()

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
      // try {
      //   const response = await fetch(`${API}/users/${email}`, {
      //     headers:{
      //       Authorization: "Bearer " + accessToken,
      //     }
      //   })
      //   const {success, payload} = await response.data.json()
      //   if (success){
      //     console.log("logged in")
      //     // console.log(res.data)
      //     localStorage.setItem('user', payload.user_id)
      //     navigate("/home")
      //   } else {
      //     console.log("issue")
      //     signUp(email, accessToken)
      //   }
      // } catch (error) {
      //   console.log(error)
      //   console.error(error)
      // }

      try {
          await axios.get(`${API}/users/${email}`, {
            headers:{
              Authorization: "Bearer " + accessToken,
            }
          })
          .then((res) => {
            if (res.data.success) {
              console.log("logged in")
              console.log(res.data)
              localStorage.setItem("user", res.data.payload.user_id)
              navigate("/home")
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
                localStorage.setItem("user", res.data.payload.user_id)
                navigate("/home")
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