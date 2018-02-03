$(document).on('ready', function(){
  var arr = [
    {
    'firstName': 'Quentin',
    'label': 'QuentinHalsey',
    'id': 1,
    'lastName': 'Halsey'
    },
    {
    'firstName': 'Eric',
    'label': 'EricHalsey',
    'id': 2,
    'lastName': 'halsey'
    }
    ];

    $('#seach-bar').autocomplete({
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
