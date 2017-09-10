$(document).ready(function() {
  // Create Initial Arrary Called Dogs
  var dogs = ["Dalmatian", "Border Collie", "German Shorthaired Pointer", "Labrador Retriever", "Shiba Inu"];

  // Create Starting Buttons Function
  function renderButtonsZero () {
    $("#dogs-view").empty();
    for (var i = 0; i < dogs.length; i++) {
      var a = $("<button>");
      // Adding a class
      a.addClass("dog");
      // Adding a data-attribute with a value of the movie at index i
      a.attr("data-name", dogs[i]);
      // Providing the button's text with a value of the movie at index i
      a.text(dogs[i]);
      // Adding the button to the HTML
      $("#dogs-view").append(a);
    }
  }

  // Add New Buttons to Starting Buttons
  $("#add-dog").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();
    // Take Text from Text Box
    var dog = $("#dogs-input").val().trim();
    // Add dog breed input into text box to the "dogs" array
    dogs.push(dog);
    // Call RenderButtonsZero Function to Display Newly Added Button
    renderButtonsZero();
  });

  // Listen for Button Clicks and Download Gifs
  $(document).on("click", ".dog", function(event) {
    var dog = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        dog + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
          var results = response.data;
          for (var j = 0; j < results.length; j++) {
           // var gifDiv = $("<div class='item'>");

           // var rating = results[j].rating;

           // var p = $("<p>").text("Rating: " + rating);

           // var personImage = $("<img>");
           // personImage.attr("src", results[j].images.fixed_height.url);

           // gifDiv.prepend(p);
           // gifDiv.prepend(personImage);

           // $("#gifs-appear-here").prepend(gifDiv);
          }
        });
   	console.log(queryURL);
  });

  renderButtonsZero();  
 
});

  