import cat from './SVG/_cat.js'

/**
 * canvasに猫を描画
 */
const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')

export default () => {
  // 色の取得
  const catColors = {
    eyeLeft: document.getElementById('eye-left').value,
    eyeRight: document.getElementById('eye-right').value,
    patternBack: document.getElementById('pattern-back').value,
    patternTail: document.getElementById('pattern-tail').value,
    patternFace: document.getElementById('pattern-face').value,
    patternArm: document.getElementById('pattern-arm').value,
    patternLeg: document.getElementById('pattern-leg').value
  }
  const catSVG = cat(catColors)

  // canvasにsvgを書き出す
  const Img = new Image()
  Img.src = `data:image/svg+xml;base64, ${btoa(catSVG)}`
  Img.onload = () => {
    ctx.drawImage(Img, 0, 0, 666, 666)
  }

  // 背景
  ctx.beginPath()
  ctx.fillStyle = 'rgb(255, 255, 255)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}
