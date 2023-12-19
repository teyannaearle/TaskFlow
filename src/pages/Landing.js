import { useState } from "react";
import SignIn from "../components/LandingPage/SignIn.js";
import About from "../components/LandingPage/About.js";
import "./Landing.scss"

function Landing() {
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <div className="Landing">
      <div className="Landing__header">
        <h1>TaskFlow</h1>
      </div>
      <div className={!aboutOpen ? "Landing__container" : "Landing__container--scroll"}>
        {aboutOpen ? <About setAboutOpen={setAboutOpen} /> : <SignIn setAboutOpen={setAboutOpen} />}
      </div>
    </div>
  )
}

export default Landing