const product = require("../models/products");
// const products=require("../models/products")

const getAllProducts = async (req, res) => {
  try {
    const products = await product.find().lean();
    res.json({
      error: false,
      message: "",
      data: products,
    });
  } catch (err) {
    next(err);
  }
};

const addProduct = async (req, res, next) => {
  const { pName, pDesc, pPrice } = req.body;
  try {
    await product.insertMany([
      {
        pName,
        pDesc,
        pPrice,
      },
    ]);
    res.json({
      error: false,
      message: "Product added successfully",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};
const editProduct = async (req, res, next) => {
  const { _id, pName, pDesc, pPrice } = req.body;
  try {
    await product.updateOne(
      { _id },
      {
        $set: {
          pName,
          pDesc,
          pPrice,
        },
      }
    );
    res.json({
      error: false,
      message: "Product updated successfully",
      data: {
        pName,
        pDesc,
        pPrice,
      },
    });
  } catch (err) {
    next(err);
  }
};
const deleteProduct = async (req, res, next) => {
  const { _id } = req.body;
  try {
    await product.deleteOne({ _id });
    res.json({
      error: false,
      message: "Product deleted successfully",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getAllProducts,
  addProduct,
  editProduct,
  deleteProduct,
};
