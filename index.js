import mrujs from 'mrujs'

mrujs.start()


function clickHandler(event) {
  console.debug(["😂", event])
}

function formSubmit(event) {
  event.preventDefault()
  console.debug(["🥰", event])
}

document.querySelectorAll(`button,input[type=submit]`).forEach(x => x.addEventListener(`click`, clickHandler))
document.querySelectorAll(`form`).forEach(x => x.addEventListener(`submit`, formSubmit))