let x = prompt('enter the num');
let y = prompt('enter the num')
function pow(x,y) {
    if(y === 1) {
        return x;
    }else{
        return x * pow(x,y-1);
    }
}
console.log(pow(x,y)); //125