function cariNackal(listName) {
    let totalMentioned = {};
    let nackal = [];

    for (let name of listName) {
        if (isNaN(totalMentioned[name])) {
            totalMentioned[name] = 1;
            continue
        }
        totalMentioned[name] = totalMentioned[name] + 1;
    }

    let max = Math.max(...Object.values(totalMentioned));

    if (max === 1) {
        return "Semuanya anak baik";
    }

    for (let [name, numMentioned] of Object.entries(totalMentioned)) {
        if (numMentioned === max) {
            nackal.push(name);
        }
    }

    return nackal.join(" dan ") + " Nackal";
}


console.log(cariNackal([ "Bagas", "Dimas", "Bagas", "Bagas",  "Indra", "Gilang", "Gilang", "Hana",  "Fajar", "Fajar" ]));
console.log(cariNackal([ "Bagas", "Dimas", "Fajar", "Bagas",  "Indra", "Gilang", "Gilang", "Bagas",  "Fajar", "Fajar" ]));
console.log(cariNackal([ "Aisyah" , "Bagas", "Dewi", "Dimas",  "Eka", "Fajar", "Gilang" , "Hana", "Indra",  "Jihan" ]));