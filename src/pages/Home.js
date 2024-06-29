import { signOut, getAuth } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const Home = () => {
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
    <div className="homepage">
      <h3>home</h3>
      <button onClick={userSignOut}>logout</button>
    </div>

  )
}

export default Home