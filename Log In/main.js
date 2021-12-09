

$("#desNaruto").hide()
$(".vid1").hide()
$(".vid2").hide()

function nar(){
    $("#AC1").hide()
    $("#AN2").hide()
    $("#HR1").hide()
    $("#HR2").hide()
    $("#HR3").hide()
    $("#AN2").hide()
    $("#AC2").hide()
    $("#AC3").hide()
    $(".vid1").show().css("left","584px").css("top","19px")
    $("#AN1").css("left","664px").css("top","4px")
    $("#desNaruto").show()
    

}

function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function(element, i) {
      acc.push(func(element, i));
    });
    return acc;
}


function movie (image){
    return {
        image : image 
    }
}

var anime1 =movie($(".anime1"))
var anime2 =movie($(".anime2"))
var Animes =[anime1,anime2]
///////////////////////////////////
var action1 = movie($(".action1"))
var action2 = movie($(".action2"))
var action3 = movie($(".action3"))
var Actions = [action1,action2,action3]
///////////////////////////////////
var horror1 = movie($(".horr1"))
var horror2 = movie($(".horr2"))
var horror3 = movie($(".horr3"))
var Horrors= [horror1,horror2,horror3]
//////////////////////////////////////////
var Movies=[Animes,Actions,Horrors]

function act(){
    var Movies=[Animes,Actions,Horrors]
    return filter(Movies,function(element){
        if(element === Actions){
            console.log (element) 
        }
    })
}
function act(){
    $(".action1").css("top","3px").css("left","468")
    $("#AC2").css("top","-415px")
    $("#AC3").css("left","68px")
    $(".action3").css("top","-830px")
    $("#AN1").hide()
    $("#AN2").hide()
    $("#HR1").hide()
    $("#HR2").hide()
    $("#HR3").hide()
    $(".bot1").hide()

}


function ani(){
    var Movies=[Animes,Actions,Horrors]
    return filter(Movies,function(element){
        if(element === Animes){
            console.log (element) 
        }
    })
}


function hrr(){
    var Movies=[Animes,Actions,Horrors]
    return filter(Movies,function(element){
        if(element === Animes){
            console.log (element) 
        }
    })
}
function hrr(){
    $("#HR1").css("left","46px").css("top","21px")
    $("#HR2").css("left","719px").css("top","-394px")
    $("#HR3").css("left","383px").css("top","-812px")

    $("#AN1").hide()
    $(".bot1").hide()
    $("#AN2").hide()
    $("#AC1").hide()
    $("#AC2").hide()
    $("#AC3").hide()

}

function ani(){
    $("#AN2").css("left","456px").css("top","-415px")
    $("#HR1").hide()
    $("#HR2").hide()
    $("#HR3").hide()
    $("#AC1").hide()
    $("#AC2").hide()
    $("#AC3").hide()
}

function Hand(){
    $(".bot1").hide()
    $(".bot2").hide()
    $("#AN1").hide()
    $("#HR1").hide()
    $("#HR2").hide()
    $("#HR3").hide()
    $("#AN2").hide()
    $("#AC2").hide()
    $("#AC3").hide()
    $(".vid2").show()
    $("#AC1").css("left","664px").css("top","4px")
    

}
