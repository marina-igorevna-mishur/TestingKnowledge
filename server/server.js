// import http from "http"
// import fs from "fs"
const http = require("http")
const fs = require("fs")

http.createServer(function(request, response){
	response.setHeader("Access-Control-Allow-Origin", "*")
	response.setHeader("Access-Control-Request-Method", "*")
	response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET")
	response.setHeader("Access-Control-Allow-Headers", "*")
	console.log(`Requested Adress: ${request.url}`)
	const filePath = request.url.substr(1)
	fs.access(filePath, fs.constants.R_OK, err => {
		if(err){
			response.statusCode = 404
		}
		else{
			fs.createReadStream(filePath).pipe(response)
		}
	})
}).listen(3001, function(){
	console.log("Server started at 3001")
})