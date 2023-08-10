import "./App.scss";
import MatrixRainEffect from "./MatrixRain";

function App() {
  return (
    <div className="app-container">
      <div className="matrix-container">
         <MatrixRainEffect />
      </div>
      <form>
        <div className="content-container">
          <h1 className="user">devcote</h1>
          <input type="password" placeholder="Enter password" />
        </div>
      </form>
    </div>
  );
}

export default App;
