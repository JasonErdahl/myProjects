
    // The createRow function takes data returned by OMDB and appends the table data to the tbody
    // var createRow = function(data) {
      // Get reference to existing tbody element, create a new table row element
    //   var tBody = $("tbody");
    //   var tRow = $("<tr>");

      // Methods run on jQuery selectors return the selector they we run on
      // This is why we can create and save a reference to a td in the same statement we update its text
      /*
      var searchTerm = $('#searchTerm');
      var titleTd = $("<td>").text(data.Title);
      var yearTd = $("<td>").text(data.Year);
      var actorsTd = $("<td>").text(data.Actors);
      */
      // Append the newly created table data to the table row
    //   tRow.append(titleTd, yearTd, actorsTd);
      // Append the table row to the table body
    //   tBody.append(tRow);
    // };

    // The search OMDB function takes a movie, searches the omdb api for it, and then passes the data to createRow
    $(document).ready(function(){

        var searchTerm = [];
        var numRecords = 5;
        var startYear = 1912;
        var endYear = 1990;

        var apiKey = "426a3fe2138d4c8790fcf7d426cebe3d"
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        queryURL += '?' + $.param({
                    'api-key': apiKey,
                    'q': searchTerm,
                    'begin_date': startYear+'0101',
                    'end_date': endYear+'1231'
                    });
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            // createRow(response);
      });
  

    // Search the OMDB API for the following movies, and append table rows for each


    $("#searchButton").on("click", function(event) {
        event.preventDefault();
        var search = $("#searchTerm").val();
        searchTerm.push(search);
        console.log(searchTerm)
        $("#display").append(searchTerm)
        // This line grabs the input from the textbox
        /*
        var searchTerm = $("#searchTerm").val().trim();
        var numRecords = $("#numRecords").val().trim();
        var startYear = $("#startYear").val().trim();
        var endYear = $("#endYear").val().trim();
        */
        // Adding movie from the textbox to our array
        // movies.push(movie);

        // Calling renderButtons which handles the processing of our movie array
        // renderButtons();
      });
});