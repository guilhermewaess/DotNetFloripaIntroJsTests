define([
], function () {
	'use strict';

	var calculadora = function () {

	}
	
	calculadora.prototype.some = function (num1, num2) {
		console.log(num1, num2);
		return num1 + num2;
	}

	return calculadora;
});