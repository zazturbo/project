"use strict";

const numberOfFilms = +prompt("skoljko filjmov vi uzhe posmotreli?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const   a = prompt("Odin iz poslednih prosmotrennih filjmov?", ""),
        b = prompt("Na skoljko ocenite ego?", ""),
        c = prompt("Odin iz poslednih prosmotrennih filjmov?", ""),
        d = prompt("Na skoljko ocenite ego?", "");

personalMovieDB[a] = b;
personalMovieDB[c] = d;

console.log(personalMovieDB);