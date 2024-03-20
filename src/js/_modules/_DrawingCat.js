import Canvas from './Class/_Canvas'
import SVGList from './SVG/_stamps'

/**
 * スタンプを表示するCanvas
 */
const CatCanvas = new Canvas(document.querySelector('.canvas'), SVGList)

export default () => {
  // 色の取得
  const colors = {
    eyeLeft: document.getElementById('eye-left').value,
    eyeRight: document.getElementById('eye-right').value,
    patternBack: document.getElementById('pattern-back').value,
    patternTail: document.getElementById('pattern-tail').value,
    patternFace: document.getElementById('pattern-face').value,
    patternArm: document.getElementById('pattern-arm').value,
    patternLeg: document.getElementById('pattern-leg').value
  }

  /**
   * canvasに猫と背景を描画
   */
  CatCanvas.draw('cat', colors)
  CatCanvas.drawBackground('rgb(255, 255, 255)')
}
