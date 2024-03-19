const menuItems = document.querySelectorAll('.tool__menu li')

export default () => {
  menuItems.forEach((item, idx) => {
    item.addEventListener('click', function () {
      if (!this.classList.contains('is-active')) {
        document.querySelector('.tool__menu li.is-active').classList.remove('is-active')
        this.classList.add('is-active')

        document.querySelector('.tool__list li.is-active').classList.remove('is-active')
        document.querySelectorAll('.tool__list >li')[idx].classList.add('is-active')
      }
    })
  })
}
