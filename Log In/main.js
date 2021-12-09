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

function act(){
    var Movies=[Animes,Actions,Horrors]
    return filter(Movies,function(element){
        if(element === Actions){
            return element 
        }
    })
}