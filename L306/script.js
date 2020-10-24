let arr = [];
let amount = prompt("Input the amount of students", "");

for (let i = 0; i < amount; i++) {
    arr[i] = prompt("input the name of a student", "");
}

let search = prompt("What is the name of the student you're seaching for", "");
let searchResult = [], n = 0;
for (let i = 0; i < amount; i++) {
    if (arr[i].indexOf(search) > -1) {
        searchResult[n] = arr[i];
        n++;
    }
}

alert('[' + searchResult.join(", ") + ']');