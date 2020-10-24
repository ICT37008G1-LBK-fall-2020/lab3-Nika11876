let arr1 = [],
  arr2 = [];

let amount1 = prompt("How many students for the first array", "");
for (let i = 0; i < amount1; i++) {
  arr1[i] = prompt("Input student's name", "").trim();
}

let amount2 = prompt("How many students for the second array", "");
for (let i = 0; i < amount2; i++) {
  arr2[i] = prompt("Input student's name", "").trim();
}

let fullList = arr1.concat(arr2);

let totalAmount = parseInt(amount1) + parseInt(amount2);
for (let i = 0; i < fullList.length; i++) {
  for (let j = fullList.length - 1; j > i; j--) {
    if (fullList[i] == fullList[j]) {
      if (i == fullList.length - 1) {
        fullList.pop();
      } else {
        let temp = fullList[fullList.length - 1];
        fullList[fullList.length - 1] = fullList[j];
        fullList[j] = temp;
        fullList.pop();
      }
    }
  }
}

alert('[' + fullList.join(', ') + ']');