let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9; // ERROR
movieTitle.toUpperCase();

let numcatLives: number = 9;
numcatLives += 1;

numcatLives = "zero";
// Error

let gameOver: boolean = false;
gameOver = true;
gameOver = "true";

// ----------------------------------------------------------------
// Type Interence
// TypeScript atanan türe göre değişkeni tanımlayabilir.
// Aşağıdaki örneklerde atanan tür string ise değişkeni string olarak tanımlar. Bu değişkene boolean veya number ifade atanmaz.
// Burdan çıkarılan sonuç değişkeni "number" - "string" - "boolean" tanımlamak zorunda değilsin.
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
tvShow = false; // Error

let isFunny = false;
isFunny = true;
isFunny = "asd"; //Error
// -----------------------------------------------------------------

// the Any type
let thing: any = "hello";
thing = 1;
thing = false;
thing = [];
thing();
thing.toUpperCase();

// ---------------------------------------------------------------

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie; // Any Type

for (let movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Amadeus";
  }
}

foundMovie();
foundMovie = 1;
foundMovie.asdasdasdasd();
