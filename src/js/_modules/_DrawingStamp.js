import SVGList from './SVG/_stamps'

/**
 * スタンプ描画
 * スタンプボタンが押されたら新しいcanvasを生成して.canvas-boxに追加
 */

const stampButtons = document.querySelectorAll('.stamp-button')
const canvas = document.querySelector('.stamps-canvas')
const ctx = canvas.getContext('2d')

function DrawingStamp() {
  stampButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const itemImg = new Image()

      const { svg, x, y, width, height } = SVGList[this.name]
      itemImg.src = `data:image/svg+xml;base64, ${btoa(svg)}`
      itemImg.onload = function () {
        ctx.drawImage(this, x, y, width, height)
      }
    })
  })
}

/**
 * スタンプ削除
 * 削除ボタンでcanvasをクリア
 */
const clearBtn = document.querySelector('.clear-btn')
function ClearStamps() {
  clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  })
}

export { DrawingStamp, ClearStamps }
