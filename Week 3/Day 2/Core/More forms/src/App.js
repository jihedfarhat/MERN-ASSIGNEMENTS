import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Forms from "./components/Forms";

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="App bg-light">
      <div className="row justify-content-center">
        <div className="col-4">
          <Forms inputs={state} setInputs={setState} />
        </div>
      </div>
    </div>
  );
}

export default App;
