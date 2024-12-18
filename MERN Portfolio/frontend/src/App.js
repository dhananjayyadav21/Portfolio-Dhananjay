import "./App.css";
import Home from "./pages/Home";
import ApiState from "./context/ApiState";
function App() {
  return (
    <>
      <ApiState>
        <Home />
      </ApiState>
    </>
  );
}

export default App;
