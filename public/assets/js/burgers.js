// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eaten").on("click", function(event) {
      console.log("clicked", $(this));
      let id = $(this).data("id");  
      let newStatus = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newStatus
      }).then(
        function() {
          console.log("changed status to devoured: true");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let newBurger = {
        burgerName: $("#bur").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });