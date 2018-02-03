$(document).on('ready', function(){
  var arr = ['Quentin halsey', 'Eric Halsey'];

    $('#search').autocomplete({
      source: arr
    });

  $('.button').on('click', function(){
    $.ajax({
      method: 'GET',
      url: '/api/people',
    }).then(function(result){
      console.log(result + 'this is the result from the front end');
    });
  });
});
