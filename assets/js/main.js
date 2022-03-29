//prendiamo i dati dell'utente per farlo apparire a schermo



document.querySelector(".btn").onclick = function(){
    let nome = document.getElementById("nome_utente").value;
    console.log(nome);
    document.getElementById("utente").innerHTML=(nome);
    
    
}


//inizializziamo un contenitori con le email da verificare
let email = document.getElementById("email_user").value;
console.log(email);
let verica_mail = ["saro.garufi1@gmail.com", "pippo-pluto@hotmail.com", "paperino@live.it", "giannaluca@gmail.com"];

for(let i = 0; i<verica_mail.length; i++){
    console.log(verica_mail[i]);
   let verifica;
   if(verifica == email[i]){
       console.log("Accesso approvato");
   }else{
       console.log("Account non registrato")
   }

}

