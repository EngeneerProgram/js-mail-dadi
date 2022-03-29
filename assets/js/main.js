//prendiamo i dati dell'utente per farlo apparire a schermo



document.querySelector(".btn").onclick = function(){
    let nome = document.getElementById("nome_utente").value;
    console.log(nome);
    document.getElementById("utente").innerHTML=(nome);
    let container_mail=["saro.garufi1@gmail.com", "pippo@gmail.com", "paperino@hotmail.it", "giovannisunta@live.it"];
    let mail = document.getElementById("mail").value;
console.log(mail);
if(container_mail == mail){
    alert("ok");
}else{
    alert("non puoi accedere");
}
}

//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
//1) chiedere all'utente l'email


