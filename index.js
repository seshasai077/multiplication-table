// multiplication

let number = document.querySelector(`#num`)
number.addEventListener(`keyup`, function(){
    let numEl = Number(number.value)
    document.querySelector(`#numberchild`).innerText = numEl
    calculate() // when you modifie it must calculate
})


let card1 = document.querySelector(`#rang`)
card1.addEventListener(`input` , function(){
    let dragg = card1.value
    document.querySelector(`#rangechild`).innerText = dragg
    calculate() // when you modifie it must calculate
})

function calculate(){
let number = Number(document.querySelector(`#numberchild`).innerText)
let multiplier = Number(document.querySelector(`#rangechild`).innerText)
      let mul = number*multiplier
      document.querySelector(`#Multiplication`).innerText = mul
      
}


