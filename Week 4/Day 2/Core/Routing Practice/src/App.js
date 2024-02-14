import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/:wordOrNumber" element={<Home />}></Route>
        <Route path="/:wordOrNumber/:fontColor/:backgroundcolor" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
