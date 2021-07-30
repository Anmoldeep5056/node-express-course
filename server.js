const express = require("express");// gives me access to the express library by searching my node_module for express
const app = express();// creates an instance for express server



const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		users: req.params.id
	})
})


app.listen(8000, function(){
	console.log("server is listening")})
