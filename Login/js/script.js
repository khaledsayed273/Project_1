let input = document.querySelector('.inp')
let eye = document.getElementById('eye')

eye.onclick = function(){
    if(input.type === 'password'){
        input.type = 'text'
    }else{
        input.type = 'password'
    }
}
