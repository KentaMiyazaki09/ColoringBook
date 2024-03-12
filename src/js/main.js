import DrawingCat from './_modules/_DrawingCat'
import DrawingStamp from './_modules/_DrawingStamp'
import ClearStampButton from './_modules/_ClearStampButton'
import concatCanvas from './_modules/_ConcatCanvas'

window.addEventListener('DOMContentLoaded', () => {
  /**
   * 猫を描画
   * 色を変えたら再描画
   */
  DrawingCat()
  document.querySelector('.palette').addEventListener('change', () => DrawingCat())

  /**
   * スタンプ描画
   * クリアボタン押したら全消去
   */
  DrawingStamp()
  ClearStampButton()

  /**
   * ダウンロードボタン
   */
  concatCanvas()
})
