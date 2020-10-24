let str = prompt("Input a string", "");

if (str.length > 15) {
  str = str.substring(15);
  alert(str + "...");
} else alert(str);