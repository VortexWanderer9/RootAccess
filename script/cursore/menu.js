 const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');
 window.addEventListener('scroll', () =>{
        if(window.scrollY > 60){
            navbar.classList.add('scrolled')
            closeMenu()
        }else{
            navbar.classList.remove('scrolled');
        }
 })
function closeMenu(){
    if(navMenu.classList.contains('active')){
        navMenu.classList.add('closing')
        setTimeout(() =>{
            navMenu.classList.remove('active', 'closing')
            menuBtn.classList.remove('active')
        },400)
    }
}

menuBtn.addEventListener('click', () =>{
    if(menuBtn.classList.contains('active')){
        closeMenu()
    }else{
        navMenu.classList.add('active')
        menuBtn.classList.add('active')
    }
})

document.querySelectorAll('.nav-link a').forEach(link =>{
    link.addEventListener('click', () =>{
    closeMenu()
})
})