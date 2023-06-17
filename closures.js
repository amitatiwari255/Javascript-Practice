function outerFunction( x ){
    let data ="Amita"
    return function innerFunction( y ){
        console.log(data);
        return (x * y);
    }
    // return innerFunction;
    
}
var closure = outerFunction(10);
var result = closure(5);
console.log(result);