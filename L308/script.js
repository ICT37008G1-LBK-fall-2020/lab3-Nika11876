let arr = [];
let amount = prompt("Input the amount of students", "");

for(let i = 0; i < amount; i++){
    arr[i] = prompt("input the name of a student", "");
}

arr.reverse();
alert("[" + arr.join(", ") + "]");