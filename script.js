const menu = document.querySelector('.desctop')
const burger = document.querySelector('.burger')
const close = document.querySelector('.close')

function menuOpenClose(){
    menu.classList.toggle('desctop--visible')
    close.classList.toggle('visible')
    burger.classList.toggle('visible')
    document.body.classList.toggle('block-body')
}

burger.addEventListener('click', menuOpenClose)

close.addEventListener('click', menuOpenClose)