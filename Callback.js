function sayHello(){
    console.log("Hello");
}
function sayHii(){
    console.log("Hii")
}


function add(num1 , num2 , callback){
    console.log (num1 + num2)
    callback();
}
add(25,50,sayHello);
add(35,60,sayHii);