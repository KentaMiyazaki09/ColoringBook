/**
 * Canvasを作成
 */
class Canvas {
  /**
   * @param {object} canvas 対象canvas
   * @param {object} SVGList SVGのリスト
   */
  constructor(canvas, SVGList = {}) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.SVGList = SVGList
  }

  /**
   * canvasに描画
   * @param {string} 対象のSVGの名前
   * @return {void}
   */
  draw(name, color = {}) {
    const { svg, x, y, width, height } = this.SVGList(color)[name]
    const ctx = this.ctx

    const itemImg = new Image()
    itemImg.src = `data:image/svg+xml;base64, ${btoa(svg)}`
    itemImg.onload = function () {
      ctx.drawImage(this, x, y, width, height)
    }
  }

  /**
   * canvasに背景を描画
   * @param {string} 背景色
   * @return {void}
   */
  drawBackground(color) {
    this.ctx.beginPath()
    this.ctx.fillStyle = color
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }

  /**
   * 描画されたものを削除
   * @return {void}
   */
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  /**
   * Canvas画像として取得
   * @param {string} id 対象canvasのid
   * @return {Promise}
   */
  getImageFromCanvas(id) {
    return new Promise((resolve, reject) => {
      const image = new Image()
      const ctx = document.querySelector(id).getContext('2d')
      image.onload = () => resolve(image)
      image.onerror = (error) => reject(error)
      image.src = ctx.canvas.toDataURL()
    })
  }

  /**
   * Canvas合成
   * @param {array} assets 合成する素材canvas
   * @return {void}
   */
  async concatCanvas(assets) {
    for (let i = 0; i < assets.length; i++) {
      const image = await this.getImageFromCanvas(assets[i])
      this.ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height)
    }
  }
}

export default Canvas
