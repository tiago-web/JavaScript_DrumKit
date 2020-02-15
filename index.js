for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var audio1 = new Audio('sounds/crash.mp3');
        audio1.play();
        
    });
    
}

