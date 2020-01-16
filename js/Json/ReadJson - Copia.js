/*
id
title
picture
plot
tag
like
*/

//array
var arrayJson=[];

//chiamata to file json
$(document).ready(function(){
  $.ajax({
    url: "articles.json",
  //data:{}
    success: function(data){
        $.each(data,function(index, element){
            arrayJson.push(element);
            .write(arrayJson[index]);
            $("#divR").append("<br>"+arrayJson[index].title)
        })
        var contx=0;
        $("#buttonImg").click(function(){
             interval = setInterval(function(){
              console.log(contx),
              contx=(contx+1)%Object.keys(arrayJson).length
              $("#imgProva").attr("src", arrayJson[contx].picture)
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

function write(obj){
  return $("#div_1").append("<br>"+obj.title);
}
