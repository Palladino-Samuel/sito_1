var myJSON;
var n=0;
var Nome;
var Email;
var index =-1;
var persona;

function openNav(){
  document.getElementById("side_div").style.width = "250px";
}
function close_Nav(){
  document.getElementById("side_div").style.width= "0";
}



if(!localStorage.getItem("testJSON")){
  localStorage.setItem("testJSON","[]");
}
var Utenti = JSON.parse(localStorage.getItem("testJSON"));


//stampa l'oggetto persona aggiunto
function returnObject(event){
    event.preventDefault();
    console.log(Nome);
     persona = new User(Nome, Email);
     Utenti.push(persona);

     myJSON = JSON.stringify(Utenti);
     localStorage.setItem("testJSON", myJSON);

     var index = Utenti.lastIndexOf(persona);
     //console.log(Utenti[index].nome);
     //document.getElementById('checkReturn').innerHTML = Utenti[index].viewObject() ;
}


//  funzione registrazione
function myFunction(){
    Nome = checkName();
    Email = checkEmail();
}

//  check name
function checkName(){
    var nome = document.forms["datiUtente"]["id_nome"].value;
    if (isNaN(nome)) {
      document.getElementById('id_nome').style.backgroundColor="rgba(102, 255, 0, 0.3)";
      return nome;
    }else {
      document.getElementById('id_nome').style.backgroundColor="rgba(255, 0, 0, 0.3)";
    }
}
//  check email
function checkEmail(){
    var email = document.forms["datiUtente"]["id_email"].value;
    if(validEmail(email)){
      document.getElementById('id_email').style.backgroundColor="rgba(102, 255, 0, 0.3)";
      return email;
    }else {
      document.getElementById('id_email').style.backgroundColor="rgba(255, 0, 0, 0.3)";
    }
}
function validEmail(email){
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}

//  classe Utente
class User{
  constructor(num, eml){
    this.nome = num;
    this.email = eml;
  }
  viewObject(){
    return "Ciao <b>" + this.nome +"</b>, la tua email è: <b>" + this.email + "</b>, tutto è stato aggiunto correttamente";
  }
  viewObjectArea(){
    return "Ciao " + this.nome + ", la tua email è: " + this.email;
  }
}
