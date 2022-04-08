import "./App.css";
import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes, Route, Link, BrowserRouter, Outlet} from "react-router-dom";
import ProductAdd from "./components/productAdd";
import ProductEdit from "./components/productEdit";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Products/>}/>
        <Route path="/product" element={<Home/>}>
          <Route path="list" element={<Products/>}/>
          <Route path="add" element={<ProductAdd/>}/>
          <Route path="edit/:id" element={<ProductEdit/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
