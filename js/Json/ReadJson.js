

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


  
