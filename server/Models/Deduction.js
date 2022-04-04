const mongoose = require("mongoose");
const DeductionSchema = new mongoose.Schema({
    employeeId: {
      type: String,
      required: true,
    },
    type:{
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        default: 0,
        required: true,
    }
  });
  
  const Deduction = mongoose.model("Deduction", DeductionSchema);
  
  module.exports = Deduction;