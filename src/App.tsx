import "./App.css";
import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Mens from "./Pages/Mens/Mens";
import Womens from "./Pages/Womens/Womens";
import Electronics from "./Pages/Electronics/Electronics";

function App() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </>
  );
}

export default App;
