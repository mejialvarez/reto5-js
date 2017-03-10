'use strict';

function Question(question) {
  this.definition = question.definition;
  this.answer = question.answer;
}

Question.prototype.isValid = function(answer) {
  return this.answer === answer;
}

module.exports = Question;