var numberOfDrumButtons = document.querySelectorAll(".drum").length;


//detecting Button Press
for (var i=0; i<numberOfDrumButtons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML); //go to that function 
        buttonAnimation(buttonInnerHTML);

    });
}


// detecting Keyboard Press
document.addEventListener("keydown", function(event) {
  /*  console.log(event);  tells us many properties about which key is pressed 
  console.log(this)   
  */

    makeSound(event.key); //which keyboard key is pressed
//eventListener(typeOfEvent,callbackFunction)
    buttonAnimation(event.key);

})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3"); //creating new Audio object 
            tom1.play();                
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3"); 
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3"); 
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3"); 
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3"); 
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3"); 
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3"); 
            kick.play();
            break;
            
    
        default:
            console.log(buttonInnerHTML);
            break;
    }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100); //100 ms
}

/* this works
function handleClick() {
    alert("Hello, this button was clicked!");
}
for (var i=0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",handleClick);


for (var i=0; i<numberOfDrumButtons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click",function() {alert("Hello, this button was clicked")}); /*anonymous function 
*/

/* document.querySelectorAll("button")[0] (this is not array) etc values, and we can give them events.
like this.style.color
console.log(this); which button is clicked
console.log(this.innerHTML); textContent gives whats written inside, even elements such as span,em*/


/* NOTE 
document.querySelectorAll("button"). we dont see addEvent properties here, because it returns us array, we have to specify which array by using [0] [1]...afterwards*/