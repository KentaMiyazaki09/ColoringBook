import cat from './_modules/cat'
import moon from './_modules/moon'
import hat from './_modules/hat'

window.addEventListener('DOMContentLoaded', () => {
  const Doc = document

  // 猫を描画するcanvas
  const canvas = Doc.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  // 猫canvas背景
  ctx.beginPath()
  ctx.fillStyle = 'rgb(255, 255, 255)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

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

    // スタンプ描画
    const stamps = {
      moon: Doc.getElementById('stamp-moon').checked,
      hat: Doc.getElementById('stamp-hat').checked
    }

    // その他を描画するcanvas
    const canvasItems = Doc.getElementById('canvas-items')
    const ctxItems = canvasItems.getContext('2d')

    // const canvasBox = Doc.getElementById('canvas-box')

    if (stamps.hat) {
      const hatSVG = hat({ size: 512 })
      const imgHat = new Image()
      imgHat.src = `data:image/svg+xml;base64, ${btoa(hatSVG)}`
      imgHat.onload = () => {
        ctxItems.drawImage(imgHat, 105, -40, 200, 200)
      }
    }

    if (stamps.moon) {
      const moonSVG = moon({ size: 512 })
      const imgMoon = new Image()
      imgMoon.src = `data:image/svg+xml;base64, ${btoa(moonSVG)}`
      imgMoon.onload = () => {
        ctxItems.drawImage(imgMoon, 400, 0, 200, 200)
      }
    }
  }

  DrawingCat()
  Doc.getElementById('palette').addEventListener('change', DrawingCat)
  Doc.getElementById('stamp').addEventListener('change', DrawingCat)

  // ダウンロードボタン
  Doc.getElementById('download-btn').addEventListener('click', function () {
    this.href = canvas.toDataURL('image/jpeg')
  })

  // canvasクリアボタン
  // Doc.getElementById('clear-btn').addEventListener('click', () => {
  //   ctxItems.clearRect(0, 0, canvas.width, canvas.height)
  // })
})
