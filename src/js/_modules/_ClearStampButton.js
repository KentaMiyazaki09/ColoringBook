/**
 * スタンプのcanvasを削除
 */

const clearBtn = document.querySelector('.clear-btn')

export default () => {
  clearBtn.addEventListener('click', () => {
    const removeItems = document.getElementsByClassName('canvas-item')
    if (removeItems.length > 0) {
      ;[...removeItems].forEach((item) => item.remove())
    }
  })
}
