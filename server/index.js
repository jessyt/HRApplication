const path = require('path');
const express = require('express');
const mongoose = require("mongoose");
const Router = require("./paths")
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;

const app = express();
const MONGODB_URL='mongodb+srv://db_admin:lGl5pvlG7eFrS0qo@jessycluster.g7jbl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
var cors = require('cors')
app.use(cors());
app.use(Router);
app.use(
  express.urlencoded({ extended: true })
);
  
app.use(express.json());
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended:false})
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../frontend/build')));
app.use(bodyParser.json());
mongoose.connect(
  MONGODB_URL,
  async(err)=>{
      if(err) throw err;
      console.log("conncted to db")
  }
)


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


// app.get("/employees", async(req,res)=>{
//   res.json([
//     {
//       id : 1,
//       salary: 100000,
//       job: "software dev"
//     },
//     {
//       id : 2,
//       salary: 120000,
//       job: "software lead"
//     },
//     {
//       id : 3,
//       salary: 90000,
//       job: "junior dev"
//     }
//   ])
// })

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


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});
app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});