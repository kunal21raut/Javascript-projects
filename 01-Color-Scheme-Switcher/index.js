const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target)
        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey'
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = 'white';
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = 'rgb(140, 0, 255)';
        }
    })
});