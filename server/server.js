// import http from "http"
// import fs from "fs"
const http = require("http")
const data = require("./data")

http.createServer(function (request, response) {
	response.setHeader("Access-Control-Allow-Origin", "*")
	// response.setHeader("Access-Control-Request-Method", "*")
	// response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET")
	// response.setHeader("Access-Control-Allow-Headers", "*")
	// console.log(`Запрошенный адрес: ${request.url}`)
	// const filePath = request.url.substr(1)
	// fs.access(filePath, fs.constants.R_OK, err => {
	// 	if (err) {
	// 		response.statusCode = 404
	// 	}
	// 	else {
	// 		console.log(response)
	// 		fs.createReadStream(filePath).pipe(response)
	// 	}
	// })
	response.setHeader("Content-Type", "application/json")
	console.log(data)
	response.end(JSON.stringify(data))
}).listen(3001, function () {
	console.log("Server started at 3001")
})