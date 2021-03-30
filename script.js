'use strict';

function draw_em(){
  var timer = document.querySelector(".timer");
  var flag_first_click = 0;
  var sec = 59;
  


  var arr_emodji = ['-180px -420px;',' -180px -580px;','-180px -340px;','-180px -400px;','-200px -20px;','-180px -520px;','-180px -420px;',' -180px -580px;','-180px -340px;','-180px -400px;','-200px -20px;','-180px -520px;'];
  arr_emodji.sort(function(){return 0.5-Math.random()});
  var lab = document.querySelectorAll(".type_l");


  for(var i=0; i<lab.length; i++){
    var em = lab[i].querySelector('.emoji');
    em.style.cssText = 'background-position:'+ arr_emodji[i];
  }
  var elemsList_lab = Array.prototype.slice.call(lab);
  var inp = document.querySelectorAll(".type");
  var elemsList_inp = Array.prototype.slice.call(inp);

  var black = document.querySelector(".black");
  var play = document.querySelector(".play");
  var res = play.querySelector(".result");

  var old_opened = [];
  var count_opened = 0;
  var timerId;

  elemsList_inp.forEach(function(input){
    input.addEventListener('click',function(event){

      if (flag_first_click == 0){
        
        function tick(){
          if(sec>9){
            timer.innerHTML = "00:"+ sec;
          } else{
            timer.innerHTML = "00:0"+ sec;
          }
          
          if(sec==0) {
            clearInterval(timerId);
            
            black.style.display = "inline";
            play.style.display = "inline";
            // res.innerHTML = "Lose";
            res.innerHTML = "<div>L</div><div>o</div><div>s</div><div>e</div>";
            var res_div = res.querySelectorAll("div");
            res_div[0].classList.add("res1");
            res_div[1].classList.add("res2");
            res_div[2].classList.add("res3");
            res_div[3].classList.add("res4");
            var text = play.querySelector(".button_text");
            text.innerHTML = "Try again";
          }
          sec--;
        }
        timerId = setInterval(tick,1000);
        
        flag_first_click = 1;

      }


    var delete_elems = [];
    var new_opened =[];
    for(var i=0; i<old_opened.length; i++){
      var bk = elemsList_lab[old_opened[i]].querySelector('.back');
      if(bk.style.background == "rgb(255, 0, 0)"){
        elemsList_inp[old_opened[i]].checked = false;
        elemsList_inp[old_opened[i]].disabled = false;
        bk.style.background = "rgb(255, 255, 255)";
       delete_elems.push(i);
      }
      else{ new_opened.push(old_opened[i])}
      
      
    }
    old_opened = new_opened;

    var opened = [];
    for(var i=0; i<inp.length; i++){
      if((inp[i].checked)&&(old_opened.indexOf(i) == -1)){
        
        opened.push(i);
        inp[i].disabled = true;
     }
    }
    if(opened.length == 2) {
      old_opened.push(opened[0]);
      old_opened.push(opened[1]);
        
        var bk1 = elemsList_lab[opened[0]].querySelector('.back');
        var bk2 = elemsList_lab[opened[1]].querySelector('.back');
        var em1 = elemsList_lab[opened[0]].querySelector('.emoji');
        var em2 = elemsList_lab[opened[1]].querySelector('.emoji');

        if(em1.style.backgroundPosition == em2.style.backgroundPosition){
          bk1.style.cssText = 'background: #0f0;';
          bk2.style.cssText = 'background: #0f0;';
          count_opened +=2;
        }
        else{
          bk1.style.cssText = 'background: #f00;';
          bk2.style.cssText = 'background: #f00;';
          
        }
        
    }
    if(count_opened==12) {
      clearInterval(timerId);
      black.style.display = "inline";
      play.style.display = "inline";
      res.innerHTML = "<div>W</div><div>i</div><div>n</div>";
      var res_div = res.querySelectorAll("div");
      res_div[0].classList.add("res1");
      res_div[1].classList.add("res2");
      res_div[2].classList.add("res3");
      var text = play.querySelector(".button_text");
      text.innerHTML = "Play again";
    }
    
},true);
});// for each
  

  var ag_but = document.querySelector(".again_button");
  ag_but.addEventListener('mousedown',function(event){
    ag_but.style.cssText = 'box-shadow: 2px 1px 8px rgba(0,0,0,0.5) inset;';
  },true);

  var but = document.querySelector(".again");
  but.addEventListener('click',function(event){
    ag_but.style.cssText = 'box-shadow: 2px 1px 8px rgba(0,0,0,0.5) inset;';
    //location.reload();
    black.style.display = "none";
    play.style.display = "none";
    clearInterval(timerId);
    for(var i=0; i<inp.length; i++){
        inp[i].checked = false;
        inp[i].disabled = false;
        var bk = elemsList_lab[i].querySelector('.back');
        bk.style.background = "rgb(255, 255, 255)";
    }
    arr_emodji.sort(function(){return 0.5-Math.random()});
    for(var i=0; i<lab.length; i++){
      var em = lab[i].querySelector('.emoji');
      em.style.cssText = 'background-position:'+ arr_emodji[i];
    }
    ag_but.style.cssText = 'box-shadow: 1px 1px 1px rgba(0,0,0,0.5);';
    old_opened = [];
    count_opened = 0;
    flag_first_click = 0;
    sec = 59;
    timer.innerHTML = "01:00";

  },true);
}


            
