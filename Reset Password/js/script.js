let eye = document.getElementById('eye')
let eye2 = document.getElementById('eye2')

let inp1 = document.querySelector('.inp')
let inp2 = document.querySelector('.inp2')


eye.onclick = function(){
    if(inp1.type === 'password'){
        inp1.type = 'text'
    }else{
        inp1.type = 'password'
    }
}

eye2.onclick = function(){
    if(inp2.type === 'password'){
        inp2.type = 'text'
    }else{
        inp2.type = 'password'
    }
}