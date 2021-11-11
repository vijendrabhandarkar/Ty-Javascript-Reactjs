import { Route} from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import { Routes } from "react-router-dom";

const routing = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products/products" element={<Products />} />
    <Route path="/products/add-product" element={<AddProduct />} />
  </Routes>
);

export default routing;
