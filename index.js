import mrujs from 'mrujs'

mrujs.start()


function clickHandler(event) {
  console.debug(["😂", event])
}

function formSubmit(event) {
  event.preventDefault()
  console.debug(["🥰", event])
}

function invalidHandler(event) {
  console.debug(["⚠️", event])
}

function toggleLocks(event) {
  document.querySelectorAll(`.button-to-lock`).forEach(x => x.toggleAttribute(`disabled`))
}

document.querySelectorAll(`button,input[type=submit]`).forEach(x => x.addEventListener(`click`, clickHandler))
document.querySelectorAll(`form`).forEach(x => x.addEventListener(`submit`, formSubmit))
document.querySelectorAll(`form`).forEach(x => x.addEventListener(`invalid`, invalidHandler))

document.getElementById(`toggle-lock`).addEventListener(`click`, toggleLocks)