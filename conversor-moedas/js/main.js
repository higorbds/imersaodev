const button = document.querySelector('.botao__principal')
const popupWrapper = document.querySelector('.popup-wrapper')
const popupClose = document.querySelector('.popup-close')
const resultElement = document.querySelector('.popup .result')



button.addEventListener('click', () => {
  const dolarInput = document.querySelector('.conversor input').value
  const dolarInputNum = parseFloat(dolarInput);
  const dolarValue = 5.28
  
  if (dolarInputNum < 0) {
    alert('Digite um número positivo!')
    return
  }

  const result = dolarInputNum * dolarValue
  const resultFormated = result.toFixed(2).toString().replace('.', ',')

  resultElement.innerHTML = "R$" + resultFormated

  popupWrapper.style.display = 'block'
})


popupWrapper.addEventListener('click', e => {
  const classOfElementClicked = e.target.classList[0];

  if(classOfElementClicked === 'popup-wrapper' || classOfElementClicked === 'popup-close') {
    popupWrapper.style.display = 'none'
  }
})
