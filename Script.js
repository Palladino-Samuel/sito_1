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
}


//  funzione registrazione
function myFunction(){
    var nome = document.forms["datiUtente"]["id_nome"].value;
    var email = document.forms["datiUtente"]["id_email"].value;
    Nome=validateInput.returnNome(nome, "id_nome");
    Email=validateInput.returnEmail(email, "id_email");
 }
//modulo validazione nome e email
const validateInput= (function(){

    function _color(id, i){
      let x = document.getElementById(id).style;
      i==1?x.backgroundColor="rgba(102, 255, 0, 0.3)":x.backgroundColor="rgba(255, 0, 0, 0.3)";
    }

    function returnEmail(valore, id){
      if(_validEmail(valore)){
        var i=1;
        _color(id, i);
        return valore;
      }else{
        i=0;
        _color(id, i);
      }
    }
    function _validEmail(email){
      var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return re.test(email);
    }

    function returnNome(valore, id){
      if(isNaN(valore)){
        var i=1;
        _color(id, i);
        return valore;
      }else {
        i=0;
        _color(id, i);
      }
    }

    return {
      returnEmail:returnEmail,
      returnNome:returnNome
    }
})()


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
