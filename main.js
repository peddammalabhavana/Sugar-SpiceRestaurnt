const navIconEL = document.querySelector('.nav--icon');
const navCloseEL = document.querySelector('.nav--close');
const navList = document.querySelector('.nav--list');
const navBgOverEL = document.querySelector('.nav--bgOverlay');

const navOpen = () =>{
    navList.classList.add('show');
    navBgOverEL.classList.add('active');
    document.body.style='visibility:visible; height:100vh; width:100vw;overflow:hidden;'
}
const navClose = () =>{
    navList.classList.remove('show');
    navBgOverEL.classList.remove('active');
    document.body.style='visibility:visible; height:initial; width:100%;overflow-x:hidden;'
}

navIconEL.addEventListener('click',navOpen);
navCloseEL.addEventListener('click',navClose);
navBgOverEL.addEventListener('click',navClose);

//aos
AOS.init({
    offset:200,
    delay:100,
    duration:400,
    easing:'ease',
    once:false,
    mirror:false,
    anchorPlacement:'top-bottom'
})