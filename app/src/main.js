const $ = require("jquery");

function clearInput() {
  $('input').val('');
}

function getPagesList() {
  $("h1").remove();
  $.get("./api/api.php", data => {
    data.forEach((file) => {
      $("body").append("<h1>" + file + "</h1>");
    });
  }, "JSON");
};

getPagesList();



$("button#add").on("click", () => {
  $.post("./api/createNewHtmlPage.php", {
    "name": $("input#add").val()
  }, data => {
    getPagesList();
    clearInput();
  })
  .fail(() => {
    alert("Такая страница уже существует!");
  });
});

$("button#remove").on("click", () => {
  $.post("./api/removeHtmlPage.php", {
    "name": $("input#remove").val()
  }, data => {
    getPagesList();
    clearInput();
  })
  .fail(() => {
    alert("Такой страницы не существует");
  });
});