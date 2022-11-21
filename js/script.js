let span = document.querySelector('.navbar-toggler')
let nav = document.querySelector('.navbar-nav')

let next = document.querySelectorAll('.next i')

span.onclick = function(){
    if(nav.style.display === 'none'){
        nav.style.display = 'block'
    }else{
        nav.style.display = 'none'
    }
}

next.forEach((items) => {
    items.addEventListener('click' , (e) => {
        next.forEach((items) => {
            items.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
    })

})