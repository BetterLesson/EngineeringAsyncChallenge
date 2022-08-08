import {BrowserRouter, Link, NavLink, Route, Router, Routes} from "react-router-dom"
import './App.css';
import CurrentCoaches from "./CurrentCoaches"
import JoinMailingList from "./JoinMailingList"
import Home from "./Home";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CurrentCoaches" element={<CurrentCoaches />} />
        <Route path="/JoinMailingList" element={<JoinMailingList />} />
    </Routes>
  );
}

export default App;
