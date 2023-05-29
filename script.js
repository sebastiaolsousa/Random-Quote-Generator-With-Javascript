function getrandomindex(array){
    return Math.floor(Math.random()*array.length)
}

function randomquotegenerator(){
    var authorcontainer = document.getElementById('author-container')
    var quotecontainer = document.getElementById('quote-container')
    var quotes = [
        {
            quote: "Life is like a bicycle: to keep your balance, you need to keep moving.",
            author: "Albert Einstein",
        },
        {
            quote: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            quote: "Happiness is not something ready-made. It comes from your own actions.",
            author: "Dalai Lama"
        },
        {
            quote: "Creativity is intelligence having fun.",
            author: "Albert Einstein"
        },
        {
            quote: "The journey of a thousand miles begins with a single step.",
            author: "Laozi"
        }
    ]
    var randomindex = getrandomindex(quotes)
    var randomquote = quotes[randomindex]
    var quote = randomquote.quote
    var author = randomquote.author

    quotecontainer.innerHTML = quote
    authorcontainer.innerHTML = author
}