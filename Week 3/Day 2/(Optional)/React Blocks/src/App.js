import "./App.css";
import Headers from "./components/Headers";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Subcontent from "./components/Subcontent";
import Advertisement from "./components/Advertisement";
function App() {
  return (
    <div className="App">
      <Headers />
      <Navigation />
      <Main>
        <Subcontent />
        <Subcontent />
        <Subcontent />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;
