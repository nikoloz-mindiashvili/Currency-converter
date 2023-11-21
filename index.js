const displayEl = document.getElementById("display-div")
const btnEl = document.getElementById("convert-btn")
const usdEl = document.getElementById("usd-amount")
const eurEl = document.getElementById("eur-amount")
const rubEl = document.getElementById("rub-amount")

const usdConversionRate = 0.37
const eurConversionRate = 0.34
const rubConversionRate = 32.68

btnEl.addEventListener('click', ()=>{
  userInput = prompt("How much GEL do you have?")
  displayEl.innerText = userInput
  usdEl.innerText = `${userInput} GEL to USD = ${(userInput * usdConversionRate).toFixed(2)} USD`
  eurEl.innerText = `${userInput} GEL to EUR = ${(userInput * eurConversionRate).toFixed(2)} EUR`
  rubEl.innerText = `${userInput} GEL to RUB = ${(userInput * rubConversionRate).toFixed(2)} RUB`
})