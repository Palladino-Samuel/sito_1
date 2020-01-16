import * as lib from './lib.js';

var arrayJson=[]; //array

$(document).ready(function(){

    $.ajax({    //  chiamata to file json
        url: "js/Json/articles.json",
        success: function(data){
          lib.pushWrite(arrayJson, data);
        },
        error: function(e){
            alert("error: "+e);
        },
        dataType: 'json',
        cache:true
    });

    $(lib.returnSelect()).change(function(e){   //  gestione select
        lib.selectAction(arrayJson, e);
    })

})

$(".button1").click(function(){   // bottone riempi
    lib.buttonAction1(arrayJson)
})
