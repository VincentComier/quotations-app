const form = document.getElementById("form")
console.log(form)
console.log(count)

let quoteCount = Number(0)

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const text = document.getElementById("citations").value
    const author = document.getElementById("author").value
    console.log(text, author)
    addQuote(text, author)
})

function addQuote(text, author) {
    quoteCount += 1
    document.getElementById("count")
    count.innerText=quoteCount

    let citation = document.createElement("p")
    citation.classList.add("text")
    citation.innerText = text

    let auteur = document.createElement("p")
    auteur.classList = "author"
    auteur.innerText = author

    let DivQuote = document.createElement("div")
    DivQuote.classList = "quote"
    DivQuote.appendChild(citation)
    DivQuote.appendChild(auteur)

    let QuoteList = document.getElementById("quote-list")
    QuoteList.appendChild(DivQuote)    
}
