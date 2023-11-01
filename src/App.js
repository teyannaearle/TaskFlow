import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.js"
import "./App.scss"


function App() {
  return (
    <div id="App">
      <Routes>
        <Route path ="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
