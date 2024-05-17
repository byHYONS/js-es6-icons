# ESERCIZIO: Icons

> [! NOTE]
>
> cartella/repo:  js-es6-icons

- Realizzare un sistema di rappresentazione icone, prendendo spunto dal layout di riferimento.

Le icone presenti nella struttura dati fanno riferimento alla nota libreria **Font Awesome**,
perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina.

• Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?

Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome.

Solamente quando la parte logica è completa, ci dedichiamo al css.

#### Milestone 0
Come possiamo inserire un'icona nella pagina se la sua sintassi è (partendo dalla struttura dati) quella visualizzata qui sotto?
 `<i class="family prefix-name"></i>`

#### Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

#### Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

#### Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone: `animal, vegetable, user`.
- Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

#### BONUS
popolare le options della select della milestone 3 dinamicamente.

## Svolgimento:
1. definisco un array d'oggetti con gli elementi assegnati;

2. vado in lettura del DOM;

3. con istruzione di iterazione ciclo, tramite il `forEach`, l'array per adare a costruire tutti gli elementi;

4. creo contenitore `div` assegnandogli la classe `cards`, creo l'elemento `i` e gli assegno la clesse di **font awesome** per mezzo del teplate literal, gli assegno uno stile che tramite interpolazione assegnerà il colore:
```
const italic = document.createElement('i');
italic.className = `${element.family} ${element.prefix}${element.name}`;
italic.style = `color: ${element.color}`;
```
Appendo tutto sull'elemento `rowItems`;

5. creo l'elemento `span` per poi assegnargli, tramite interpolazione il valore nome dell'elemento, per poi appenderlo su l'elemento `rowItems`:
```
const text = document.createElement('span');
text.textContent = `${element.name}`;
```
6. 