import "./app.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import ParticlesEffect from "./Components/UI/Particles/ParticlesEffect";

function App() {
  return (
    <div className="App">
      <ParticlesEffect />
      <Nav />
      <Home />
      <div style={{ height: "5000px" }}></div>
    </div>
  );
}

export default App;
