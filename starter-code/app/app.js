
$.get('https://den-super-crud.herokuapp.com/Books')
   .done(function(data){
   //   console.log(data.books[0].title);
   //   console.log(data.books[0].author);
   //   console.log(data.books[0].image);
   //   console.log(data.books[0].releaseDate);
   });



$("form").on("submit", function(event){

var title = $('#book-title').val();
$(Books).append()
console.log(title);

var author = $('#book-author').val();
console.log(author);

var image = $('#book-image').val();
console.log(image);

var date = $('#book-release-date').val();
console.log(date);



event.preventDefault();
});
