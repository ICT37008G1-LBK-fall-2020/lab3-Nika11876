let vInp = 0;

do {
  let value = prompt("Input currency type and value", "");
  if (value[0].toLowerCase() === "l") {
    alert(parseFloat(value.substr(1)) / 2.6);
    vInp = 1;
  } else if (value[0] === "$") {
    alert(parseFloat(value.substr(1)) * 2.6);
    vInp = 1;
  } else alert("Try again");
} while (vInp === 0);


