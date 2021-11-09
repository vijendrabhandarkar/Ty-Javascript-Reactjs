import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import HTTP from "../axiosConfig";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

function Products() {
  const [products, setproducts] = useState([]);
  const [showAddModal, setshowAddModal] = useState(false);
  const [showEditModal, setshowEditModal] = useState(false);
  const [selectedProduct, setselectedProduct] = useState({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await HTTP.get("api/products");
      console.log(response.data);
      if (response.data.error) {
        const errMessage = response.data.message;
      } else {
        const fetchedProducts = response.data.products;
        console.log("products", fetchedProducts);
        setproducts(fetchedProducts);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateShowAddModal = () => {
    setshowAddModal(true);
  };

  const hideShowModal = () => {
    setshowAddModal(false);
  };
  const hideEditShowModal = () => {
    setshowEditModal(false);
  };
  const deleteProduct = async (productId) => {
    console.log("Product ID", productId);
    try {
      const response = await HTTP.delete(`api/products/${productId}`);
      if (response.data.error) {
        alert(response.data.message);
      } else {
        // Make api call and fetching the data
        fetchProducts();

        // Find the product in the products using productId and splice from the array
        // const productsCopy = [...products];
        // const index = productsCopy.findIndex((product) => {
        //   if (product._id === productId) {
        //     return product;
        //   }
        // });
        // productsCopy.splice(index, 1);
        // setproducts(productsCopy);

        alert(response.data.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  const updateTheSelectedProduct = (product) => {
    console.log("selected product", product);
    setshowEditModal(true);
    setselectedProduct(product);
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Product Image</th>
            <th>
              <button className="btn btn-primary" onClick={updateShowAddModal}>
                ADD
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            products.map((product) => {
              return (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.productName}</td>
                  <td>{product.productPrice}</td>
                  <td>{product.productDescription}</td>
                  <td>
                    <img
                      style={{ height: "60px" }}
                      src={product.productImageURL}
                      alt={product.productName}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        updateTheSelectedProduct(product);
                      }}
                      className="btn btn-primary mb-2"
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteProduct(product._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <AddProduct
        showAddModal={showAddModal}
        fetchProducts={fetchProducts}
        hideShowModal={hideShowModal}
      />
      <EditProduct
        showEditModal={showEditModal}
        hideEditShowModal={hideEditShowModal}
        fetchProducts={fetchProducts}
        selectedProduct={selectedProduct}
      />
    </div>
  );
}
export default Products;
