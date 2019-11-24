function scrollfadeintop(){
    let wrapperImages = document.querySelectorAll('.section-body-three .wrapper-image');
    // let titleTeam = document.querySelector('.section-body-three .title-team');

    Array.from(wrapperImages).forEach((Image) => {
        
        let titleTeamPosition = Image.getBoundingClientRect().bottom;
        let screenPostion = window.innerHeight; 

            if(titleTeamPosition < screenPostion){
                Image.style.transform = "translate3d(0, 0, 0)";
                Image.style.opacity = "1";
            } else {
                Image.style.transform = "translate3d(0, 100px, 0)";
                Image.style.opacity = "0";
            }
   
    });

}



window.addEventListener('scroll', scrollfadeintop);