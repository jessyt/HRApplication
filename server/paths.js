const express = require("express");
const employeeModel = require("./Models/Employee");
const deductionModel = require("./Models/Deduction");
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.post("/add_employee", async (request, response) => {
    const employee = new employeeModel(request.body);
    try {
      await employee.save();
      response.send(employee);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/employees", async (request, response) => {
    const employees = await employeeModel.find({});
  
    try {
      response.send(employees);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.get("/deductions", async (request, response) => {
    const deductions = await deductionModel.find({});
    let filteredDeductions;
    if(request.query.employeeId !== null)
    {
        filteredDeductions= deductions.filter(x=> x.employeeId === request.query.employeeId)
    }
     
    try {
      response.send(filteredDeductions);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.post("/add_deduction", async (request, response) => {
    const deduction = new deductionModel(request.body);
    try {
      await deduction.save();
      response.send(deduction);
    } catch (error) {
      response.status(500).send(error);
    }
});

 module.exports = app;