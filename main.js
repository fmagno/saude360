window.addEventListener("load", function () {
  console.log("LOADED");
  // $("#modals").load("modals.html");

  $("#luis").on("click", function () {
    // console.log("clicked!");
    $("#luisModal").modal("show");
  });

  $("#miguel").on("click", function () {
    // console.log("clicked!");
    $("#miguelModal").modal("show");
  });

  $("#mara").on("click", function () {
    // console.log("clicked!");
    $("#maraModal").modal("show");
  });

  $("#iolanda").on("click", function () {
    // console.log("clicked!");
    $("#iolandaModal").modal("show");
  });
});
