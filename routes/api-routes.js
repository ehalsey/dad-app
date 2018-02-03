const connection = require('mysql');

module.exports = function(app){

  app.get('/api/people/', function(request, response){
    var query = connection.query(
      "SELECT * FROM people", function(err, res){
        if(err) throw err;
        res.JSON(res);
      });
  });

};
