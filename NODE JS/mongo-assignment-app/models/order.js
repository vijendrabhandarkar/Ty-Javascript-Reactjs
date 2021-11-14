const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  pName:{},
  pDesc:{},
  pPrice:{},
  pQuantity: {
    type: Number,
    required: true,
    min: 0,
    max: 9,
    validate: {
      validator: (val) => {
        return !(val.toString().length > 1);
      },
      message: (val) => {
        return `${val} length should not be greater than 1`;
      },
    },
  },
  totalPrice:{},
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports=mongoose.model("orders",orderSchema)