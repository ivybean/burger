
$(function () {
  $(".delete-burger").on("click", function (event) {
    const id = $(this).data("id");

    $.ajax("api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("Deleted Burger");
      location.reload();
    })
  })

  $(".add-burger-btn").on("submit", function (event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $(".burger-input").val().trim(),
      devoured: 0,
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("added new burger");
      location.reload();
    }
    );
  });

  $(".devour-burger-btn").on("click", function (event) {
    const id = $(this).data("id");

    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: { devoured: 1 },
    }).then(function () {
      console.log("devoured burger ", id);
      location.reload();
    }
    );
  });
});

