
let user_sentance = prompt("qu'as tu à me dire ?");

let answer = "";


if (user_sentance.includes("?")) {
    answer = "Ouais Ouais...";
} else if (user_sentance === user_sentance.toUpperCase()) {
    answer = "Pwa, calme-toi...";
} else if (user_sentance.includes("Fortnite") || user_sentance.includes("fortnite") || user_sentance.includes("FORTNITE")) {
    answer = "on s' fait une partie soum-soum ?";
} else if (user_sentance === "") {
    answer = "t'es en PLS ?";
} else {
    answer = "balek.";
}

console.log(answer);