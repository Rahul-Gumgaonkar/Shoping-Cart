import "./App.css";
import AddItem from "./Components/AddItem";
import NavBar from "./Components/NavBar";
import ShowItem from "./Components/ShowItem";
function App() {
  return (
    <div className="app">
      <NavBar />
      <AddItem />
      <ShowItem />
    </div>
  );
}

export default App;
