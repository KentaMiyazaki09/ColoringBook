import DrawingCat from './_modules/_DrawingCat'
import { DrawingStamp, ClearStamps } from './_modules/_DrawingStamp'

import ConcatCanvas from './_modules/_ConcatCanvas'

import DownloadButton from './_modules/_DownloadButton'

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
   * 完成ボタン
   */
  ConcatCanvas()

  /**
   * ダウンロードボタン
   */
  DownloadButton()
})
