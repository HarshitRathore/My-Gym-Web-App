$( document ).ready(function(){
    $(".button-collapse").sideNav();
    $('.slider').slider({height: 600});
});        
// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("top-btn").style.display = "block";
    } else {
        document.getElementById("top-btn").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topButton() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}