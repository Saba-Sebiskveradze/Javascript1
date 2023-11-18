// დავალება1
let number1 = 100;
if(number1 < 50){
    console.log("ნაკლებია 50-ზე");
}else if(number1 > 20){
    console.log("მეტია 20-ზე");
}else{
    console.log("შეცდომაა");

}
// დავალება2
let name1 = "mariam";
if(name1 = "mariam"){
    console.log(true);
}else{
    console.log(false);
}

// დავალება3
switch(name1){
    case "mariam":
        console.log(true);
        break;
    default:
        console.log(false);
        
}
// დავალება4
let anything = true;
console.log(typeof(anything));

// დავალება5
let number = 10;
number = String(number);
console.log(typeof(number));