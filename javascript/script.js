//declaring empty variables
var quotes = [];
var quote;
var authors = [];
var author;

//wait for page to load
$(document).ready(function(){
    //get 3 parameters from link
    $.get("https://quote-garden.herokuapp.com/api/v3/quotes", (info, status, xhr) =>{
        console.log(xhr)
        // for every quote/author push it to the array
        for(i = 0; i<xhr.responseJSON.data.length;i++){
            quote = xhr.responseJSON.data[i].quoteText;
            quotes.push(quote)
        }
        for(i = 0; i<xhr.responseJSON.data.length;i++){
            author = xhr.responseJSON.data[i].quoteAuthor;
            authors.push(author)
        }

        console.log(quotes);
        console.log(authors);
    })
    // select random quote
    $("#btn").click( () =>{
        num = Math.floor(Math.random() * quotes.length)+1;

        $("#quote").text(quotes[num]);
        $("#author").text(authors[num]);
    })

});


