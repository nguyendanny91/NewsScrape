$(document).ready(function () {

$(".scrape").click(function() {
    $.ajax({ url: "/scrape", method: "GET" })
    .then(function (data) {
        console.log(data)       
    })
    .then(
        function() {
            location.reload();
        }
    );
});

$(".unscrape").click(function() {
    $.ajax({ url: "/unscrape", method: "GET" })
    .then(function (data) {
        console.log(data)       
    })
    .then(
        function() {
            location.reload();
        }
    );
});

$(".savebtn").click(function() {
    var buttonid = $(this).attr("btnid")

    var title = $("[titleid="+buttonid+"]").val()
    var text = $("[areaid="+buttonid+"]").val()


  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + buttonid,
    data: {
      // Value taken from title input
      title: title,
      // Value taken from note textarea
      body: text
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);
      // Empty the notes section
      alert("Note saved!")
    });

    
});



});