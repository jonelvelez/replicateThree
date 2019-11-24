
function h3(){

    let h3s = document.querySelectorAll('.h3');

    Array.from(h3s).forEach((h3)=> {

        let h3position = h3.getBoundingClientRect().bottom;
        let screenposition = window.innerHeight / 1
    
        window.addEventListener('scroll', () => {   
            if(h3position < screenposition){
                h3.style.transform = "translate3d(0, 0, 0)";
            } else {
                h3.style.transform = "translate3d(-100%, 0, 0)";
            }
        });
    });
}

    window.addEventListener('scroll', h3);

