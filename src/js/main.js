import cat from './cat'

const Doc = document
function DrawingCat (){
  // 色の取得
  const catColors = {
    eyeLeft: Doc.getElementById('canvas-eye-left').value,
    eyeRight: Doc.getElementById('canvas-eye-right').value,
    pattern: Doc.getElementById('canvas-pattern').value
  }

  // canvasに入れるSVG
  const catSVG = cat(catColors)

  // canvasにsvgを書き出す
  const Img = new Image()
  Img.src = `data:image/svg+xml;base64, ${btoa(catSVG)}`
  Img.onload = function() {
    const c = document.getElementById('canvas')
    const ctx = c.getContext('2d')
    ctx.drawImage(Img, 0, 0, 666, 666)
  }
}

window.addEventListener('DOMContentLoaded', () => {
  DrawingCat()
  Doc.getElementById('palette').addEventListener('change', DrawingCat)
})
