const path = require('path');
const express = require('express');
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;

const app = express();
var cors = require('cors')
app.use(cors());

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended:false})
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

// Handle GET requests to /api route
app.get("/employees", (req,res)=>{
  res.json([
    {
      id : 1,
      salary: 100000,
      job: "software dev"
    },
    {
      id : 2,
      salary: 120000,
      job: "software lead"
    },
    {
      id : 3,
      salary: 90000,
      job: "junior dev"
    }
  ])
})

app.get("/deductions", (req,res)=>{
  res.json([
    {
      id : 1,
      type: "Pre-tax Withdraw",
      amount : 2000
    },
    {
      id : 2,
      type: "Health Insurance",
      amount : 8000
    },
    {
      id : 3,
      type: "Stock Options",
      amount : 3000
    }
  ])
})

// app.post("/employees/createNewEmployee", (req,res)=>
// )
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});
app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});