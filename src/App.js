import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./util/PrivateRoute";
import Landing from "./pages/Landing.js";
import Home from "./pages/Home.js";
import "./App.scss";
import Dailies from "./pages/Dailies.js";
import Todos from "./pages/Todos.js";

function App() {

  return (
    <div id="App">
      <Routes>
        <Route exact path ="/" element={<Landing />} /> 
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dailies" element={<Dailies />} />
          <Route path="/todos" element={<Todos />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;