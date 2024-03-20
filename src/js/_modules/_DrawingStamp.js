import SVGList from './SVG/_stamps'
import Canvas from './Class/_Canvas'

/**
 * スタンプを表示するCanvas
 */
const StampCanvas = new Canvas(document.querySelector('.canvas-stamps'), SVGList)

/**
 * スタンプ描画
 * スタンプボタンが押されたら新しいcanvasを生成して.canvas-boxに追加
 */
const stampButtons = document.querySelectorAll('.stamp-button')
function DrawingStamp() {
  stampButtons.forEach((button) => {
    button.addEventListener('click', function () {
      StampCanvas.draw(this.name)
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
    StampCanvas.clear()
  })
}

export { DrawingStamp, ClearStamps }
