const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    default: 0,
    required: true
  }
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
