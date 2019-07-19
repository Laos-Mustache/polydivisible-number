var z = require("./polydivisible")
var range = require("lodash.range")

//z.maxPoly(10);

for(var i of range(4, 37)){
    z.coolPoly(i);
}
//z.coolPoly(19);