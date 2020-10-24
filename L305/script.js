let amount = prompt("Input the amount of students", "");
let students = [];

for (let i = 0; i < amount; i++) {
  students[i] = prompt("Input the name of a student", "");
}

for (let j = 0; j < amount; j++) {
  for (let i = 0; i < amount - 1; i++) {
    if (students[i] > students[i + 1]) {
      let temp = students[i];
      students[i] = students[i + 1];
      students[i + 1] = temp;
    }
  }
}

alert('[' + students.join(', ') + ']');

