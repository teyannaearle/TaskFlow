import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./util/PrivateRoute";
import Landing from "./pages/Landing.js"
import Home from "./pages/Home.js"
import "./App.scss"


function App() {
  return (
    <div id="App">
      <Routes>
        <Route path ="/" element={<Landing />} /> 
        <Route element ={<PrivateRoute />}>
          <Route path ="/home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
