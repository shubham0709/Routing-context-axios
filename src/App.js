import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom"
import Women from "./pages/Women";
import Electronics from "./pages/Electronics";
import Jewelery from "./pages/Jewelery";
import Men from "./pages/Men";
import Item from "./pages/Item";


function App() {
  return (
    <div>
      <Navbar />
      <div className="imageContainer">
        <img className="image" src="https://img.mytheresa.com/media/static/raw/cms/l/gate_page_2022/Gatepage_May22_desktop_2x_20220513093955.jpg?imwidth=1180&imdensity=1" />
      </div>
      <Routes>
        <Route path="/jewelery" element={<Jewelery />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/women" element={<Women />} ></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
        <Route path="/item" element={<Item />}></Route>
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
