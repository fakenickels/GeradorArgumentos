(function(){
	var geradorArgs = angular.module('gerador', []);

	geradorArgs.controller('AppController', function(){
		var args = {
			right: 
				{
					issue: [
						'A miséria',
						'A inflação',
						'O Golpe de 64',
						'A violência',
						'A crise',
						'O crime',
						'O nazismo',
						'O Bolsa Família',
						'O problema da edução',
						'A corrupção'
					],

					nature: [
						'é uma intervenção',
						'é uma estratégia',
						'é uma manobra',
						'é um complô',
						'é culpa',
						'é uma criação'
					],

					guilt: [
						'do PT',
						'do Fidel Castro',
						'do Comunismo',
						'dos esquerdopatas',
						'da Dilma',
						'do socialismo',
						'do Estado',
						'da ditadura gay',
						'da "esquerda caviar"',
						'dos vândalos',
						'das feminazis'
					],

					motivation: [
						'para deslegitimar',
						'para vandalizar',
						'para desmoralizar',
						'para destruir',
						'para ameaçar',
						'para regular',
						'para roubar',
						'para transgredir'
					],

					victim: [
						'a economia',
						'o livre mercado',
						'a classe média',
						'a propriedade privada',
						'a nação',
						'o progresso',
						'a família',
						'a democracia',
						'a liberdade',
						'os bons costumes',
						'o progresso'
					]
				},
			left: {
				issue: [
					'A miséria',
					'A inflação',
					'O desemprego',
					'A violência',
					'A crise',
					'O crime'
				],

				nature: [
					'é uma invenção',
					'é uma estratégia',
					'é uma manobra',
					'é um complô',
					'é uma instituição',
					'é uma criação'
				],

				guild: [
					'da burguesia',
					'do imperialismo americano',
					'das elites',
					'da oposição',
					'do capitalismo',
					'das políticas neoliberais'
				],

				motivation: [
					'para criminalizar',
					'para oprimir',
					'para desmoralizar',
					'para destruir',
					'para controlar',
					'para explorar'
				],

				victim: [
					'o povo',
					'a revolução',
					'o proletariado',
					'os movimentos sociais',
					'os avanços da democracia',
					'a conquista dos trabalhadores'
				]
			}
		}

		this.genArg = function( side ){
			var argue = [];

			for( kind in args[side] ){
				argue.push(getRandom(args[side][kind]))
			}

			this.generatedArgument = argue.join(' ') + '!';
		}

		this.generatedArgument = 'O bolsa família é uma manobra da Dilma para roubar a liberdade!';

		function getRandom( arr ){
			var lng = arr.length-1;

			return arr[Math.round(Math.random() * lng)];
		}
		window.oi = this;
	});
})()