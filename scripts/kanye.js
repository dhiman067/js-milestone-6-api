function kanyeQuote(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => loadquote(data))
}
function loadquote(quotes){
const kanyeQuote =document.getElementById('kanye-quote')
kanyeQuote.innerText =quotes.quote
}


