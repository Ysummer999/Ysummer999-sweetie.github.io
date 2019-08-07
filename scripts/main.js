setInterval(test,3000);  
var array=new Array();
var index=0;
var array= new Array("images/plan1.JPG","images/plan2.JPG","images/plan3.JPG","images/plan4.JPG","images/plan5.JPG","images/plan6.JPG","images/plan7.JPG");
function test()
 {    var myimg=document.getElementById("imgs"); 
if(index==array.length-1)
   {     index=0;     }else{      index++;      }  
   myimg.src=array[index];  
}

function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = '七夕快乐鸭' + name + '~';
}

function setUserName() {
  let myName = prompt('你叫什么鸭');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}//놓迦뺏덜쯤

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;
