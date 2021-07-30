const express = require("express");// gives me access to the express library by searching my node_module for express
const app = express();// creates an instance for express constructor




app.listen(8000, function(){
	console.log("server is listening")
})//this starts the server locally on the port 8000, base url becomes localhost:8000


