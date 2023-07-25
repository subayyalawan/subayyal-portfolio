let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('.nav-link')

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             // console.log(hello)
//             navlinks.forEach(links=>{
//                 links.classList.remove('active');
//                 // if (links.classList.contains(id)){
//                 //     links.classList.add('active')
//                 // }
//                 // document.querySelector(`.nav-links[href*=' + id + ']`).classList.add('active')
//             })
//         }
//     })
// }

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    let top = window.scrollY;
    let sectionHeight = section.offsetHeight;
    if (top >= sectionTop - 400) {
      current = section.getAttribute("id");
    }
  });

  navlinks.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

let nav = document.querySelector('nav')
let header = document.querySelector('header')

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

let menu = document.querySelector('.mid ul')
let menuOpen = document.querySelector('.navMenuOpen')
let menuClose = document.querySelector('.navMenuClose')

menuOpen.addEventListener('click', ()=>{
  menu.style.display = 'flex'
  menu.style.top = '0'

})
menuClose.addEventListener('click', ()=>{
  menu.style.top = '-100%'
})