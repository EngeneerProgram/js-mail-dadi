//prendiamo i dati dell'utente per farlo apparire a schermo



document.querySelector(".btn").onclick = function(){
    let nome = document.getElementById("nome_utente").value;
    console.log(nome);
    document.getElementById("utente").innerHTML=(nome);
    let mail = document.getElementById("mail").value;

console.log(mail);

let trovato = false;
let mail_autorizzate=["saro.garufi1@gmail.com", "pippo@gmail.com", "paperino@hotmail.it", "giovannisunta@live.it"];
for(let i = 0; i<mail_autorizzate.length; i++){
    console.log(mail_autorizzate[i]);
    if(mail == mail_autorizzate[i]){
        trovato = true;

    }
}
if(trovato == true){
    document.getElementById("accedi").innerHTML=("Accesso approvato");
}else{
    document.getElementById("accedi").innerHTML=("Accesso negato");
}

console.log(trovato);

}

//gioco dadi
document.querySelector(".genera").onclick= function(){
    let dado_user1 = Math.floor(Math.random()*6 +1);
document.getElementById("primo").innerHTML=(dado_user1);

let dado_user2 = Math.floor(Math.random()*6) +1
    document.getElementById("secondo").innerHTML=(dado_user2);


if(dado_user1 > dado_user2){
    document.getElementById("risultato").innerHTML=("Ha vinto il primo giocatore");
}else{
    document.getElementById("risultato").innerHTML=("Ha vinto il secondo giocatore");
}
}







