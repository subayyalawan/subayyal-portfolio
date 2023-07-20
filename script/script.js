let navlink=document.querySelectorAll('.nav-link')

navlink.forEach(e=>{
    // if(e.href === window.location.href){
    //     e.setAttribute('aria-current', 'page')
    // }
    console.log(e.href, window.location.href)
})

let nav = document.querySelector('nav')
let header = document.querySelector('header')
const offset = window.scrollY

window.addEventListener('scroll', ()=>{
    
    const offset = window.scrollY;
    if(offset > 75){
        nav.classList.add('navScrolled')
        header.classList.add('headerScrolled')
    }else{
        nav.classList.remove("navScrolled");
        header.classList.remove("headerScrolled");
    }
})