'use strict';

function Question(definition, answer) {
  this.definition = definition
  this.answer = answer
}

Question.prototype.isValid = function(answer) {
  return this.answer === answer;
}