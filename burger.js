let active = false
const button = document.querySelector(".burger-menu");
const burger = document.querySelector(".burgerdropdown");


    button.addEventListener("click", () => {
        active = !active
        if (active){
            burger.classList.toggle('active')
        }
        if (!active){
            burger.classList.remove('active')
        }
    
        
    })

   





