const number = document.getElementById('number')
const generate = document.getElementById('generate')

generate.addEventListener('click',handleClick)

number.innerText = 100

function handleClick(){
    const random_number = Math.floor(Math.random() * 100)

    number.innerText = random_number
}

const num = 7
console.log(isNaN(num))