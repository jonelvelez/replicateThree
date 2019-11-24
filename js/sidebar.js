let iconburger = document.querySelector('nav .hamburger');
let sidebar = document.querySelector('nav .sidebar');
let closeIcon = document.querySelector('nav .fa-times')


    iconburger.addEventListener('click', () => {
       sidebar.style.left = '30%';
    });

    closeIcon.addEventListener('click', () => {
        sidebar.style.left = '100%';
    });



function scrollnav(){
    let nav = document.querySelector('.navbar');
    let lastScrollTop

    window.addEventListener('scroll', () => {
        let st = window.pageYOffset || document.documentElement.scrolltop;

        if(st > lastScrollTop){
            nav.classList.add('navaddclass');   
        } else if(st == lastScrollTop){
            nav.classList.remove('navaddclass')
        }
        lastScrollTop = st;
    });

}

window.addEventListener('scroll', scrollnav)




