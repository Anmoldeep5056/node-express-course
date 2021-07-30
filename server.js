const express = require("express");// gives me access to the express library by searching my node_module for express
const app = express();// creates an instance for express server



const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]
app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})


app.listen(8000, function(){
	console.log("server is listening")})
