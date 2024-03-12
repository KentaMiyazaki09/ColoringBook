export default () => {
  /**
   * Canvas画像として取得
   * @param {string} id 対象canvasのid
   * @return {object}
   */
  function getImageFromCanvas(id) {
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
   * @param {string} base 合成結果を表示するcanvas
   * @param {array} assets 合成する素材canvas
   * @return {void}
   */
  async function concatCanvas(base, assets) {
    const canvas = document.querySelector(base)
    const ctx = canvas.getContext('2d')
    for (let i = 0; i < assets.length; i++) {
      const image = await getImageFromCanvas(assets[i])
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    }
  }

  document.querySelector('.concat-btn').addEventListener('click', () => {
    concatCanvas('#concat', ['.canvas'])
  })
  document.getElementById('download-btn').addEventListener('click', function () {
    const canvas = document.querySelector('#concat')
    const ctx = canvas.getContext('2d')
    this.href = ctx.canvas.toDataURL('image/jpeg')
  })
}
