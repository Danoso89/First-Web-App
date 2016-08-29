(function() {

  var baseUrl = 'https://api.github.com/users/';

  $().ready(function() {

    // Pressing 'Enter' work as pressing the button
    $("#name-search").keydown(function(e) {
      if (e.key == 'Enter') {
        $("#btn-get").click();
      }
    });

    $('#btn-get').click(function() {
      var userName = $("input").val();
      if (!!userName) {
        console.log('Calling GitHub API = ' + userName);
        ModuloAPI.getData(baseUrl + userName).done(data => {
          $(".info-container").slideDown();

          var relevantData = {name: data.name, user: data.login,
        repos: data.public_repos};
          
          // Save relevant info in local storage
          localStorage.setItem(data.login, JSON.stringify(relevantData));
          $("#name").text(data.name);
          $("#user-name").text(data.login);
          $("#repos").text(data.public_repos);

          ModuloAPI.persistData(relevantData);
        });

      } else {
        $(".info-container").slideUp();
      }
    });

    $('#server-get').click(function() {
      var serverData = ModuloAPI.getData();
      console.log(serverData);
      
    });

  });

})()