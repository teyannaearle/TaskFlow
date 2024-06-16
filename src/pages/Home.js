import React from 'react'
import { signOut, getAuth } from "firebase/auth"
import { useNavigate } from 'react-router-dom'

function Home() {
  const auth = getAuth()
  const navigate = useNavigate()

  const userSignOut = async () => {
    let result = null;
    try {
      await signOut(auth).then(() => {
        localStorage.setItem("user", false)
      });
      navigate("/")
    } catch (error) {
      result = error.code;
    }
    return result;
  };

  return (
    <div>
      <h3>home</h3>
      <button onClick={userSignOut}>logout</button>
      <a href="dailies"> Dailies </a>
      <a href="/todos"> To Do's</a>
    </div>

  )
}

export default Home