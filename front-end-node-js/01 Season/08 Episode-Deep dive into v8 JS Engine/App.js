const { request } = require("node:http")
const { multiply } = require("./Calculate/multiply")
const {x,calculate} = require("./Calculate/sum")
const data = require("./data.json")


const str = "App.js got executed"
console.log(str)

var a = 10
var b = 20

calculate(a,b)
multiply(a,b)
console.log(x)
console.log(data)



