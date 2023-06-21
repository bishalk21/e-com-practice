import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navbar/Navigation";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Categories from "./pages/categories/Categories";
import AllCategories from "./pages/categories/components/all-categories/AllCategories";
import NewsLetter from "./components/newsletter/NewsLetter";
import Furnitures from "./pages/categories/components/furniture/Furnitures";
import Electronics from "./pages/categories/components/electronics/Electronics";
import Lamps from "./pages/categories/components/lamps/Lamps";
import Kitchen from "./pages/categories/components/kitchen/Kitchen";
import Chairs from "./pages/categories/components/chairs/Chairs";
import SkinCare from "./pages/categories/components/skin-care/SkinCare";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <div className="main-page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route index path="login" element={<Login />} />

            <Route path="categories" element={<Categories />}>
              <Route path="all" element={<AllCategories />} />
              <Route path="furnitures" element={<Furnitures />} />
              <Route path="electronics" element={<Electronics />} />
              <Route path="lamps" element={<Lamps />} />
              <Route path="kitchen" element={<Kitchen />} />
              <Route path="chairs" element={<Chairs />} />
              <Route path="skin-care" element={<SkinCare />} />
            </Route>
          </Routes>
        </div>

        <NewsLetter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
