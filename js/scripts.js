//business logic
function Task(what, when, where, notes) {
  this.doWhat = what;
  this.doWhen = when;
  this.doWhere = where;
  this.doNotes = notes;
}

Task.prototype.all = function () {
  return this.doWhat;
}

//user interface logic
$(document).ready(function() {
  $("form#to-do-form").submit(function(event) {
    event.preventDefault();

    var inputtedTaskWhat = $("input#to-do-entry").val();
    var inputtedTaskWhen = $("input#to-do-when-entry").val();
    var inputtedTaskWhere = $("input#to-do-where-entry").val();
    var inputtedTaskNotes = $("input#to-do-notes-entry").val();

    var newTask = new Task(inputtedTaskWhat, inputtedTaskWhen, inputtedTaskWhere, inputtedTaskNotes);

    $("ul#to-do-list").append("<li><span class='task'>" + newTask.all() + " " + "</span></li>");

    $(".task").last().click(function() {
      $("#to-do-list").show();
      $("#show-task").show();
      $("#show-task h3").text(newTask.doWhat);
      $(".do-what").text(newTask.doWhat);
      $(".do-when").text(newTask.doWhen);
      $(".do-where").text(newTask.doWhere);
      $(".do-notes").text(newTask.doNotes);
      });

      $("li").dblclick(function() {
        $("#show-task").hide();
        $(this).hide();

      });


    $("input#to-do-entry").val("");
    $("input#to-do-when-entry").val("");
    $("input#to-do-where-entry").val("");
    $("input#to-do-notes-entry").val("");
  });
});
