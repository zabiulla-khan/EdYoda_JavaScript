let answers = [];
var obtainedScore = 0;

function onApiCallSuccess(quizData) {
  for (i = 0; i < quizData.length; i++) {
    let quiz = quizData[i];
    let question = $("<p>");
    let questionNumber = "Q" + quiz.id + ".";
    question.text(questionNumber + quiz.question);

    question.addClass("questions");

    let option = $("<ul>");
    for (j = 0; j < quiz.options.length; j++) {
      let optionLi = $("<li>");
      let radiobtn = $("<input>").attr({
        id: "radiobutton" + i + j,
        type: "radio",
        name: "question" + i,
        value: quiz.options[j],
      });

      let label = $("<label>")
        .attr({ for: "radiobutton" + i + j })
        .text(quiz.options[j]);
      optionLi.append(radiobtn, label);
      option.append(optionLi);

      if (quiz.answer === j + 1) {
        answers.push(quiz.options[j]);
      }
    }
    $("#smallContainer").append(
      question,
      option,
      "<hr class='bisectingLine' color='#fad744'>"
    );
  }
  $("quizData");
  let submitBtn = $("<input>");
  submitBtn.attr({ type: "submit", id: "submitButton" });
  $("#smallContainer").append(submitBtn);

  $("#smallContainer").on("submit", function (e) {
    e.preventDefault();
    obtainedScore=0;
    const selectedOption = $(this).serializeArray();
    for (k = 0; k < selectedOption.length; k++) {
      if (answers.includes(selectedOption[k].value)) {
        console.log(true);
        obtainedScore++;
      }
    }
    score.text(obtainedScore);
  });
}

function onApiCallError(error) {
  alert("something went wrong");
}

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz")
  .done(onApiCallSuccess)
  .fail(onApiCallError);

let scoreBox = $("<div class='scoreBox'>");
let scoreText = $("<p>").text("Score");
let score = $("<span class='score1'>").text(obtainedScore);
let score2 = $("<span class='score2'>").text("/5");

scoreBox.append(scoreText, score, score2);
$("#bigContainer").append(scoreBox);
