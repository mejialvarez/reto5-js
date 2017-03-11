'use strict';

var Question = require('./question.js');
var questions_json = require('./questions.json');

function StoreQuestion() {
  this.questions = [];
  this.initSize = 0;
  this.buildQuestions();
}

StoreQuestion.prototype.take = function() {
  return this.questions.shift();
}

StoreQuestion.prototype.present = function() {
  return this.questions.length > 0;
}

StoreQuestion.prototype.buildQuestions = function() {
  this.questions = questions_json.map(function(question){
    return new Question(question);
  });
  this.initSize = this.questions.length;
}

module.exports = StoreQuestion;