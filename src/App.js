import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import "./App.scss"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
