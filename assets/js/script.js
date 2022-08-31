const line = document.querySelector('.line');

const target = document.querySelector(".target");
const links = document.querySelectorAll(".header__nav__list__item a");
const colors = ["var(--color-1)", "var(--color-3)", "var(--color-4)", "var(--color-5)"];

function mouseenterFunc() {
    if (!this.parentNode.classList.contains("active")) {
        for (let i = 0; i < links.length; i++) {
            if (links[i].parentNode.classList.contains("active")) {
                links[i].parentNode.classList.remove("active");
            }

            links[i].style.opacity = "0.25";
        }
            
    this.parentNode.classList.add("active");
    this.style.opacity = "1";
    
    const width = this.getBoundingClientRect().width;
    const height = this.getBoundingClientRect().height;
    const left = this.getBoundingClientRect().left + window.pageXOffset;
    const top = this.getBoundingClientRect().top + window.pageYOffset;

    let color = colors[0];
    if(this.innerText == 'Portfólio'){
        color = colors[1];
    } else if (this.innerText == 'Formação'){
        color = colors[2];
    } else if (this.innerText == 'Contato'){
        color = colors[3];
    }

    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
    target.style.borderColor = color;
    target.style.transform = "none";  
    
    line.style.background = "linear-gradient(90deg, rgba(255,255,255,0) 0%, " + color + " 50%, rgba(255,255,255,0) 100%)";
    }
}

function mouseoutFunc() {
    for (let i = 0; i < links.length; i++) {
        if (links[i].parentNode.classList.contains("active")) {
            links[i].parentNode.classList.remove("active");
        }

        links[i].style.opacity = "1";
    }

    target.style.width = `0px`;
}

function resizeFunc() {
    const active = document.querySelector("header__nav__list__item.active");
     
    if (active) {
      const left = active.getBoundingClientRect().left + window.pageXOffset;
      const top = active.getBoundingClientRect().top + window.pageYOffset;
   
      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
    }
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", mouseenterFunc);
    links[i].addEventListener("mouseout", mouseoutFunc);
  }

window.addEventListener("resize", resizeFunc);