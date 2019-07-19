var bi = require("big-integer")
var range = require("lodash.range")

var alpha = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nList = [];
var rx;
var currentPower;

function maxPolydivisible(radix){

    // MAX B-2  10
    // MAX B-3  200220
    // MAX B-4  2220301
    // MAX B-5  4022042200
    // MAX B-6  52323000003
    // MAX B-7  222255000033402606
    // MAX B-8  56147660642432202
    // MAX B-9  8831805708264668401762
    // MAX B-10 3608528850368400786036725
    // MAX B-11 94028289306446AA604A08202
    // MAX B-12 606890346850BA6800B036206464
    // MAX B-13 420A26CC95820CCCA8B346A80062A0996C3
    // MAX B-14 BA280A76B2D29008B63A784800604A1A6476CC0
    // MAX B-15 6A99598095665B0EAC8A95000C9960B50AAC42

    if(typeof(radix) !== 'number'){
        return;
    }

    currentPower = 1;

    rx = radix;
    populateInitialList(rx);

    nList.shift();

    while(nList.length > 0){
        
        console.log(nList.length, currentPower, nList[nList.length-1]);
        stepForMax();
    }

    //return nList[nList.length - 1];
}

function coolPolydivisible(radix){

    if(typeof(radix) !== 'number'){
        return;
    }

    nList = [];
    currentPower = 1;

    rx = radix;
    populateInitialList(rx);

    nList.shift();

    while(nList.length > 0){
        
        console.log(nList.length, currentPower, nList[nList.length-1]);
        stepForNonRepeated();

        if(currentPower === rx - 1)
            break;
    }

    console.log(
        rx,
        nList.filter( v => {
            if(v.includes("0"))
                return false;
            return true;
        })
    );
}

function populateInitialList(radix){
    
    for(var i of range(radix)){
        nList.push(bi(i).toString(radix, alpha));
    }
}

function stepForMax(){

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

function stepForNonRepeated(){
    
    while(nList.length > 0 && nList[0].length === currentPower){

        var v = bi(nList.shift(), rx, alpha);
        v = v.times(rx);

        for( let i = v; i.lesser(v.add(rx)); i = i.next() ){
            if(isValidNotRepeated(i.toString(rx, alpha)) && i.mod(currentPower + 1).eq(bi.zero)){
                nList.push(bi(i).toString(rx, alpha));
            }
        }
    }
    currentPower++;
}

function isValidNotRepeated(n){

    if(typeof(n) !== 'string'){
        return false;
    }

    for(let i in n){
        var c = n[i];
        if(n.slice(+i + 1).includes(c))
            return false;
    }

    if(n.includes("0"))
        return false;

    return true;
}

module.exports.maxPoly = maxPolydivisible;
module.exports.coolPoly = coolPolydivisible;