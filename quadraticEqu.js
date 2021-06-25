var a=1;
var b=5;
var c=6;

var temp = b*b-4*a*c;           // formula of quadretic equetion : -b +/- root b*b - 4ac / 2a
//console.log(temp)
//var temp1=-(temp);
var root=Math.sqrt( temp );

//console.log(root);

var val1 = -b + root ;
var val2 = val1/2*a;


console.log("quadratic equation in positive : "+ val2.toFixed(2));

var val3 = -b - root;
var val4 = val3/2*a;

console.log("quadratic equation in negative : " + val4.toFixed(2));