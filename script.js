/*
Creare una pagina che simuli il vostro curriculum
(a vostra discrezione il CSS, ma mi raccomando occhi a non perdeteci ore però,
è importante che cominciate ad assegnare le giuste priorità e a gestire il tempo a disposizione!)
Fondamentalmente la pagina è divisa in due:
1. una parte superiore, che ospita il vostro nome e cognome e il toggle per la DarkMode
2. una parte inferiore, che ospita il vostri interessi e le competenze (scrivete pure ciò che apprenderete nel bootcamp!)
- La pagina deve presentare in alto a destra un button con la funzionalità 'DarkMode'
  PICCOLO TIP: date un'occhiata al metodo `toggle`!
- Una sezione hobby. Create un button accanto che ne illumini la sezione al click! (fate in modo che la classe predente venga rimpizzata da un'altra)
- Una sezione a scelta, che si comporta in modo dinamico (qui siate creativi voi sul comportamento da assegnarle)

- Infine scrivete una funzione che, al click, in qualunque posto della pagina, faccia il `console.log` del numero
  di elementi paragrafo '<p>' utilizzati.
  di elementi paragrafo `<p>` utilizzati.

Esercizio AVANZATO!!

- Un bottone centrale che una volta premuto faccia comparire una immagine (prendetela pure da qui: https://picsum.photos/500/300)
  la immagine deve essere incorniciata (scegliete quindi un bel effetto cornice (css!))
- Se il bottone non viene cliccato l'immagine non verrà visualizzata
- Il comportamento dovrà essere di tipo toggle!
PICCOLO TIP: vi ricordo che potete nascondere un elemento HTML applicando la proprietà CSS display: none;

Sulla base del vostro esercizio di ieri, andate ad aggiungere queste funzionalità.
(per chi non ha completato l'esercizio, continui oggi, aggiungendo `almeno` i due punti sotto:

1. Creare una funzione che chieda all'utente di inserire 2 numeri tramite prompt
   e che faccia il console.log della somma soltanto dopo 10 secondi.
   // ATTENZIONE:
   Questa funzione non 'renderizza' alcunchè all'interno della pagina HTML,
   eccetto il prompt che chiede i numeri all'utente. Scegliete saggiamente tra setInterval e setTimeout!

2. Inserire un cerchio all'interno della vostra pagina html, che cambia colore ogni 5 secondi.
   Utilizzate un elemento già presente all'interno del documento HTML e usate il DOM per manipolarlo.
   Alla pressione del tasto `Enter` il listener viene rimosso e il cerchio smetterà di cambiare colore.
   TIP: `removeEventListener`!

`AVANZATO`: Creare una funzione che chieda all'utente di inserire quanti numeri egli voglia
(quindi almeno uno, altrimenti ritorna `non hai inserito alcun numero`) e che ne stampi la somma totale.
Es. se i numeri fossero 2 - 4 - 6 la somma equivarrebbe a 12.
Il risultato finale non viene stampato come console.log ma va inserito come testo di un elemento H2 già esistente nella pagina!
*/

//DARKMODE
const darkModeBtn = document.querySelector ('.DarkModeButton')

darkModeBtn.addEventListener ('click', () => {
    document.body.classList.toggle("myDarkMode");
}); 

//HOBBY

const lightMode = document.querySelector ('.hobby') //Ho selezionato il div hobby tramite la classe

  lightMode.addEventListener ('click', () => {  
  lightMode.classList.toggle("myLightMode")
  });

//CONTATTI
//- Una sezione a scelta, che si comporta in modo dinamico (qui siate creativi voi sul comportamento da assegnarle)

const SizeOnMouse = document.querySelector ('.contatti') //Ho selezionato il div contatti tramite la classe

  SizeOnMouse.addEventListener ('mouseover', () => {  
  SizeOnMouse.classList.toggle("recapitiSize")
  });

