document.querySelector('.menu__close').addEventListener('click', () => {
	document.querySelector('.menu__popup').style.display = 'none'
 })

document.querySelector('.menu__btn').addEventListener('click', () => {
	document.querySelector('.menu__popup').style.display = 'flex'
 })

document.querySelector('.home__btn').addEventListener('click', () => {
	document.querySelector('.home__popup').style.display = 'flex'
 })

document.querySelector('.home__close').addEventListener('click', () => {
	document.querySelector('.home__popup').style.display = 'none'
 })
  