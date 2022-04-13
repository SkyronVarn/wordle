import chalk from 'chalk';
import * as dat from "./elencoParole.mjs" ;
import * as core from "./core-index.mjs";
import readline from 'readline';
import scanf from 'scanf';

const log = console.log; // IMPORTANTE

var parola = dat.words[ Math.floor(Math.random() * 351) ]


//https://nodejs.org/api/readline.html#readlinecreateinterfaceoptions

log('Inserisci una parola da 5 lettere per cominciare:');
for (let i=0;i<6;i++){

var risposta = scanf('%s');

log(chalk.blue(risposta));


    core.risultato(risposta,parola)
log('');

    if (risposta == parola)
    break;


}


if (risposta == parola)
log("Complimenti!");
else
log("Peccato...");

log('La parola era ' + chalk.cyan(parola));



// abbiamo 6 tentativi per risolvere una parola

// la parola deve essere lunga 4 (per questo modello funzionale di codice ho usato un dataset di 5 lettere per parola)
