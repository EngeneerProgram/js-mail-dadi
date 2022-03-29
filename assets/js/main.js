//prendiamo i dati dell'utente per farlo apparire a schermo



document.querySelector(".btn").onclick = function(){
    let nome = document.getElementById("nome_utente").value;
    console.log(nome);
    document.getElementById("utente").innerHTML=(nome);
    let mail = document.getElementById("mail").value;

console.log(mail);


let mail_autorizzate=["saro.garufi1@gmail.com", "pippo@gmail.com", "paperino@hotmail.it", "giovannisunta@live.it"];
for(let i = 0; i<mail_autorizzate.length; i++){
    console.log(mail_autorizzate[i]);
    if(mail == mail_autorizzate[i]){
        console.log("Accesso approvato");
    }else{
        console.log("Accesso negato");
    }
}

    
    

}

//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.



   



    