
$(document).ready(function(e){

})
// for text animation Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

setTimeout(() => {
    anime.timeline({loop: false})
        .add({
            targets: '.ml1 .letter',
            scale: [0.3,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 200,
            // delay: 1200,
            delay: (el, i) => 70 * (i+1)
        })
}, 1500);

function showMenu(category){
    if(category==='apetizer'){
        $( "#apetizer" ).removeClass('hide');
        $( "#ApetizerTab" ).addClass('tabItemActive');
    }else{
        $( "#apetizer" ).addClass('hide');
        $( "#ApetizerTab" ).removeClass('tabItemActive');
    }
    if(category==='Breakfast'){
        $( "#Breakfast" ).removeClass('hide');
        $( "#BreakfastTab" ).addClass('tabItemActive');
    }else{
        $( "#Breakfast" ).addClass('hide');
        $( "#BreakfastTab" ).removeClass('tabItemActive');
    }
    if(category==='Lunch'){
        $( "#Lunch" ).removeClass('hide');
        $( "#LunchTab" ).addClass('tabItemActive');
    }else{
        $( "#Lunch" ).addClass('hide');
        $( "#LunchTab" ).removeClass('tabItemActive');
    }
    if(category==='Dinner'){
        $( "#Dinner" ).removeClass('hide');
        $( "#DinnerTab" ).addClass('tabItemActive');
    }else{
        $( "#Dinner" ).addClass('hide');
        $( "#DinnerTab" ).removeClass('tabItemActive');
    }
    if(category==='Drinks'){
        $( "#Drinks" ).removeClass('hide');
        $( "#DrinksTab" ).addClass('tabItemActive');
    }else{
        $( "#Drinks" ).addClass('hide');
        $( "#DrinksTab" ).removeClass('tabItemActive');
    }
}
function showModal(){
    $( "#modal1" ).fadeIn();
}
function closeModal(){
    $( "#modal1" ).fadeOut();
}
function changeColor(type){
    if(type === 'white'){
        $( "#closeBtn" ).attr("src", "assets/restaurantSmallLogoWhite.png");
    }else{
        $( "#closeBtn" ).attr("src", "assets/restaurantSmallLogo.png");
    }
}