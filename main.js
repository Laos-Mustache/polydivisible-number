var z = require("./polydivisible")
var range = require("lodash.range")

//z.maxPoly(10);

/* for(var i of range(4, 37)){
    z.coolPoly(i);
} */
z.coolPoly(25);
/* 22 1 'M'
220 2 'MK'
1476 3 'MKJ'
6820 4 'MKJL'
24549 5 'MKJLE'
67052 6 'MKJLE8'
153116 7 'MKJLE8C'
283367 8 'MKJLE8CI'
440694 9 'MKJLE8CI3'
554236 10 'MKJLE8CI3H'
605701 11 'MKJLE8CI3HB'
549067 12 'MKJLE8CI3HB9'
422610 13 'MKJLE8CI3HB9F'
263972 14 'MKJLE8CI3HB9FD'
140327 15 'MKJLE8CI3HB9FD7'
61678 16 'MKJLE8CI3HB9FD75'
21730 17 'MKJLE23FCGAID768H'
5877 18 'MKJLE23FCGAID768H9'
1182 19 'MKJHBFLDAGC2I691738'
188 20 'MKJHBFLDAGC2I6917384'
17 21 'MKJHBFLDAGC2I6917384E' */

// ~DONE~ migliorare il controllo dei caratteri perché soltanto l'ultimo inserito necessita di un controllo
// migliorare il jump delle cifre per evitare dei "negativi impliciti"
// sostituire l'inserimento in coda come stringa con formato "big-integer"