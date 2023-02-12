const quote = document.getElementById('quote');
const author = document.getElementById('author');

quote.addEventListener('click', getQuote);

function getQuote(){
    fetch("https://api.quotable.io/random")
    .then(result => result.json())
    .then(data => {
        quote.innerHTML = `"${data.content}"`;
        author.innerHTML = "- "+ data.author;
    })
}