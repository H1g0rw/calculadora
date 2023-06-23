function somar(){
    let num1 = document.querySelector('.numero1')
    let num2 = document.querySelector('.numero2')
    let res = document.querySelector('.res')

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let soma = n1 + n2

    res.innerHTML = `Resultado ${soma}`
}

function subtrair(){
    let num1 = document.querySelector('.numero1')
    let num2 = document.querySelector('.numero2')
    let res = document.querySelector('.res')

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)

    let subtraçao = n1 - n2
    res.innerHTML = `Resultado ${subtraçao}`
}

function multiplicar(){
    let num1 = document.querySelector('.numero1')
    let num2 = document.querySelector('.numero2')
    let res = document.querySelector('.res')

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)

    let multiplica = n1 * n2
    res.style.TextAlin
    res.innerHTML = `Resultado ${multiplica}`
}

function dividir(){
    let num1 = document.querySelector('.numero1')
    let num2 = document.querySelector('.numero2')
    let res = document.querySelector('.res')

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)

    let divide = n1 / n2
    res.innerHTML = `Resultado ${divide}`
}