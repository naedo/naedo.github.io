document.getElementById('generate').addEventListener('click', generateNames);

    var i, len, text;

function generateNames() {
    for (i = 0, len = 100, text = "";i < len; i++) {
            var beginning = ["Aa", "Ae", "Aur", "Al", "Ar", "Au", "Ai", "Aer", "Ba", "Ea", "Era", "Eri", "Kra", "Cra", "Kre", "Cre", "Dae", "Fa", "Ga", "Ha", "Ia", "Ja", "Ma", "Na", "Oa", "Qa", "Sa", "Ta", "Ua", "Va", "Xa"];
            var middle = ["ld", "ri", "ae", "ea", "ra", "re", "ri", "ros", "asi", "sto", "ron", "ren", "alu", "ras", "din"];
            var end = ["nir", "send", "oth", "zir", "und", "end", "ros", "ra"];
        var name = beginning[Math.floor(Math.random() * beginning.length)] + middle[Math.floor(Math.random() * middle.length)] + end[Math.floor(Math.random() * end.length)];
        text += name + "<br>";
    }
    document.getElementById('nameHolder').innerHTML = text;
}