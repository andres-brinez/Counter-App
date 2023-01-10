const ContainerNumber= document.querySelector('p')
const btnIncrease=document.getElementById('increase')
const btnDecrease=document.getElementById('decrease')
const btnReset=document.getElementById('reset')


// pasar str a  int
let  number=parseInt(ContainerNumber.textContent)


btnIncrease.addEventListener('click',()=>{operation('suma')})
btnDecrease.addEventListener('click',()=>{operation('resta')})
btnReset.addEventListener('click',()=>{operation()})


function operation(operation){

    if (operation=='suma'){
        number++
    }

    else if (operation=='resta'){
        number--
    }

    else{
        number=0
    }

    addClass()
    ContainerNumber.textContent=number
}


function addClass(){

    if(number<0){
        ContainerNumber.classList.add('negativo')
    }
    else if (number>0)
    {
        ContainerNumber.classList.add('positivo')
        ContainerNumber.classList.remove('negativo')

    }

    else{
        ContainerNumber.classList.remove('negativo')
        ContainerNumber.classList.remove('positivo')

    }


}