const express = require("express");
const employeeModel = require("./models");
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

 module.exports = app;