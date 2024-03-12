import SVGList from './SVG/_stamps'

/**
 * スタンプ描画
 * スタンプボタンが押されたら新しいcanvasを生成して.canvas-boxに追加
 */

const canvasBox = document.querySelector('.canvas-box')
const stampButtons = document.querySelectorAll('.stamp-button')

export default () => {
  stampButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const itemCanvas = document.createElement('canvas')
      itemCanvas.classList.add('canvas-item')
      itemCanvas.setAttribute('width', 700)
      itemCanvas.setAttribute('height', 700)
      const cxtItemCanvas = itemCanvas.getContext('2d')

      const itemImg = new Image()
      itemImg.src = `data:image/svg+xml;base64, ${btoa(SVGList[`${this.name}`])}`
      itemImg.onload = function () {
        cxtItemCanvas.drawImage(this, 0, 0, 200, 200)
        canvasBox.appendChild(itemCanvas)
      }
    })
  })
}
