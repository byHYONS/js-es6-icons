// reset
'use strict';

/* *****************************
            VARIABILI
***************************** */

// array d'oggetti:
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret', 
		prefix: 'fa-',
		type: 'user',  // per selezione
		family: 'fas',
		color: 'blue'  // per il colore
	}
];

// vado in lettura del DOM:
const filtroNome = document.getElementById('typology');
const rowItem = document.querySelector('.row');
// console.log(filtroNome);

/* *****************************
        INIZIALIZZO PAGINA
***************************** */

creaElemento(icons);

// IN BASE ALLA SELEZIONE COSTRUISCO LA PAGINA:
// vado in ascolto sul selettore:
filtroNome.addEventListener('click', (e) => {
	console.log(e.target.value);
	const selezione = e.target.value;
	let tipologia = [];
	rowItem.innerHTML = '';
	
	icons.forEach(element => {
		if (selezione === element.type && selezione !== 'all') {
			return tipologia.push(element);						
		} else if (selezione === 'all') {
			return tipologia = icons;
		}
	});
	creaElemento(tipologia);
	
});

/* *****************************
         LOGICA SELECT
***************************** */

// CERCO LE TYPE UNICHE:
let tipologiaUniche = new Set();
icons.forEach(element => tipologiaUniche.add(element.type));
// console.log(tipologiaUniche);
creoSelezione(tipologiaUniche);

/* *****************************
            FUNZIONI
***************************** */

// DEFINISCO FUNZIONE PER CREARE GLI ELEMENTI:
function creaElemento(type) {
	// ciclo con il metodo forEach per costruire gli elementi:
	type.forEach(element => {
		// console.log(element);
		const div = document.createElement('div');
		div.className = 'cards';
		
		const italic = document.createElement('i');
		italic.className = `${element.family} ${element.prefix}${element.name}`;
		italic.style = `color: ${element.color}`;

		const text = document.createElement('span');
		text.textContent = `${element.name}`;
		
		div.append(italic);
		div.append(text);
		rowItem.append(div);
	});
};

// DEFINISCO FUNZIONE PER CREARE SELECT:
function creoSelezione(tipologiaUniche){
	tipologiaUniche.forEach(element => {
		// creo le option:
		const option = document.createElement('option');
		option.value = `${element}`;
		option.textContent = primaMaiuscola(element);

		filtroNome.append(option);

	});
};

// DEFINISCO FUNZIONE PER CAPITALIZED:
function primaMaiuscola(element){
	// trasformo la prima lettera in maiuscola:
	return element.charAt(0).toUpperCase() + element.slice(1);
}

/* *****************************
            FINE
***************************** */
