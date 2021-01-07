let firstNum;
    let operation;
    let secondNum;
    let ans;
function myFunction1() {
var option = document.getElementById("btn1").value;
  var txt = document.getElementById("result").value;
  txt = txt + option;
  document.getElementById("result").value = txt;
}
function myFunction2() {
var option = document.getElementById("btn2").value;
  var txt = document.getElementById("result").value;
  txt = txt + option;
  document.getElementById("result").value = txt;
}
function myFunction3() {
var option = document.getElementById("btn3").value;
  var txt = document.getElementById("result").value;
  txt = txt + option;
  document.getElementById("result").value = txt;
}
function myFunction4() {
var option = document.getElementById("btn4").value;
  var txt = document.getElementById("result").value;
  txt = txt + option;
  document.getElementById("result").value = txt;
  
}
function myFunction5() {
var option = document.getElementById("btn5").value;
  var txt = document.getElementById("result").value;
  txt = txt + option;
  document.getElementById("result").value = txt;
}
function myFunction6() {
var option = document.getElementById("btn6").value;
  var txt = document.getElementById("result").value;
  txt = txt + option;
  document.getElementById("result").value = txt;
}
function myFunction7() {
var option = document.getElementById("btn7").value;
  var txt = document.getElementById("result").value;
  txt = txt + option;
  document.getElementById("result").value = txt;
}
function myFunction8() {
var option = document.getElementById("btn8").value;
  var txt = document.getElementById("result").value;
  txt = txt + option;
  document.getElementById("result").value = txt;
}
function myFunction9() {
var option = document.getElementById("btn9").value;
  var txt = document.getElementById("result").value;
  txt = txt + option;
  document.getElementById("result").value = txt;
}
function myFunction0() {
var option = document.getElementById("btn0").value;
  var txt = document.getElementById("result").value;
  txt = txt + option;
  document.getElementById("result").value = txt;
}
function myFunctionPoint() {
    
      var txt = document.getElementById("result").value;
      document.getElementById("result").value =  txt + ".";
      
    }
function myFunctionAdd() {
     firstNum = document.getElementById("result").value;
     operation="+";
    document.getElementById("result").value="";
    
}
function myFunctionMinus() {
     firstNum = document.getElementById("result").value;
     operation="-";
    document.getElementById("result").value="";
    
}
function myFunctionTimes() {
     firstNum = document.getElementById("result").value;
     operation="x";
    document.getElementById("result").value="";
    
}
function myFunctionDivide() {
     firstNum = document.getElementById("result").value;
     operation="/";
    document.getElementById("result").value="";
    
}
function myFunctionClear() {
    firstNum ="";
    operation="";
    ans="";
    secondNum="";
   document.getElementById("result").value="";
   
}

function myFunctionEquals() {
    if (operation=="+") {
        secondNum = document.getElementById("result").value;
    ans= document.createTextNode=(+firstNum + + secondNum); 
    document.getElementById("result").value =ans;
        
    }
    else if(operation=="-"){
        secondNum = document.getElementById("result").value;
    ans= document.createTextNode=(firstNum - secondNum); 
    document.getElementById("result").value =ans;

    }else if(operation=="x"){

        secondNum = document.getElementById("result").value;
    ans= document.createTextNode=(firstNum * secondNum); 
    document.getElementById("result").value =ans; 
    }
    else{

        secondNum = document.getElementById("result").value;
    ans= document.createTextNode=(firstNum / secondNum); 
    document.getElementById("result").value =ans; 
    }
}
