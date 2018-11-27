var postBook = function (data) {
    $('.book-info').append(
    '<h1>' + data.items[0].volumeInfo.title + '</h1>'
    + '<p>' + data.items[0].volumeInfo.description + '</p>'
    + '<h3> Written by: ' + data.items[0].volumeInfo.authors + '</h3>'
    + '<img src=' + data.items[0].volumeInfo.imageLinks.thumbnail  + '/>'
    )
};
   
var fetch = function (url){
    $.ajax({
        method: "GET",
        url: url,
        // url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn,
        success: function(data){
            // debugger;
             postBook (data);
        },
        error: function(){
            console.log('error');
        }
    });
};

$('.search').on('click', function(){
    var isbn= $('#isbn').val();
    var url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+ isbn;
    fetch(url);
});


