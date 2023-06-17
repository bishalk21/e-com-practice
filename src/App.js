import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navbar/Navigation";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <div className="main-page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route index path="login" element={<Login />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
