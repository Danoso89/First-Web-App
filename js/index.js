(function() {

  var baseUrl = 'https://api.github.com/users/';

  var callback = function(data) {
    $(".info-container").slideDown();
    
    // Save relevant info in local storage
    localStorage.setItem(data.login,
        JSON.stringify({name: data.name, user: data.login,
        repos: data.public_repos}));
    $("#name").text(data.name);
    $("#user-name").text(data.login);
    $("#repos").text(data.public_repos);
  };

  $().ready(function() {

    // Pressing 'Enter' work as pressing the button
    $("#name-search").keydown(function(e) {
      if (e.key == 'Enter') {
        $("#btn-get").click();
      }
    });

    $('#btn-get').click(function() {
      var userName = $("input").val();
      if (userName) {
        console.log('llama a la api con userName = ' + userName);
        ModuloAPI.getData(baseUrl + userName, callback);
      } else {
        $(".info-container").slideUp();
      }
    });

  });
  


})()