var ModuloAPI = (function() {

  var api = {};
  api.getData = function(url, callback) {
    $.getJSON(url, function(data) {
      if (callback) {
        callback(data)
      }
    })
  };

  return api;
})()