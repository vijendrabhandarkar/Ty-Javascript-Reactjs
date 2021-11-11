import React from "react";

function AddProduct() {
  return (
    <div className="container">
  <form action="/products/add-product" method="POST">
    
    <div className="mb-3">
      <label for="pname" className="form-label">Product Name</label>
      <input
        type="text"
        name="pName"
        className="form-control"
        id="pname"
        aria-describedby="pname"
      />

    </div>
    <div className="mb-3">
      <label for="pdesc" className="form-label">Product Description</label>
      <input
        type="text"
        name="pDesc"
        className="form-control"
        id="pdesc"
        aria-describedby="pdesc"
      />

    </div>
    <div className="mb-3">
      <label for="pprice" className="form-label">Product Price</label>
      <input
        type="number"
        name="pPrice"
        className="form-control"
        id="pprice"
        aria-describedby="pprice"
      />

    </div>
    <button type="submit" className="btn btn-primary">ADD Product</button>
  </form>
</div>
  );
}

export default AddProduct;
