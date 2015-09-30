define([
	'Src/Calculadora'
], function (Calculadora) {
	'use strict';
	var calculadora;

	describe('Dada uma calculadora', function () {
		it('deve somar num1 com num2', function () {
			calculadora = new Calculadora();
			expect(calculadora.some(1, 1)).toEqual(2)
		});
	});
});