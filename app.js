'use strict';

var prompt = require('prompt-sync')();
var StoreQuestion = require('./store_question.js');

function App() {
  this.goodPoints = 0;
  this.badPoints = 0;
  this.storeQuestion = new StoreQuestion;

  this.start();
}

App.prototype.start = function() {
  welcomeMessage();
  var question = this.storeQuestion.take();

  while(this.playing()) {
    var answer = prompt("\tDefinición: " + question.definition + "? ");
    if(question.isValid(answer)) {
      this.assignGoodPoint();
      question = this.storeQuestion.take();
    }else {
      this.assignBadPoint();
    }
  }
  this.goodbyeMessage();
}

App.prototype.assignGoodPoint = function() {
  this.goodPoints++;
  console.log("\tCorrecto!");
}

App.prototype.assignBadPoint = function() {
  this.badPoints++;
  console.log("\tIncorrecto!, Trata de nuevo");
}

App.prototype.playing = function() {
  const maxBadPoints = this.storeQuestion.initSize/2;
  return this.storeQuestion.present && this.badPoints < maxBadPoints;
}

App.prototype.goodbyeMessage = function() {
  if(this.win()) {
    console.log("\n\tFelicitaciones!!");
  }
  else {
    console.log("\n\tSigue intentando, lo lograras :D.");
  } 
}

App.prototype.win = function() {
  return this.goodPoints == this.storeQuestion.initSize;
}

function welcomeMessage() {
  console.log("\tBienvenido a reto 5,\n\tPara jugar, solo ingresa el termino correcto para cada una de las definiciones, Listo? Vamos!");
}

new App();