let number1 = parseInt(prompt("Nhập số thứ nhất"));
let number2 = parseInt(prompt("Nhập số thứ hai"));

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;   
}

alert(`số ngẫu nhiên: ${getRndInteger(number1, number2)}`);