//Tworzę funkcję przy wykorzystaniu metody map jak i funkcji strzałkowej
function podwojLiczby(tablica) {
  return tablica.map((liczba) => liczba * 2);
}
//Tworzę tablicę liczb do przetestowania funkcji
const liczby = [1, 2, 3, 4, 5];

const wynik = podwojLiczby(liczby);
console.log("Nowa tablica z podwojonymi liczbami:", wynik); //tablica podwojona
console.log("Oryginalna tablica:", liczby); //wyświetlona oryginalna tablica
