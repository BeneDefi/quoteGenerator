let fact = document.getElementById("fact");
let btn = document.getElementById("generate-btn")

let options = {
    method: "GET",headers:{"x-api-key": apiKey},
};

let url = "https://api.api-ninjas.com/v1/quotes?category=happiness";

let generateQuote = () => {
    fetch(url,options).then((response) =>  response.json()).then((data) => {
        console.log(data);
        fact.innerText = data[0].quote;
    });
};

btn.addEventListener("click", generateQuote);
window.addEventListener("load", generateQuote);