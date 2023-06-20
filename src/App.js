import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navbar/Navigation";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Categories from "./pages/categories/Categories";
import AllCategories from "./pages/categories/components/all-categories/AllCategories";
import NewsLetter from "./components/newsletter/NewsLetter";

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
