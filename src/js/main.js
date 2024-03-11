import cat from './_modules/_catSVG'
import SVGList from './_modules/_SVGList'

window.addEventListener('DOMContentLoaded', () => {
  const Doc = document

  // #猫を描画するcanvas
  const canvas = Doc.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  // 猫canvas背景
  ctx.beginPath()
  ctx.fillStyle = 'rgb(255, 255, 255)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  const canvasBox = Doc.getElementById('canvas-box')

  function DrawingCat() {
    // 色の取得
    const catColors = {
      eyeLeft: Doc.getElementById('eye-left').value,
      eyeRight: Doc.getElementById('eye-right').value,
      patternBack: Doc.getElementById('pattern-back').value,
      patternTail: Doc.getElementById('pattern-tail').value,
      patternFace: Doc.getElementById('pattern-face').value,
      patternArm: Doc.getElementById('pattern-arm').value,
      patternLeg: Doc.getElementById('pattern-leg').value
    }
    const catSVG = cat(catColors)
    // canvasにsvgを書き出す
    const Img = new Image()
    Img.src = `data:image/svg+xml;base64, ${btoa(catSVG)}`
    Img.onload = () => {
      ctx.drawImage(Img, 0, 0, 666, 666)
    }
  }

  DrawingCat()
  Doc.getElementById('palette').addEventListener('change', DrawingCat)

  // #スタンプ描画
  const stampButton = Doc.querySelectorAll('.stamp-button')
  stampButton.forEach((button) => {
    button.addEventListener('click', function () {
      const itemCanvas = Doc.createElement('canvas')
      itemCanvas.classList.add('canvas-item')
      itemCanvas.setAttribute('width', 700)
      itemCanvas.setAttribute('height', 700)
      const cxtItemCanvas = itemCanvas.getContext('2d')
      const itemSvg = SVGList[`${this.name}`]

      const itemImg = new Image()
      itemImg.src = `data:image/svg+xml;base64, ${btoa(itemSvg)}`
      itemImg.onload = function () {
        cxtItemCanvas.drawImage(this, 0, 0, 200, 200)
        canvasBox.appendChild(itemCanvas)
      }
    })
  })

  // #ダウンロードボタン
  // function concatCanvas(base, asset) {
  //   const baseCanvas = document.querySelector(base)
  //   const baseCanvasCtx = baseCanvas.getContext('2d')
  //   if(asset.length > 0) {

  //   }
  // }

  Doc.getElementById('download-btn').addEventListener('click', function () {
    // concatCanvas('#concat', ['#canvas', '.canvas-item'])
    this.href = canvas.toDataURL('image/jpeg')
  })

  // #スタンプクリアボタン
  Doc.getElementById('clear-btn').addEventListener('click', () => {
    const removeItems = Doc.getElementsByClassName('canvas-item')
    if (removeItems.length > 0) {
      ;[...removeItems].forEach((item) => item.remove())
    }
  })
})
