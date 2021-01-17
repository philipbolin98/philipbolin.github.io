const addScrollBar = function(){
    document.body.style.overflow = 'visible';
    document.getElementById('animation-wrapper').remove();
}

setTimeout(addScrollBar, 7000);


var prevScrollPos = window.pageYOffset;

const hideNavbar = function(){
    var currentScrollPos = window.pageYOffset;
    if(prevScrollPos > currentScrollPos){
        document.getElementById('navbar').style.top = '0';
    } else {
        document.getElementById('navbar').style.top = '-100px';
    }
    prevScrollPos = currentScrollPos;
}

window.onscroll = hideNavbar;