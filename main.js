


  var registerForm= document.querySelector('.registerForm');
  var result;
  registerForm.onsubmit=function(e){
e.preventDefault();
var elements=e.target.elements;

var amount=elements[0].value;
var exchange= elements[1].value;



if(exchange=='dollar'){
  result=amount/3.68;
}else if(exchange=='dinar'){
    result=amount/5.18;
}else result=amount;


document.querySelector('.result').textContent=result;
  }

