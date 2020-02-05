//theme's change
$("#Theme").click(function(){
$("link#switch_link").attr("href", (toggleLink(("less/styles.min.css"),("less/styles_1.min.css"), $("link#switch_link").attr("href"))));
});
//toggle link
function toggleLink(a, b, link){
  console.log(link);
  return (link==a?b:a);
}

//change class color
$("#btnR").click(function(){
$("#divR").toggleClass("class1");
$("#nomeBR").text(toggleText("change class", "reset class", $(this).text()));
});
// toggleText
function toggleText(a, b, text){
return (text==a?b:a);
}
