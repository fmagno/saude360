window.addEventListener("load", function () {
  console.log("LOADED");
  // $("#modals").load("modals.html");

  $("#luis").on("click", function () {
    console.log("clicked!");
    $("#luisModal").modal("show");
  });
});
