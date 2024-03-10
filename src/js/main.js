import cat from './cat'

window.addEventListener('DOMContentLoaded', () => {
  const Doc = document

  function DrawingCat (){
    // 色の取得
    const catColors = {
      eyeLeft: Doc.getElementById('eye-left').value,
      eyeRight: Doc.getElementById('eye-right').value,
      patternBack: Doc.getElementById('pattern-back').value,
      patternTail: Doc.getElementById('pattern-tail').value,
      patternFace: Doc.getElementById('pattern-face').value,
      patternArm: Doc.getElementById('pattern-arm').value,
      patternLeg: Doc.getElementById('pattern-leg').value,
    }

    // canvasに入れるSVG
    const catSVG = cat(catColors)

    // canvasにsvgを書き出す
    const Img = new Image()
    Img.src = `data:image/svg+xml;base64, ${btoa(catSVG)}`
    Img.onload = function() {
      const canvas = document.getElementById('canvas')
      const ctx = canvas.getContext('2d')
      ctx.drawImage(Img, 0, 0, 666, 666)
    }
  }

  DrawingCat()
  Doc.getElementById('palette').addEventListener('change', DrawingCat)

  // ダウンロードボタン
  Doc.getElementById('download-btn').addEventListener('click', function() {
    this.href = document.getElementById('canvas').toDataURL('image/png')
  })
})
