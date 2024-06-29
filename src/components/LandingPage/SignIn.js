import GButton from "./GButton"

const SignIn = ({setAboutOpen}) => {
  return (
    <div className="Landing__container--signIn">
        <h2> Where Your Tasks Find Their Flow </h2>
        <GButton />
        <button className="Landing__container--aboutButton" onClick={()=>setAboutOpen(true)}>About Us</button>
    </div>   
  )
}

export default SignIn