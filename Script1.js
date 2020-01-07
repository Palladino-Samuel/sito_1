var myJSON;
var n=0;
var Nome;
var Email;
var index =-1;
var persona;



//sideBar
function openNav(){
  document.getElementById("side_div").style.width = "250px";
}
function close_Nav(){
  document.getElementById("side_div").style.width= "0";
}
//array
if(!localStorage.getItem("testJSON")){
  localStorage.setItem("testJSON","[]");
}
var Utenti = JSON.parse(localStorage.getItem("testJSON"));



 //stampa l'intero array
document.getElementById('r1').onclick = stampaTodo();
document.getElementById('r1').onclick = txtDisplArea;
function txtDisplArea(){
  document.getElementById('textArea').style.display = "inline";
  document.getElementById('textArea').style.height = "auto";
  document.getElementById('textArea').style.width = "auto";
}
function stampaTodo(){
  let text = document.getElementById("textArea")
  console.log("Utenti");
  console.log(Utenti);
    for (var i = 0; i < Utenti.length; i++) {
      text.innerHTML += i+") Ciao " + Utenti[i].nome + ", la tua email è: " + Utenti[i].email;
      text.innerHTML += "&#10";
      //text.style.backgroundColor = "rgba(102, 255, 0, 0.3)";
    }
}

//cerca e ritorna elemento
document.getElementById('src').onclick = searchElement;
function searchElement(){
  let srcValue = document.getElementById('nameSearch');
  let moreValue = document.getElementById('NameSearch1');
  let text = document.getElementById('textArea1');
  let U =Utenti;
  let c=0, s=0, u=0, id=0;

  for (var i = 0; i < U.length; i++) {
    U[i].nome==srcValue.value || U[i].email==srcValue.value? c++: s=0;
  }

  c>1? s=0:(c<1?s=1:s=2);

  moreValue.style.display = "none";

  switch (s) {
    case 0:   //s=0 più UTENTI
        srcValue.style.display = "none";
        moreValue.style.display = "inline";
        text.innerHTML = "esistono più elementi che corrispondono al nome cercato, inserire un altro valore ";
        for (var i = 0; i < U.length; i++) {

            if ((U[i].nome==srcValue.value || U[i].email==srcValue.value) && (U[i].nome==moreValue.value || U[i].email==moreValue.value)) {
              text.innerHTML =  "TROVATO, Ciao " + U[i].nome + ", la tua email è: " + U[i].email ;
              u++;
              index=i;
              moreValue.style.display = "none";
              srcValue.style.display = "inline"
            }}
            //u<1?text.innerHTML = " ":s=null;

        break;

    case 1:   //s=1 no UTENTI
        text.innerHTML = "non trovato";
        break;

    case 2:   //s=2 un solo Utente
        for (var i = 0; i < Utenti.length; i++) {
             if (U[i].nome==srcValue.value || U[i].email==srcValue.value ) {
               text.innerHTML =  "TROVATO, Ciao " + U[i].nome + ", la tua email è: " + U[i].email ;
               index=i;
             }}
        break;
  }
}

//elimina un elemento
document.getElementById('delete').onclick=objDelete;
function objDelete(){
  Utenti.splice(index, 1);
  myJSON = JSON.stringify(Utenti);
  localStorage.setItem("testJSON", myJSON);
  document.getElementById('textArea1').innerHTML = "ELIMINATO";
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
