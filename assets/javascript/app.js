$("#btn").on("click", gameStart);

var timer = 30;
var right = 0;
var wrong = 0;
var missed = 0;
$("#endBtn").click(function()
{
   $(this).data('clicked', true);
});
function gameStart() {
    var game = $("<div>");
    $(game).append("<p id='time'>Time Remaining: " + timer + "</p><br>");
    $(game).append("<h3>What does HTML stand for?<h3>");
    $(game).append("<p><input type='radio' name='1' value='true'>Hypertext Markup Language</p>");
    $(game).append("<p><input type='radio' name='1' value='false'>Hypertext Markdown Language</p>");
    $(game).append("<p><input type='radio' name='1' value='false'>Hypertype Markup Language</p>");
    $(game).append("<h3>What does CSS stand for?<h3>");
    $(game).append("<p><input type='radio' name='2' value='false'>Concise Style Sheets</p>");
    $(game).append("<p><input type='radio' name='2' value='true'>Cascading Style Sheets</p>");
    $(game).append("<p><input type='radio' name='2' value='false'>Cascading Sheet Styles</p>");
    $(game).append("<h3> What does JavaScript do?<h3>");
    $(game).append("<p><input type='radio' name='3' value='true'>Logic</p>");
    $(game).append("<p><input type='radio' name='3' value='false'>Style</p>");
    $(game).append("<p><input type='radio' name='3' value='false'>Content</p>");
    $(game).append("<button id='endBtn'>Submit</button>");

    $("#container").html(game);
    var inter = setInterval(function () {
        timer--;
        $("#time").html("Time Remaining: " + timer);
        if (timer == 0) {
            gameEnd();
        }
        else {
            clearInterval(inter);
            $("#endBtn").on("click", gameEnd);
        }
    }, 1000)
}

function gameEnd() {
    var endGame = $("<div>");
    console.log(typeof $('input[name="q1"]').val());
    for (var i = 1; i <= 3; i++) {
        if (!$('input[name=' + i + ']:checked').val()) {
            missed++;
            console.log("missed" + i);
        }
        else if ($('input[name=' + i + ']:checked').val() === "true") {
            right++;
            console.log("right" + i);
        }
        else {
            wrong++;
            console.log("wrong" + i);
        }
    }
    $(endGame).append("<p>Questions Right: " + right + "</p>");
    $(endGame).append("<p>Questions Wrong: " + wrong + "</p>");
    $(endGame).append("<p>Questions Missed: " + missed + "</p>");
    $("#container").html(endGame);
}