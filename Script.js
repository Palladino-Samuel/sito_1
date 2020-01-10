var myJSON;
var n=0;
var Nome;
var Email;

var index =-1;
var persona;
var d=0;

  //theme's change
$("#Theme").click(function(){
  $("link#switch_link").attr("href", (toggleLink(("less/styles.css"),("less/styles_1.css"), $("link#switch_link").attr("href"))));
});


function toggleLink(a, b, link){
  console.log(link);
  return (link==a?b:a);
}

//array
var arrayJson=[];
var contx=0;

//chiamata to file json
$(document).ready(function(){
  $.ajax({
    url: "articles.json",
  //data:{}
    success: function(data){
        $.each(data,function(index, element){
            arrayJson.push(element);
            $("#divR").append("<br>"+arrayJson[index].title)
        })

        var contx=0;
        $("#buttonImg").click(function(){
             interval = setInterval(function(){
              console.log(contx),
              contx=(contx+1)%Object.keys(arrayJson).length,
              $("#imgProva").attr("src", arrayJson[contx].picture);

            },1500)
            console.log("intervallo"+interval);
            $("#buttonImg").click(function(){
               stop();
            })

        })

    },
    error: function(e){
        alert("error: "+e);
    },
    dataType: 'json',
    cache:true
  });
})


  //change class color
$("#btnR").click(function(){
  $("#divR").toggleClass("class1");
  $("#nomeBR").text(toggleText("change class", "reset class", $(this).text()));
  });
  // toggleText
function toggleText(a, b, text){
  return (text==a?b:a);
}

//sideBar
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
$("input[name='utente']").val();

//  funzione registrazione
function myFunction(){
    var nome= $("input#id_nome").val();
    var email= $("input#id_email").val();
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

//$(document).ready(function(){debugger;
//  $("div").css("background-color",'gre');
//  alert ("messaggio!!");
//})
