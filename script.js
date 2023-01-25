function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "New Heading";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

// function mojaFunkcja() {
//   for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
//   }
// }
function mojaFunkcja1() {
  const target = 4;
  let sum = 0;

  for (let i = 0; i < target; i += 1) {
    console.log("Twoje i wynosi: " + i);
    console.log("Obliczenie: " + sum + " + " + i + " =");
    sum += i;
    console.log("Wynik: " + sum);
  }
  console.log(sum);
}
