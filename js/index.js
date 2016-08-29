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

          var relevantData = {name: data.name, user: data.login,
              repos: data.public_repos};
          
          // Show the relevant data to the user
          $(".info-container").slideDown();
          $("#name").text(data.name);
          $("#user-name").text(data.login);
          $("#repos").text(data.public_repos);

          // Persist the relevant data into the server
          ModuloAPI.persistData(relevantData);
        });

      } else {
        // Hide the information if the user field is empty
        $(".info-container").slideUp();
      }
    });

    $('#server-get').click(function() {
      ModuloAPI.getServerData().done(res => console.log(res));
    });

  });

})()