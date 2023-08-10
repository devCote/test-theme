import "./App.scss";
import MatrixRainEffect from "./MatrixRain";

function App() {
  return (
    <div className="app-container">
      <div className="matrix-container">
         <MatrixRainEffect />
      </div>
      <div className="content-container">
        <h1 className="user">devcote</h1>
        <div className="input-container">
          <input type="password" placeholder="Enter password" />
        </div>
        <button className="button">Login</button>
      </div>
    </div>
  );
}

export default App;
