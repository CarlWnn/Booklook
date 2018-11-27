var postBook = function (data) {
    for(var i=0; i<10; i++){
        $('.book-info').append(
            '<h1>' + data.items[i].volumeInfo.title + '</h1>'
            + '<p>' + data.items[i].volumeInfo.description + '</p>'
            + '<h3> Written by: ' + data.items[i].volumeInfo.authors + '</h3>'
            + '<img src=' + data.items[i].volumeInfo.imageLinks.thumbnail  + '/>'
         )
    }
};
   
var fetch = function (url){
    $.ajax({
        method: "GET",
        url: url,
        success: function(data){
             //debugger;
             console.log(data);
             postBook (data);
        },
        error: function(){
            console.log('error');
        }
    });
};

$('.search').on('click', function(){
    var input= $('#input').val();
    var url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'+ input;
    fetch(url);
});


