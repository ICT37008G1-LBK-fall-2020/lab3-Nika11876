let str = prompt("input a string", "");
let forbiddenWords = ["რეკლამა", "მარკეტინგი", "ვირუსი"];
let doomed = false;

for (let i = 0; i < 3; i++) {
  if (str.indexOf(forbiddenWords[i]) != -1) {
    doomed = true;
  }
}

if (doomed) {
  alert("Contains forbidden words");
} else alert("Does not contain forbidden words");
