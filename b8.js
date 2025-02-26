let number1 = +prompt("Mòi bạn nhập số thứ nhất");
let number2 = +prompt("Mòi bạn nhập số thứ hai");
let number3 = +prompt("Mòi bạn nhập số thứ ba");

if(number1 > number2 && number1 > number3){
    document.write(`số lớn nhất là: ${number1}`);
} else if (number2 > number1 && number2 > number3){
    document.write(`số lơn nhất là: ${number2}`);
} else if (number3 > number1 && number3 > number2){
    document.write(`số lớn nhất là: ${number3}`);
}
