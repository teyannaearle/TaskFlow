import GButton from "./GButton"

function SignIn({setAboutOpen}) {
  return (
    <div className="Landing__container--signIn">
        <h2> Where Your Tasks Find Their Flow </h2>
        <GButton />
        <button onClick={()=>setAboutOpen(true)}>About</button>
    </div>   
  )
}

export default SignIn