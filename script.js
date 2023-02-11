
let yourName = prompt ("What is your name?");

let yourGender = prompt("what your gender? male or female.");
if ( yourGender == "male") {
    alert (" ברוך הבא!");
}
if (yourGender=="female"){
    alert ("ברוכה הבאה!");
}
else { alert("it's ok, we understand!")}



let yourAge = prompt ("What is your age?");

let age = Number (yourAge);
if (yourAge) {   

if (!Number.isNaN (age)) { 

if (age <0) { alert(" ha-ha, its not exist!");
    
}
if (age<13) { alert ("We need your parents :(");
    
}
if (age<18) { alert ("Oh no, very young to subscribe without parents... ");
    
}
if (age <90) { alert ("Enjoy your life now!");
    
}
if (age>90) {alert ("You are lucky!");
    
}}}


let yourEmail = prompt ("Wat is your e-mail?");
let subscribe = confirm ("Would you like to subscribeto us?");
if (subscribe) {
    alert ("Thank you for subscribing!" + " " + yourEmail);
    
} else { alert("it's ok, we understand!")}