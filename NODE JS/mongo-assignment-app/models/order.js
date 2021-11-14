const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  pQuantity: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
    validate: {
      validator: (val) => {
        return !(val.toString().length > 2);
      },
      message: (val) => {
        return `${val} length should not be greater than 2`;
      },
    },
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports=mongoose.model("orders",orderSchema)