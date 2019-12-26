// -------- toggle Filter div--------//
$(document).ready(function() {
  $(".filter-image-container").click(function() {
    $(".filter-div").toggleClass("hide-div");
    //$(".filter-div").addClass("hide-div");
    var element = document.querySelector(".table-for-entry");
    if (element.className === "table-for-entry") {
      element.classList.add("width-75");
    } else if (element.className === "table-for-entry width-75") {
      element.className = "table-for-entry";
    }
  });
});
// ---------------------- Display navigation list--------------------//
function DisplayList() {
  $(".list_name").toggle();
}
