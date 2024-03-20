import Canvas from './Class/_Canvas'

const ConcatCanvas = new Canvas(document.querySelector('.concat-canvas'))
export default () => {
  document.querySelector('.concat-btn').addEventListener('click', () => {
    document.querySelector('.download').classList.add('is-active')
    ConcatCanvas.concatCanvas(['.canvas', '.canvas-stamps'])
  })
}
