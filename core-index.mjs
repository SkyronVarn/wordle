import chalk from 'chalk';
import * as dat from "./elencoParole.mjs" ;
//import readline from 'readline';



/*function getDiceAnswer() {
    return new Promise(resolve => {    
        const rl = readline.createInterface({
            input:  process.stdin,
            output: process.stdout
        });
        rl.question( (answer) => {
            resolve(answer);
            rl.close();
        });
    });   
}
*/

//const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout,
//})



const risultato = function(risposta, parola){

    for (var i = 0; i <= parola.length; i++){
        let lettera = risposta.charAt(i);
    
        if (lettera === parola.charAt(i))
            process.stdout.write(chalk.green(lettera) + " " );
    
        else if( parola.includes(risposta.charAt(i)))
            process.stdout.write(chalk.yellow(lettera) + " " );
    
        else
            process.stdout.write(chalk.gray(lettera) + " " );
    }

}


export{
//getDiceAnswer,
risultato,
};