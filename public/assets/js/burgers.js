// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".delete-burger").on("click", function (event) {
    const id = $(this).data("id");

    $.ajax("api/burgers/" + id, {
      type: "DELETE",
    }).then(function() {
      console.log("Deleted Burger");
      location.reload();
    })
  })

    $(".add-burger").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      const newBurger = {
        burger_name: $(".burger-input").val().trim(),
        devoured: 0
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function () {
          console.log("added new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".devour-burger").on("click", function (event) {
      const id = $(this).data("id");

      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: { devoured: 1 }
      }).then(function () {
          console.log("devoured burger ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });

