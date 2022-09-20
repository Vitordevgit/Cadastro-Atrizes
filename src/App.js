import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AtrizesScreen from "./pages/AtrizesScreen";
import HomeScreen from "./pages/HomeScreen";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Cabeçalho</h1>
        <NavBar />
        <div className="containerNavegacao">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/AtrizesScreen" element={<AtrizesScreen />} />
          </Routes>
        </div>
      </BrowserRouter>
      <h1>Rodapé</h1>
    </div>
  );
}

export default App;
