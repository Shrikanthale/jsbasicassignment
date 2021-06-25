//const number = parseInt(prompt("Enter positive integer number"));
const number = 5
if(number<0){
    console.log("Error ! plz enter positive number ");
}
else if(number==0){
    console.log("error!! plz enter greater than zero number")
}
else {
    var fact=1;
    for(let i = 1; i<=number; i++){
        fact=fact*i;
    }
    //document.write(fact);
    console.log(fact);
}