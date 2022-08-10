var dog = {
  name: "Elton",
  breed: "Australian Shepherd",
  age: 0.5,
};
function printName(person) {
  console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "Jenkins" });
var coordinate = { x: 34, y: 2 };
// Nesne döndüren fonksiyon
function randomCoordinate() {
  return { x: Math.random(), y: Math.random() };
}
printName({ first: "Mick", last: "Jagger" });
var coordinate2 = { x: 34, y: 2 };
function randomCoordinate2() {
  return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
  return { x: point.x * 2, y: point.y * 2 };
}
var age = 23141;
var calculatePayout = function (song) {
  return song.numStreams * 0.0033;
};
function printSong(song) {
  console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 1231413,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
