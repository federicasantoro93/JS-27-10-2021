window.addEventListener("load", () => console.log("Pagina caricata!"));

//addEventListener va a dire al brower che l'evento scateni una funzione
//Parametri: nome dell'evento - comportamento al verificarsi dell'evento
 //----------
 //MANIPOLARE GLI ELEMENTI DEL DOM

 //FIRST BUTTON
 const myFunction = () =>  console.log('Cliccato!');

// Pesca tutti gli elementi che rispondono alla classe 'secondBtn'
//const secondBtn = document.getElementsByClassName("secondBtn");
// console.log(secondBtn);

//SECOND BUTTON
 /*
const secondBtn = document.querySelector('.secondBtn'); //prende l'elemento a indice 0
 secondBtn.onclick = () => console.log("Cliccato!");

 //N.B.: Consiglio di utilizzare querySelector e querySelectorAll
 const thirdBtn = document.querySelector('#thirdBtn'); 
 thirdBtn.className = "button"; //Assegna la classe
 thirdBtn.addEventListener('click', () => console.log("Cliccato!"));

//Metodi che non sono dei metoti ma delle proprietà il cui valore viene assegnato come valore 
 */

/*
 const thirdBtn = document.querySelector('#thirdBtn'); 
 
 thirdBtn.addEventListener('click', () => {thirdBtn.className = "button"};
 ; //Assegna la classe dopo aver cliccato sul bottone
 SCRITTO MALE
*/

//SELEZIONE MULTIPLA DI ELEMENTI
/*
const allTheButtons = document.querySelectorAll("button");
for (button of allTheButtons) {
     button.addEventListener('mouseover', () => console.log("Hover!"));
}
*/

document.addEventListener('keyoress', (event) => {
    document.style.background = "red";       //proprietà
});