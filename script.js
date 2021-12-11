"use strict";

const numberOfFilms = +prompt("skoljko filjmov vi uzhe posmotreli?", ""); //+ zīme pirms prompt pārvērš saņemto par skaitli

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const   a = prompt("Odin iz poslednih prosmotrennih filjmov?", ""),
//         b = prompt("Na skoljko ocenite ego?", ""),
//         c = prompt("Odin iz poslednih prosmotrennih filjmov?", ""),
//         d = prompt("Na skoljko ocenite ego?", "");

// personalMovieDB[a] = b;
// personalMovieDB[c] = d;

for (let i = 0; i <2; i++){
    const   a = prompt("Odin iz poslednih prosmotrennih filjmov?", ""),
            b = prompt("Na skoljko ocenite ego?", "");

            if (a != null && b != null && a !="" && b!="" && a.length<50) {   //ja a nav vienāds ar null (atcēla ievadi) un a nav vienāds ar tukšumu (tukšas "" pēdiņas) un a garums nav garāks par 50
            personalMovieDB[a] = b;
            console.log("Done");

            } else {
                console.log("error");
                i--;    //ja noteikumi nav izpildīti, šis ekrements atgriež atpakaļ ciklu
            }


}
if  (personalMovieDB<10) {
    console.log("Prosmotreno nalo filjmov");
    } else if (personalMovieDB.count>=10 &&personalMovieDB.count<30) {
    console.log("Vi klassnij zritelj");
    } else if (personalMovieDB.count>=30) {
    console.log("Vi kinoman!");
    } else {
        console.log("Proizoshla oshibka!!!");
    }



console.log(personalMovieDB);
