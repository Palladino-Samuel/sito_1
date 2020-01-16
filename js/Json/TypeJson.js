import * as news from './lib.js';
var array1=[];
var arrayJson=[];
//var arr=[];


$(document).ready(function(){

    localStore.getStore();//controllo LocalStorage
    array1=localStore.returnArr();//riempo array1 con locaStorage

    call.ajax(array1);

    $(news.returnSelect()).change(function(e){   //  gestione select
        news.selectAction(arrayJson, e);
    })
})

document.getElementsByClassName("button1").onclick=local;

function local(){//$(".button1")
    localStore.setStore(news.valueTag);
}

//---------------------------

const localStore= (function(){    //localStorage
    let _myJson;
    let _arrayLoc=[];

    function _read(){
      return _arrayLoc =JSON.parse(localStorage.getItem("ArrayTag"));
    }
    function _write(){
      _myJson=JSON.stringify(_arrayLoc);
      localStorage.setItem("ArrayTag", _myJson);
    }
    function _checkArr(){
      _checkArr.lenght==0? null:_arrayLoc.push("1");
    }

    function getStore(){
      if(!localStorage.getItem("ArrayTag")){
        localStorage.setItem("ArrayTag","[]");
      }
      _read();
    }
    function setStore(tag){
      $.each(tag, function(index, element){
        _arrayLoc.push(tag[index]);
      })
      _write();
    }
    function returnArr(){
      _checkArr();
      return _arrayLoc;
    }

  return{
    getStore:getStore,
    setStore:setStore,
    returnArr:returnArr
  }
})()


const ajx = (function(){    // ajax
  function checkArr(obx, arr){//controlla array gia pieno vuoto
      let _controlIndex;
      arr["0"]=="1"?_controlIndex="1":null;
      _controlIndex=="1"?news.defaultAction1(obx, arr):news.objWrite(obx);
  }
  return{
    checkArr:checkArr
  }
})()


var call =(function(){
  function _pushObj(obj, data){
      $.each(data, function(index, element){
        obj.push(element);
      })
  }
  function ajax(localArray){
      $.ajax({    //  chiamata to file json
          url: "js/Json/articles.json",
          success: function(data){
            _pushObj(arrayJson, data);
            ajx.checkArr(arrayJson, localArray)
          },
          error: function(e){
              alert("error: "+e);
          },
          dataType: 'json',
          cache:true
      });
  }
  return{
    ajax:ajax
  }
})()
