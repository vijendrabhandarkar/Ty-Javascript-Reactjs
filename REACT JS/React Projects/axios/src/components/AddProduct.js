import axios from "axios";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function AddProduct(props) {
  const [singleProduct, setsingleProduct] = useState({
    productName: "",
    productPrice: "",
    productImageURL: "",
    productDescription: "",
  });
  const handleClose = () => {
    props.hideShowModal();
  };
  const addProduct = async () => {
    console.log("Single Product", singleProduct);
    try {
      const response = await axios.post(
        "https://ty-shop.herokuapp.com/api/products",
        singleProduct
      );
      console.log("add api response", response);
      if (response.data.error) {
        alert(response.data.message);
      } else {
        // To close the modal
        props.hideShowModal();
        // To fetch the products after adding new product
        props.fetchProducts();
        // To display success message
        alert(response.data.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  const handleProductChange = (event) => {
    setsingleProduct({
      ...singleProduct,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <Modal show={props.showAddModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Product Name</label>
              <input
                name="productName"
                value={singleProduct.productName}
                onChange={handleProductChange}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Product Price</label>
              <input
                name="productPrice"
                value={singleProduct.productPrice}
                onChange={handleProductChange}
                type="number"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Product Description</label>
              <input
                name="productDescription"
                value={singleProduct.productDescription}
                onChange={handleProductChange}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Product Image</label>
              <input
                name="productImageURL"
                value={singleProduct.productImageURL}
                onChange={handleProductChange}
                type="text"
                className="form-control"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addProduct}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProduct;
