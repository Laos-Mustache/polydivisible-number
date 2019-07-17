var bi = require("big-integer")
var range = require("lodash.range")

var alpha = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nList = [];
var rx;

function polydivisible(radix){

    if(typeof(radix) !== 'number'){
        return;
    }

    rx = radix;
    populateInitialList(rx);

    console.log(nList);



    var n = bi();
}

function populateInitialList(radix){
    
    for(var i of range(radix)){
        nList.push(bi(i).toString(radix, alpha));
    }
}

function step(){
    
}

module.exports.poly = polydivisible;