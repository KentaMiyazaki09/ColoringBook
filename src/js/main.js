import DrawingCat from './_modules/_DrawingCat'
import { DrawingStamp, ClearStamps } from './_modules/_DrawingStamp'

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
  ClearStamps()

  /**
   * ダウンロードボタン
   */
  concatCanvas()

  document.querySelector('.download-btn').addEventListener('click', function () {
    this.href = document
      .querySelector('.concat-canvas')
      .getContext('2d')
      .canvas.toDataURL('image/jpeg')
    document.querySelector('.download').classList.remove('is-active')
  })
})
