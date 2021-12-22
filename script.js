'use strict';

const produkti = {
    āboli: "auglis",
    burkāni: "dārzenis",
    biezpiens: "piena produkts",
    kartupeļi: "dārzenis",
    dzērieni: {
        fanta: "gāzēts dzēriens",
        sula: "negāzēts dzēriens",
        limonāde: "gāzēts dzēriens"
    }
};
// console.log(produkti);

const{fanta, sula, limonāde} = produkti.dzērieni;
console.log(limonāde);
