'use strict';

var Question = require('./question.js');
var questions_json = require('./questions.json');

function StoreQuestion() {
  this.questions = [];

  this.buildQuestions();
}

StoreQuestion.prototype.take = function() {
  return this.questions.shift();
}

StoreQuestion.prototype.size = function() {
  return this.questions.length;
}

StoreQuestion.prototype.buildQuestions = function() {
  this.questions = questions_json.map(function(question){
    return new Question(question);
  });
}

module.exports = StoreQuestion;