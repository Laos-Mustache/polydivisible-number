var bi = require("big-integer")
var range = require("lodash.range")

var alpha = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nList = [];
var rx;
var currentPower = 1;

function polydivisible(radix){

    if(typeof(radix) !== 'number'){
        return;
    }

    rx = radix;
    populateInitialList(rx);

    console.log(nList);

    nList.shift();
    console.log(nList);

    while(nList.length > 0){
        step();
        console.log(nList.length, currentPower, nList[nList.length-1]);
    }

    var n = bi();
}

function populateInitialList(radix){
    
    for(var i of range(radix)){
        nList.push(bi(i).toString(radix, alpha));
    }
}

function step(){

    while(nList.length > 0 && nList[0].length === currentPower){

        var v = bi(nList.shift(), rx, alpha);
        v = v.times(rx);
    
        for( let i = v; i.lesser(v.add(rx)); i = i.next() ){
            if(i.mod(currentPower + 1).eq(bi.zero)){
                nList.push(bi(i).toString(rx, alpha));
            }
        }

    }

    currentPower++;

}

module.exports.poly = polydivisible;