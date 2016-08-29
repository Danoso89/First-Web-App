var ModuloAPI = (function($) {

  var api = {};

  /* With callback
  api.getData = function(url, callback) {
    $.getJSON(url, function(data) {
      if (callback) {
        callback(data)
      }
    })
  };
  */

  // With promises
    // using the promise returned byy getJSON [usign this one]
  api.getData = url => $.getJSON(url);

    // using custom promise [coded to practice on $.Deferred()]
  api.getDataPromise = function(url) {
    console.log('A custom promise is created at modulo.js');
    var deferred = $.Deferred();
    $.getJSON(url, data => deferred.resolve(data));
    console.log('promise attached to the JSON, ready to return it');
    return deferred.promise();
  },

  api.persistData = function(data) {
    // Send a POST request to the server
    $.post('http://localhost:5000/api/savedata', data)
        .done(res => console.log('SERVER: ' + res));
  }

  api.getServerData = function() {
    return $.post('http://localhost:5000/api/getdata');
  }

  return api;
})(jQuery)