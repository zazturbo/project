"use strict";

const auto = {
    bmw: 'luxus',
    audi: 'luxus',
    mb: 'luxus',
    mazda: 'medium'
};
 console.log(auto);

 auto.renault = 'economy';
 console.log(auto);

 const tachjka = 'ford';

 auto[tachjka] = 'economy';

 console.log(auto);

 delete auto.mb;

console.log(auto);

auto.bmw = 525;
console.log(auto);

auto.bmw = {
    luxus: 525,
    jauda: 530,
    modelis: 550
};
console.log(auto);