var postBook = function (data) {
    $('.books-list').empty();

    for(var i=0; i<3; i++){
        $('.books-list').append(
            '<div class="book-info">'
            + '<h1>' + data.items[i].volumeInfo.title + '</h1>'
            + '<p>' + data.items[i].volumeInfo.description + '</p>'
            + '<h3> Written by: ' + data.items[i].volumeInfo.authors + '</h3>'
            + '<img src=' + data.items[i].volumeInfo.imageLinks.thumbnail  + '/>'
            + '</div>'
         )
    }
};
   
var fetch = function (url){
    $.ajax({
        method: "GET",
        url: url,
        success: function(data){
             //debugger;
             //console.log(data);
             postBook (data);
        },
        error: function(){
            console.log('error');
        }
    });
};

//search books by title, ISBN and author

$('.searchbytitle').on('click', function(){
    // $('#loader').show();
    var input= $('#input-title').val();
    var url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'+ input;
    fetch(url);
});

$('.searchbyauthor').on('click', function(){    
    var input= $('#input-author').val();
    var url = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:'+ input;
    fetch(url);
});

$('.searchbyisbn').on('click', function(){
    var input= $('#input-isbn').val();
    // if(isNaN(input)) {
    //   alert( "invalid ISBN number !") 
    // } else{
    var url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+ input;
    fetch(url);
    //}
});

// when clicking on a book, render only that book info
$('.books-list').on('click', '.book-info', function(){
    $('.books-list').empty();
    $('.books-list').append(this);
});


// Event for showing the loading image when waiting for ajax response
 $(document).ajaxSend(function() {
    $('#loader').show();
 });
  
$(document).ajaxComplete(function() {
    $('#loader').hide();
});


// window.Parsley.on('field:error', function() {
//     // This global callback will be called for any field that fails validation.
//     console.log('Validation failed for: ', this.$element);
//   });