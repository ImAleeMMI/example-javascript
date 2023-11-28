// 1 - Dichiarare una variabile chiamata "persona" e assegnarle un oggetto con le seguenti proprietà:
// "nome" (con il tuo nome) e "età" (con il tuo numero di anni). Stampare l'oggetto sulla console.
var persona1 = {nome : 'Alessandro' , età : 22};
console.log(persona1);


// 2 - Dichiarare una variabile chiamata "numeri" e assegnarle
// un array contenente una serie di numeri. Stampare l'array sulla console.
var numeri = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];
console.log(numeri);

// 3 - Conversione da stringa a numero:
// Scrivi una funzione che accetta 2 parametri stringa.
// Se la conversione a intero di entrambe le stringhe va a buon fine
// ritorna la somma numerica dei 2 parametri altrimenti stampa un messaggio di errore
function myString(param1, param2){
  if(isNaN(parseInt(param1)) && isNaN(parseInt(param2))){
    console.log(param1);

  }else{
    return parseInt(param1)+parseInt(param2);

  }
}
console.log(myString("1", "2"))

// 4 - Arrotondamento di un numero:
// Scrivi un programma che arrotondi un numero decimale e stampi il risultato sulla console.
let numero = 1.6;
let risultato = Math.round(numero);
console.log(risultato);


// 5 - Scrivi un programma che prenda una stringa, una sottostringa da cercare e una sottostringa da sostituire,
// utilizzando il metodo replace() e stampi il risultato sulla console.
let frase = "Oggi è una bellissima giornata, per girare in città";
console.log(frase.replace("bellissima", 'bruttissima'));


// 6 - Scrivi un programma che prenda una stringa, la divida in un array di sottostringhe e stampi il risultato sulla console.
let string = "Ciao mi chiamo Alessandro";
let words1 = string.split(' ');
console.log(words1);


// 7 - Scrivi un programma che prenda un array di parole e unisca tutti gli elementi
// in una singola stringa separati da uno spazio.
let array = ['Audi' ,'BMW' , "Mercedes"];
console.log(array.join(' '));

// 8 - Scrivi un programma che prenda un array con elementi duplicati e restituisca un nuovo array con i duplicati rimossi.
let duplicate = [1,1,2,2,3,3,4,4];
let withoutDuplicate = [];

duplicate.forEach((element) => {
  if(!withoutDuplicate.includes(element)){
    withoutDuplicate.push(element);
  }  
});
console.log(withoutDuplicate);


console.log([...new Set(duplicate)])

let noDuplicareReduce = duplicate.reduce((acc, element)=>{
  if(!acc.includes(element)){
    acc.push(element)
  }
  return acc;
},[]);

console.log(noDuplicareReduce);



// 9 - Crea un oggetto "persona" con le proprietà "nome", "età" e "genere".
// Conta il numero di proprietà presenti nell'oggetto "persona" e stampa il conteggio in console.
let persona = {nome : 'MArio', età: 20 , genere: "uomo"}
let chiavi = Object.keys(persona);
console.log(chiavi.length);



// 10 - Scrivi una arrow function che prenda due parametri, una parola e una lunghezza, e restituisca true
// se la parola è più lunga della lunghezza specificata, altrimenti restituisca false.
let parola = "Alessandro";
let lunghezza = 20;
let myFunction = (parola, lunghezza) => {
  if(parola.length > lunghezza){
    return true
  }else{
    return false
  }
};
let confronto = myFunction(parola, lunghezza);
console.log(confronto);


// 11 - Scrivi un codice che prenda una data come input e restituisca il nome del giorno della settimana corrispondente.
let compleanno = new Date("2001-02-27");
let giorni = compleanno.getDay();
let nomeGiorni = ['domenica' ,'lunedì', 'martedi', 'mercoledì' ,'giovedì' ,'venerdi' ,'sabato'];
console.log(nomeGiorni[giorni]);


// 12 - Scrivi un codice che prenda una data come input e verifichi se è una data futura rispetto alla data corrente.
let data1 = new Date('2023-12-10');
let data2 = new Date();

let timedate1 = data1.getTime();
let timedate2 = data2.getTime();

if(timedate1<timedate2){
  console.log('data1 è precedente a data2');
}else{
  console.log('data2 è precedente a data1');
}


// 13 - Creare un nuovo elemento del DOM `button` e aggiungere un gestore di eventi per il click:
let element = document.createElement('button');
element.innerHTML = "cliccami";
document.body.appendChild(element);
element.addEventListener('click', function(event){
  event.target.innerHTML = "mi hai cliccato";
  console.log(event)
})


// 14 - Creare un nuovo elemento del DOM `img` e impostare l'attributo src e alt:
let img = document.createElement('img');
console.log(img)
img.alt = 'immagine'
img.src= 'https://external-preview.redd.it/wAsW0SCrZQgJ35MLwC9Z390tUgjCtu16rnHc9Z5qHRo.jpg?auto=webp&s=b37dc40dadc6f645e4d595183cd2064b1093e827'
document.body.appendChild(img)

// 15 - Cambiare lo stile di un pulsante dopo 1 secondo utilizzando setTimeout:
let changeColor = document.createElement('button');
changeColor.innerHTML = "colorami";
document.body.appendChild(changeColor);
changeColor.addEventListener('click', function(event){
  setTimeout(() => {
    event.target.style.background = 'red';
  }, 1000);
})


//16 -Creare una promise che si risolve dopo 2 secondi:
let newPromise = new Promise(function(resolve, reject){
  setTimeout(() => {
    resolve('Operazione completata')
  }, 2000)
});
console.log(newPromise);


// 17 - Utilizzare Promise.all per eseguire più promise (almeno 3) contemporaneamente:
let promise1 =new Promise(function(resolve, reject){
  setTimeout(() => {
    resolve('Operazione completata')
  }, 1000)
  console.log(resolve)
});

let promise2 = new Promise(function(resolve, reject){
  setTimeout(() => {
    resolve('Operazione completata')
  }, 500)
  console.log(resolve)
});
let promise3 = new Promise(function(resolve, reject){
  setTimeout(() => {
    resolve('Operazione completata')
  }, 3000)
  console.log(resolve)
});
let allPromise = Promise.all([promise1, promise2, promise3]) 
console.log(allPromise);

// 18 - Filtrare un array di oggetti JSON restituiendo un array di oggetto con solo le persone che si chimano "Mario"

const jsonStringa =
  '[{"nome": "Mario", "cognome": "Rossi"}, {"nome": "Luca", "cognome": "Verdi"}, {"nome": "Mario", "cognome": "Verdi"}]';
let newArray = JSON.parse(jsonStringa);
console.log(newArray) 
let myMario = newArray.filter((users) => users.nome == "Mario");
console.log(myMario);

// 19 - Dato un array di importi Float ritornare la somma degli importi utilizzando il metodo reduce()

var euros = [29.76, 41.85, 46.5];
var sumEuros = euros.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sumEuros);


// 20 - Creare un array di oggetti "Users" con almeno 4 elementi.
// Ogni oggetto contiene 2 attributi firstName e lastName.
// Creare un nuovo array contenente gli elementi ritornati dalla concatenazione di firstName e lastName utilizzando
// il metodo map()
let users = [{firstname : "francesco", lastName : "vian"}, {firstname : "alessandro", lastName : "kuridza"}, {firstname : "alessio", lastName : "libbi"}, {firstname : "roberta", lastName : "rossi"}]
let nomeCognome = users.map((user) => user.firstname + " " + user.lastName)
console.log(nomeCognome)


// 21 - Creare una funzion asincrona che attraverso una chiamata fetch recuperi i primi 151 pokemon.
// Utilizzare async e await con fetch per semplificare la gestione delle risposte.
// Utilizzare il costrutto Try/Catch per gestire eventuali errori
// Stampare l'array di oggetti


function getPokemon(){
  try{
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
   
    //console.log(decodeList)
    //console.log(pokemonList)
  }catch(error){
    console.log(error)
  }
  

}

getPokemon().then((res)=>res.json()).then((res) => {
  let list = res.results;
  console.log(list);
});


