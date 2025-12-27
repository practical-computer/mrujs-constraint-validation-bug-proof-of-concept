import mrujs from 'mrujs'

mrujs.start()


function clickHandler(event) {
  console.debug(["😂", event])
}

function formSubmit(event) {
  event.preventDefault()
  console.debug(["🥰", event])
}

document.querySelectorAll(`button`).forEach(x => x.addEventListener(`click`, clickHandler))
// document.querySelector(`form`).addEventListener(`submit`, formSubmit)