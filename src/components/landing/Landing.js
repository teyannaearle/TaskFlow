import React from "react"
import "./Landing.scss"

function Landing() {
  return (
    <div className="Landing">
      <div className="Page__container">
        <h1>TaskFlow</h1>
        <div className="Landing__container">
          <h2> Where Your Tasks Find Their Flow </h2>
          <button>About</button>
          <button>Google</button>
        </div>   
      </div>
    </div>
  )
}

export default Landing