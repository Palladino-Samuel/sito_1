//let _target=$(".target");
let _target=document.getElementsByClassName("target");
let valueTag=[];

function _write(obj){
    return _target.append(obj.title+"<br>").css("color", "black");
}
function _writeTarget(e, obj){
    return _returnTarget(e).append(obj.title+"<br>").css("color", "red"),  $("select").val(0);
    // _returnTarget(e).innerHTML=obj.title+"<br>";
}
function _returnTarget(e){
    return $(e.target).closest("div").find(_target);
    //return  e.addEventListener("click", function(){
      return _target;

}
function _selectFilter(obj, e, test){
  $.each(obj, function(index, value){
    obj[index].tag==test?_writeTarget(e, obj[index]):console.log("not found");
  })
}
//without e
function _selectWrite(obx, test, i){//lib
  var x=document.getElementsByClassName("div_1")[i];
  $.each(obx, function(index, value){
    obx[index].tag==test?_writeTarget1(obx[index], x):console.log("not found");
  })
}
function _writeTarget1(x, i){//lib
    //return $(".target").eq(i-1).append(x.title+"<br>").css("color", "red");//  $("select").val(0);
    i.getElementsByClassName("target").innerHTML=x.title+"<br>";
}



//export function
function returnSelect(){
  //return $(".selectTag");
  return document.getElementsByClassName("selectTag");
}
function buttonAction1(obj){//riscrive lintero oggetto nei due div
    _target.empty();
    $.each(obj,function(index, value){
      _write(obj[index])
    })
}

function selectAction(obj, e){//azione alla select
    _returnTarget(e).empty();//svuota
    let _text = $(e.target).find("option:selected").text();
    _selectFilter(obj, e, _text);//filtra in base alla selezione
    valueTag.push(_text);//carica array per localStorage
}

function objWrite(obj){//checkArr FALSE
    $.each(obj, function(index, element){
      _write(obj[index]);
    })
}

function defaultAction1(obx, arr){//checkArr TRUE
  $.each(arr, function(index,element){
    _selectWrite(obx, arr[index], index);
  })
}

export {buttonAction1, selectAction, returnSelect, defaultAction1, objWrite, valueTag};
