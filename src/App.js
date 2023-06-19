import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { StateProvider } from "./globalVariable";
import NavbarF from "./NavbarF";
import Orders from "./components/Orders";
import Admin from "./Admin";
import TNC from "./components/TNC";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <StateProvider>
        <BrowserRouter>
      <div className="App">
        <NavbarF />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/myorder" element={<Orders />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/tnc" element={<TNC />} />
            <Route path="/pp" element={<PrivacyPolicy />} />
          </Routes>
        <Contact />
        <Footer />
      </div>
        </BrowserRouter>
    </StateProvider>
  );
}

export default App;
