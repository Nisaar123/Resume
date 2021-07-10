var x = document.querySelectorAll('.nav-menu a') ;
for(var i = 0 ; i < x.length ; i++){
    x[i].addEventListener('click' , function(event){
        event.preventDefault() ;
        var targetId = this.textContent.trim().toLowerCase() ;
        if(targetId == "home"){
            return ;
        }
        
        var targetSection = document.getElementById(targetId) ;
        var scrollInterval = setInterval(function(){
            var dimenssion = targetSection.getBoundingClientRect() ;
            if(targetId == "contact"){
                if(dimenssion.top <= 180){
                    clearInterval(scrollInterval) ;
                    return ;
                }
            }
            if(dimenssion.top <= 0){
                clearInterval(scrollInterval) ;
                return ;
            }
            window.scrollBy(0 , 50) ;
        } , 15) ;
    }) ;
}













var progressBars = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById('skills-container');
var animationDone = false;



function initialiseBars() {
    for (var bar of progressBars) {
        bar.style.width = 0 + '%';
    }
}

initialiseBars();



function fillBars() {

    for (let bar of progressBars) {
        let currentWidth = 0;
        let interval = setInterval(function () {
            let targetWidth = bar.getAttribute('data-bar-width');
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 5);
    }
}



function checkScroll() {

    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top <= window.innerHeight) {
        animationDone = true;
        fillBars();
    } else if (coordinates.top > window.innerHeight) {
        animationDone = false;
        initialiseBars();
    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);