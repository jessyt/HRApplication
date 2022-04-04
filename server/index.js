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


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});
app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});