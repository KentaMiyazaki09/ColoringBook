export default () => {
  document.querySelector('.download-btn').addEventListener('click', function () {
    this.href = document
      .querySelector('.concat-canvas')
      .getContext('2d')
      .canvas.toDataURL('image/jpeg')
    document.querySelector('.download').classList.remove('is-active')
  })
}
