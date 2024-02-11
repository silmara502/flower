const tabMenu = document.querySelectorAll('.js-menu  a[href^="#"]');


function scrolltoSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href);

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })

}

tabMenu.forEach((item) =>{
    item.addEventListener('click', scrolltoSection)
})