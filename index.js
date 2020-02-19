
// Detect Button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonHtml = this.innerHTML;
        checkCase(buttonHtml);
        activeClass(buttonHtml);
        
    });
}

// Detect Key press
document.addEventListener("keydown", function(event){
    var keyPress = event.key
    checkCase(keyPress);
    activeClass(keyPress);

});

// Check cases
function checkCase(event) {
    switch (event) {
        case 'w':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'a':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case 'j':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'k':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'l':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

    
        default: console.log();
            break;
    }
} 

function activeClass(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}
