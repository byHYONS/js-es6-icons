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

/* *****************************
            CREO ELEMENTI
***************************** */

// ciclo con il metodo forEach per costruire gli elementi:
icons.forEach((element, idx) => {
    console.log(element);
    const div = document.createElement('div');
    div.className = 'cards';
    
    const italic = document.createElement('i');
    italic.className = `${element.family} ${element.prefix}${element.name}`;
    italic.style = `color: ${element.color}`

    const text = document.createElement('span');
    text.textContent = `${element.name}`
    
    div.append(italic);
    div.append(text);
    rowItem.append(div);
});

/* *****************************
         LOGICA SELECT
***************************** */













/* *****************************
            FINE
***************************** */
