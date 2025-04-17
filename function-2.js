//Tworzę funkcję
function pobierzImiona(studentsArray) {
  return studentsArray.map((student) => student.name);
}

//Tworzę przykładową tablicę studentów z różnymi danymi
const students = [
  { name: "Natalia", score: 85 },
  { name: "Kamil", score: 99 },
  { name: "Justyna", score: 100 },
  { name: "Damian", score: 90 },
];

//Wywołuję funkcję i zapisuje wynik
const imiona = pobierzImiona(students);

// Wypisuję obie tablice
console.log("Oryginalna tablica:", students);
console.log("Tablica tylko z imionami:", imiona);
