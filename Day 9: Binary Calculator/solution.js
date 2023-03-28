/*
Objective

In this challenge, we implement a calculator that uses binary numbers. Check out the attached tutorial for learning materials.

Task

Implement a simple calculator that performs the following operations on binary numbers: addition, subtraction, multiplication, and division. Note that division operation must be integer division only; for example, , , and .

The calculator's initial state must look like this:

image

Element IDs. Each element in the document must have an id, specified below:

innerHTML	id	Description/Behavior
res	Contains the result of button presses.
btns	A button container that displays all eight calculator buttons.
0	btn0	A button expressing binary digit .
1	btn1	A button expressing binary digit .
C	btnClr	A button to clear the contents of .
=	btnEql	A button to evaluate the contents of the expression in .
+	btnSum	A button for the addition operation.
-	btnSub	A button for the subtraction operation.
*	btnMul	A button for the multiplication operation.
/	btnDiv	A button for the integer division operation.
Styling. The document's elements must have the following styles:

body has a width of 33%.
res has a background-color of lightgray, a border that is solid, a height of 48px, and a font-size of 20px.
btn0 and btn1 have a background-color of lightgreen and a color of brown.
btnClr and btnEql have a background-color of darkgreen and a color of white.
btnSum, btnSub, btnMul, and btnDiv have a background-color of black, a color of red.
All the buttons in btns have a width of 25%, a height of 36px, a font-size of 18px, margin of 0px, and float value left.
The .js and .css files are in different directories, so use the link tag to provide the CSS file path and the script tag to provide the JS file path:

<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
    </head>
    
    <body>
    	<script src="js/binaryCalculator.js" type="text/javascript"></script>
    </body>
</html>
Constraints

All expressions in the test dataset are entered in the form , where  is the first binary number,  is the second binary number, and  is in the set .
Both operands will always be positive integers when converted from base- to base-.
All expressions will be valid.
Explanation

Consider the following sequence of button clicks:

Before pressing the  button, the result div looks like this:

27+8

After pressing the  button to evaluate our expression, the result div looks like this:

27+8eval

Notice that , , and , so our calculator evaluated the expression correctly.

Now, let's consider our next sequence of button clicks as:

Before pressing the  button, the result div looks like this:

141x7

After pressing the  button to evaluate our expression, the result div looks like this:

141x7eval

Consider the next sequence of button clicks as:

The result div looks like this:

clear3
*/

  let elem = document.getElementById("res");
  
  function checkOperator(){
    if(elem.innerHTML.endsWith('+') || elem.innerHTML.endsWith('-') || elem.innerHTML.endsWith('*') || elem.innerHTML.endsWith('/')){
      return true;
    }
  }
  
  function clickZero() {
    elem.innerHTML +='0';
  }
  
  function clickOne() {
    elem.innerHTML +='1';
  }
  
  function clickSum() {
    if(elem.innerHTML.length!=0 && !checkOperator()){
        elem.innerHTML +='+';
       }
  }  
  
  function clickSub() {
    if(elem.innerHTML.length!=0 && !checkOperator()){
        elem.innerHTML +='-';
       }
  }

  function clickMul() {
    if(elem.innerHTML.length!=0 && !checkOperator()){
        elem.innerHTML +="*";
       }
  }

  function clickDiv() {
    if(elem.innerHTML.length!=0 && !checkOperator()){
        elem.innerHTML +="/";
      }
  }

  function clickClr() {
    elem.innerHTML = '';
  }

  function clickEql() {
    if(!checkOperator()) {
      let re = /\d+/g
      let re2 = /[\+\-\*\/]+/g
      let numbers = elem.innerHTML.match(re);
      let operations = elem.innerHTML.match(re2);
      while(operations.length>0) {
        if(operations.includes('*')) {
          let indexOfMul = operations.indexOf('*');
          let mul = ( indexOfMul!=0 ? parseInt(numbers[indexOfMul-1],2) : parseInt(numbers[indexOfMul],2) ) * parseInt(numbers[indexOfMul+1],2);
          numbers.splice(indexOfMul,2);
          numbers.splice(indexOfMul,0,mul.toString(2));
          operations.splice(indexOfMul,1);
        } else if (operations.includes('/')) {
          let indexOfDiv = operations.indexOf('/');
          let division = ( indexOfDiv!=0 ? parseInt(numbers[indexOfDiv-1],2) : parseInt(numbers[indexOfDiv],2) ) / parseInt(numbers[indexOfDiv+1],2);
          numbers.splice(indexOfDiv,2);
          numbers.splice(indexOfDiv,0,division.toString(2));
          operations.splice(indexOfDiv,1);
        } else if (operations.includes('+')) {
          let indexOfSum = operations.indexOf('+');
          let sum = ( indexOfSum!=0 ? parseInt(numbers[indexOfSum-1],2) : parseInt(numbers[indexOfSum],2) ) + parseInt(numbers[indexOfSum+1],2);
          numbers.splice(indexOfSum,2);
          numbers.splice(indexOfSum,0,sum.toString(2));
          operations.splice(indexOfSum,1);
        } else {
          let indexOfSub = operations.indexOf('-');
          let sub = ( indexOfSub!=0 ? parseInt(numbers[indexOfSub-1],2) : parseInt(numbers[indexOfSub],2) )- parseInt(numbers[indexOfSub+1],2);
          numbers.splice(indexOfSub,2);
          numbers.splice(indexOfSub,0,sub.toString(2));
          operations.splice(indexOfSub,1);
        }  
      }
      elem.innerHTML = numbers[0].toString(2);
    } else {
      alert("Line must ends with number.")
    }
  }

