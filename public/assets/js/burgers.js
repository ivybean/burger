// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devour-burger").on("click", function (event) {
    var id = $(this).data("id");
    // var devourBurger = $(this).data("devourBurger");

    var burgerStatus = {
      devoured: false
    };

    $(".create-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      var newBurger = {
        name: $("#burger").val().trim(),
        devoured: false
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("added new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".devour-burger").on("click", function (event) {
      var id = $(this).data("id");

      // Send the DELETE request.
      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        function () {
          console.log("devoured burger ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
});
