/**
 * SVGのリスト
 * @param {object} color SVGの色
 * @return {object} SVGデータとパラメータを返す
 */

export default (color = {}) => {
  return {
    moon: {
      x: 400,
      y: 0,
      width: 200,
      height: 200,
      svg: `<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="width: 256px; height: 256px; opacity: 1;" xml:space="preserve">
      <g>
        <polygon points="100.704,270.59 134.681,252.713 168.721,270.59 162.236,232.711 189.75,205.906 151.701,200.329 
          134.681,165.862 117.723,200.329 79.675,205.906 107.169,232.711 " style="fill: rgb(75, 75, 75);"></polygon>
        <polygon points="157.208,82.033 183.824,68.037 210.48,82.033 205.392,52.364 226.96,31.375 197.152,26.995 183.824,0 
          170.536,26.995 140.747,31.375 162.275,52.364 " style="fill: rgb(75, 75, 75);"></polygon>
        <polygon points="21.733,120.54 43.362,109.168 65.009,120.54 60.879,96.439 78.397,79.379 54.176,75.828 43.362,53.89 
          32.547,75.828 8.345,79.379 25.843,96.439 " style="fill: rgb(75, 75, 75);"></polygon>
        <path d="M330.87,24.092c16.401,32.034,25.918,68.267,25.918,106.734c0,129.389-104.848,234.277-234.237,234.277
          c-38.507,0-74.74-9.478-106.802-25.957C48.329,439.414,142.423,512,253.556,512c138.108,0,250.099-111.991,250.099-250.1
          C503.655,150.778,431.129,56.654,330.87,24.092z" style="fill: rgb(75, 75, 75);"></path>
      </g>
      </svg>`
    },
    hat: {
      x: 100,
      y: -20,
      width: 200,
      height: 200,
      svg: `<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="width: 256px; height: 256px; opacity: 1;" xml:space="preserve">
      <style type="text/css">
        .st0{fill:#4B4B4B;}
      </style>
      <g>
        <path class="st0" d="M470.098,289.729c-28.645-0.328-61.446,22.392-61.446,22.392l11.327-188.512
          c0.876-14.738-9.62-27.727-24.206-29.958c0,0-28.142-23.222-139.772-23.222c-111.651,0-139.771,23.222-139.771,23.222
          c-14.607,2.23-25.103,15.22-24.206,29.958l11.304,188.512c0,0-32.8-22.72-61.423-22.392c-28.712,0.34-53.223,23.758-36.408,53.18
          c45.33,79.343,168.111,98.662,259.601,98.662c91.468,0,196.056-19.319,241.408-98.662
          C523.321,313.488,498.787,290.069,470.098,289.729z" style="fill: rgb(75, 75, 75);"></path>
      </g>
      </svg>`
    },
    award: {
      x: 0,
      y: 150,
      width: 600,
      height: 443.4,
      svg: `<svg version="1.1" id="_x36_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 800 590.9" style="enable-background:new 0 0 800 590.9;" xml:space="preserve">
      <style type="text/css">
        .st0{fill:#EA9657;}
      </style>
      <g>
        <g>
          <g>
            <path class="st0" d="M707,363.1c-10.2,1.2-0.1-12.4,21.3-20.6c21.4-8.1,39.2-42.2,20.9-64.7c-15.8-1-25.7,17.5-30.3,24
              c-2,2.9,0,0,3.3-6.8c11.9-92.2-49-86.5-62.7-76.7c-14.7,10.6-10.9,12.7-21.5,15.2l2.5,3.2c-7.4,0.1-9.9-8.9-14.8-7.2
              c-4.9,1.7-2.4,8.2,2.5,10.6c8.2,4,18.7-1.3,26.1-7.6c2.6-2.2,6.7-5.3,10.1-6c39.2-8.3,49.4,18.8,50.9,50.4
              c-2.3-9-2.2-38.1-24.8-47c-13.3-5.2-26-1.1-29.4,1.5c33.5,9.8,18.3,71.9,18.3,71.9l-0.1-11.3c-0.1-7.9-4.5-26.9-15.9-10
              c-4,5.9-3.2,15.9-4.1,44.1c-0.9,28.3-30,60.2-26.7,48.9c3.3-11.3,0.8-31.7-16.1-27c-19.1,18.3-19.9,45.4-17.6,51.1
              c2.3,5.6-1,18.1-0.9,23.8c0.1,5.7-4.5-1.1-5.8-11.3c-0.9-7.2-12.6-13.5-17.1-10c-11.2,11.4-1.8,40.6-20.4,58.5
              c-19.1,18.4-58.2,58.9-85.8,76.5c78.7-17.3,139.1-60.1,182.6-72.4c57.5-16.4,55.1-34.4,53.9-38.9c-1.5-5.9-21.6-10-30.6-3.1
              c-13.7,10.5-17-4.4,3.3-11.3c20.3-7,59.8-16.4,68.5-49.3C735.2,352.7,717.2,361.9,707,363.1z M689.8,389.6
              c-5.3,2-10.8,3.7-16.3,5c-2.8,0.7-5.6,1.3-8.4,1.8c-2.8,0.5-5.6,0.9-8.6,1.2l0-0.3c-5.2,7.6-10.8,15-16.8,22.1
              c-4.4,5.3-9.1,10.3-14,15.1c-2.5,2.4-5,4.7-7.6,7c-1.3,1.1-2.6,2.2-4,3.3c-1.3,1.1-2.7,2.2-4,3.2c-0.5,0.4-1,0.8-1.6,1.2
              c1.3,0,2.6-0.1,3.8-0.2c4.8-0.3,9.6-1,14.3-1.9c9.5-1.9,18.8-4.9,27.6-9.2l0.4,0.7c-8.4,5.2-17.5,9.3-27,12.3
              c-4.8,1.5-9.6,2.7-14.6,3.5c-2.5,0.4-5,0.8-7.5,1c-1.3,0.1-2.5,0.2-3.8,0.3c-0.4,0-0.9,0-1.3,0.1c-7.1,6-14,12.2-20.7,18.7
              c-20.1,19.6-60.5,37.6-54.6,34.3c6.7-3.6,28.2-20.5,33.9-24.3c7.5-5.1,12.2-8.8,16.9-13.8c7.1-7.5,14.6-14.6,22.3-21.4l0-0.4
              c0.1,0,0.3,0,0.4,0c2.4-2.1,4.8-4.1,7.2-6.2c0.4-0.3,0.7-0.6,1-0.9c0-0.6,0.1-1.3,0.1-1.9c0.2-2.6,0.8-5.1,1.3-7.7
              c0.5-2.5,1-5.1,1.6-7.6c0.6-2.5,1.3-5,1.9-7.6c1.4-5,3-10,4.8-14.8c1.8-4.9,3.8-9.7,6.4-14.2l0.7,0.3c-1.7,4.9-3.1,9.8-4.5,14.7
              c-1.3,5-2.6,9.9-3.7,14.9c-0.6,2.5-1.1,5-1.6,7.5c-0.5,2.5-1,5-1.5,7.5c-0.3,1.6-0.6,3.3-0.9,4.9c0.7-0.6,1.3-1.1,2-1.7
              c2.5-2.2,4.9-4.5,7.3-6.8c4.8-4.6,9.4-9.5,13.9-14.4c8.9-10,17.2-20.6,24.7-31.7c1.3-1.9,2.6-3.9,3.8-5.9c1-4,2-8,2.9-12
              c1.1-4.9,2.1-9.9,3.1-14.9c1.8-10,3.3-20,4.2-30.1l0.8,0c-0.4,10.2-1.5,20.3-2.9,30.4c-0.7,5-1.5,10.1-2.4,15.1
              c-0.2,1.2-0.4,2.3-0.6,3.5c4.1-6.8,7.8-13.9,11.3-21.1c5.8-12.1,10.7-24.7,13.8-37.8c1.6-6.5,2.7-13.2,3.2-19.9
              c0.5-6.7,0.3-13.5-0.9-20.1l0.7-0.1c1.5,6.7,2,13.5,1.8,20.3c-0.2,6.8-1.1,13.6-2.4,20.3c-2.7,13.4-7.2,26.4-12.6,38.9
              c-0.1,0.2-0.1,0.3-0.2,0.5c0.1-0.1,0.3-0.2,0.4-0.2c2.3-1.3,4.5-2.8,6.7-4.2c4.4-3,8.6-6.1,12.8-9.4c2.1-1.6,4.1-3.3,6.1-5.1
              c2-1.7,3.9-3.5,5.8-5.4c3.8-3.7,7.3-7.6,10.5-11.9l0.6,0.4c-2.5,4.8-5.7,9.2-9.2,13.3c-1.8,2-3.6,4-5.5,6
              c-1.9,1.9-3.9,3.8-5.9,5.6c-2,1.8-4.1,3.5-6.2,5.2c-2.1,1.7-4.3,3.3-6.5,4.9c-2.2,1.5-4.5,3-6.8,4.5c-1.2,0.7-2.3,1.4-3.6,2
              c-0.5,0.2-1.1,0.4-1.7,0.5c-4.8,10.2-10.3,20.2-16.3,29.7c-1.4,2.3-2.9,4.5-4.3,6.7c1.7-0.1,3.4-0.3,5-0.5
              c2.8-0.3,5.5-0.7,8.2-1.2c5.5-1,10.9-2.3,16.2-4c10.7-3.3,21-8,30.3-14.2l0.4,0.6C710.7,380.3,700.5,385.6,689.8,389.6z"></path>
            <path class="st0" d="M728,265.8c2.9-21.3,8.6-22-6.8-41.4c-15.4-19.4-12.8-37.4-9.1-40.5c32.7,2.7,43.3,38.8,34.7,60.7
              c10.6-4.8,11.2-11.6,12.6-28.5c1.4-16.9,24-29.8,36.6-31c0.7,46.6-11.1,66-26.5,73.8C754,266.8,728,265.8,728,265.8z"></path>
            <path class="st0" d="M355.4,588c35.3-10.8,154.2-93.5,173.8-118.9c36.8-47.8,1.1-38-13.9-19.9C500.3,467.2,418.2,545.9,355.4,588
              z"></path>
            <path class="st0" d="M451.9,517c8.4-23.5,1.6-33.4,11.3-41.9c15.4-13.5,18.6,4.3,18.6,4.3l-3,16.9c0,0,10.1-22.1,11.4-40.4
              c1.3-18.3,20.3-26.1,20.3-26.1s10.1,11.2,7.3,29.6C517.7,459.5,493.6,510.2,451.9,517z"></path>
          </g>
          <path class="st0" d="M632.3,37.8c8.4-6.1-2.1-16.1-8.2-10.9c-4.9,4.1-17.8-4.9-4.7-11.7c13-6.9,42.9,2.4,45.5,12.8
            c-2.7,5.4-4.2,9.9,16.6,18.4c20.9,8.5,33.1,25.4,33.1,25.4s-25.1-12.3-40.3-6.7s-2.1,25.9,9.8,32.6c11.6,6.5,25.7,7.8,38.5,26.4
            c-10.8-15-36.3-15.9-46.3-13.5c-10.4,2.5,2.3,27.4,34.4,36.9c32.1,9.5,32.8,28.8,34.5,49.4c28.2-26,24.6-50.2,25.7-63.7
            c1.1-13.5-3-18.4-16.2-10.4c5.2-7.5,6.7-26.7,3.2-38.3c-3.6-11.6-8.4-8.6-15.6,10.1c-5.5-16.3-16.5-47.9-56.2-75
            C646.3-7.6,610.2,3,605.4,19.7C600.6,36.3,623.8,43.9,632.3,37.8z M750.6,170.9c-0.6-8.5-1.6-16.2-3-23.1v0.5
            c0,0-0.8-6.8-12.8-10.6c-8-2.5-13.6-5.3-30.2-11.3c-3.7-1-12.8-1.7-14.3-3c0,0,15.8-1.5,23.4,3c12.9,3.5,19.6,6.8,31.3,10.9
            c-11.8-40.6-38.4-52.2-55.5-61.4C754.4,92.5,752.9,161.8,750.6,170.9z"></path>
        </g>
        <g>
          <g>
            <path class="st0" d="M245.4,460.1c-18.5-17.9-9.2-47.1-20.4-58.5c-4.5-3.4-16.2,2.8-17.1,10c-1.2,10.2-5.8,16.9-5.8,11.3
              c0.1-5.7-3.2-18.1-0.9-23.8c2.3-5.6,1.4-32.8-17.6-51.1c-16.9-4.7-19.4,15.7-16.1,27c3.3,11.3-25.8-20.6-26.7-48.9
              c-0.9-28.3-0.1-38.2-4.1-44.1c-11.4-16.9-15.9,2.1-15.9,10l-0.1,11.3c0,0-15.2-62.1,18.3-71.9c-3.4-2.6-16.1-6.7-29.4-1.5
              c-22.7,8.9-22.5,38-24.8,47c1.4-31.7,11.7-58.7,50.9-50.4c3.4,0.7,7.5,3.8,10.1,6c7.4,6.3,17.9,11.6,26.1,7.6
              c4.9-2.4,7.4-8.9,2.5-10.6c-4.9-1.7-7.4,7.3-14.8,7.2l2.5-3.2c-10.6-2.5-6.8-4.7-21.5-15.2c-13.7-9.8-74.6-15.5-62.7,76.7
              c3.3,6.8,5.3,9.7,3.3,6.8c-4.6-6.5-14.5-25-30.3-24c-18.3,22.4-0.5,56.5,20.9,64.7c21.4,8.1,31.5,21.8,21.3,20.6
              c-10.2-1.2-28.2-10.4-39.6-1.5c8.7,32.9,48.2,42.3,68.5,49.3s17,21.8,3.3,11.3c-9-6.9-29-2.8-30.6,3.1
              c-1.2,4.5-3.6,22.6,53.9,38.9c43.4,12.4,103.9,55.1,182.6,72.4C303.5,519,264.5,478.5,245.4,460.1z M220.1,474.4
              c-6.7-6.5-13.6-12.7-20.7-18.7c-0.4,0-0.8,0-1.3-0.1c-1.3-0.1-2.5-0.2-3.8-0.3c-2.5-0.3-5-0.6-7.5-1c-5-0.9-9.8-2-14.6-3.5
              c-9.5-2.9-18.6-7.1-27-12.3l0.4-0.7c8.8,4.3,18.1,7.3,27.6,9.2c4.7,0.9,9.5,1.6,14.3,1.9c1.3,0.1,2.6,0.1,3.8,0.2
              c-0.5-0.4-1-0.8-1.6-1.2c-1.3-1-2.7-2.1-4-3.2c-1.3-1.1-2.7-2.2-4-3.3c-2.6-2.3-5.1-4.6-7.6-7c-4.9-4.8-9.6-9.9-14-15.1
              c-6-7.1-11.5-14.5-16.8-22.1l0,0.3c-3-0.3-5.8-0.7-8.6-1.2c-2.8-0.5-5.6-1.1-8.4-1.8c-5.6-1.3-11-3-16.3-5
              c-10.7-4-20.8-9.3-29.9-16.1l0.4-0.6c9.4,6.2,19.7,10.9,30.3,14.2c5.3,1.7,10.8,3,16.2,4c2.7,0.5,5.5,0.9,8.2,1.2
              c1.7,0.2,3.3,0.4,5,0.5c-1.5-2.2-2.9-4.4-4.3-6.7c-6-9.6-11.5-19.5-16.3-29.7c-0.6-0.1-1.2-0.2-1.7-0.5c-1.3-0.6-2.4-1.3-3.6-2
              c-2.3-1.4-4.6-2.9-6.8-4.5c-2.2-1.5-4.4-3.2-6.5-4.9c-2.1-1.7-4.2-3.4-6.2-5.2c-2-1.8-4-3.6-5.9-5.6c-1.9-1.9-3.8-3.9-5.5-6
              c-3.5-4.1-6.8-8.5-9.3-13.3l0.6-0.4c3.2,4.3,6.7,8.2,10.5,11.9c1.9,1.9,3.8,3.6,5.8,5.4c2,1.8,4,3.5,6.1,5.1
              c4.1,3.3,8.4,6.4,12.8,9.4c2.2,1.5,4.4,2.9,6.7,4.2c0.1,0.1,0.3,0.2,0.4,0.2c-0.1-0.2-0.1-0.3-0.2-0.5
              c-5.5-12.5-9.9-25.5-12.6-38.9c-1.4-6.7-2.2-13.5-2.4-20.3c-0.2-6.8,0.3-13.7,1.8-20.3l0.7,0.1c-1.2,6.6-1.4,13.4-0.9,20.1
              c0.5,6.7,1.6,13.3,3.2,19.9c3.1,13.1,8,25.7,13.8,37.8c3.4,7.2,7.2,14.2,11.3,21.1c-0.2-1.2-0.4-2.3-0.6-3.5
              c-0.9-5-1.7-10-2.4-15.1c-1.4-10.1-2.5-20.2-2.9-30.4l0.8,0c0.9,10.1,2.3,20.1,4.2,30.1c0.9,5,1.9,9.9,3.1,14.9
              c0.9,4,1.9,8,2.9,12c1.3,2,2.5,3.9,3.8,5.9c7.5,11.1,15.7,21.8,24.7,31.7c4.5,5,9.1,9.8,13.9,14.4c2.4,2.3,4.8,4.6,7.3,6.8
              c0.6,0.6,1.3,1.1,2,1.7c-0.3-1.6-0.6-3.3-0.9-4.9c-0.5-2.5-1-5-1.5-7.5c-0.5-2.5-1-5-1.6-7.5c-1.1-5-2.4-10-3.7-14.9
              c-1.4-4.9-2.8-9.9-4.5-14.7l0.7-0.3c2.5,4.6,4.5,9.4,6.4,14.2c1.8,4.9,3.4,9.8,4.8,14.8c0.7,2.5,1.3,5,1.9,7.6
              c0.6,2.5,1.1,5.1,1.6,7.6c0.5,2.6,1.1,5.1,1.3,7.7c0,0.6,0.1,1.3,0.1,1.9c0.3,0.3,0.7,0.6,1,0.9c2.4,2,4.8,4.1,7.2,6.2
              c0.1,0,0.3,0,0.4,0l0,0.4c7.7,6.8,15.2,13.9,22.3,21.4c4.7,5,9.4,8.7,16.9,13.8c5.6,3.8,27.1,20.7,33.9,24.3
              C280.7,512,240.2,494,220.1,474.4z"></path>
            <path class="st0" d="M72,265.8c-2.9-21.3-8.6-22,6.8-41.4c15.4-19.4,12.8-37.4,9.1-40.5c-32.7,2.7-43.3,38.8-34.7,60.7
              c-10.6-4.8-11.2-11.6-12.6-28.5c-1.4-16.9-24-29.8-36.6-31c-0.7,46.6,11.1,66,26.5,73.8C46,266.8,72,265.8,72,265.8z"></path>
            <path class="st0" d="M444.6,588c-35.3-10.8-154.3-93.5-173.8-118.9c-36.8-47.8-1.1-38,13.9-19.9
              C299.7,467.2,381.8,545.9,444.6,588z"></path>
            <path class="st0" d="M348.1,517c-8.4-23.5-1.6-33.4-11.3-41.9c-15.4-13.5-18.6,4.3-18.6,4.3l3,16.9c0,0-10.1-22.1-11.4-40.4
              c-1.3-18.3-20.3-26.1-20.3-26.1s-10.1,11.2-7.3,29.6C282.3,459.5,306.4,510.2,348.1,517z"></path>
          </g>
          <path class="st0" d="M194.6,19.7C189.8,3,153.7-7.6,114,19.5s-50.7,58.7-56.2,75c-7.2-18.7-12-21.7-15.6-10.1
            c-3.6,11.6-2,30.8,3.2,38.3c-13.1-8-17.3-3.1-16.2,10.4c1.1,13.5-2.6,37.7,25.7,63.7c1.7-20.6,2.4-39.9,34.5-49.4
            c32.1-9.5,44.8-34.3,34.4-36.9c-10-2.4-35.5-1.5-46.3,13.5c12.8-18.6,26.9-20,38.5-26.4c11.9-6.7,25-27,9.8-32.6
            s-40.3,6.7-40.3,6.7s12.2-16.9,33.1-25.4c20.9-8.5,19.4-12.9,16.6-18.4c2.5-10.4,32.4-19.7,45.5-12.8c13,6.9,0.2,15.9-4.7,11.7
            c-6.1-5.2-16.6,4.8-8.2,10.9C176.2,43.9,199.4,36.3,194.6,19.7z M110.4,75.9C93.3,85.1,66.8,96.7,55,137.3
            c11.7-4.1,18.5-7.4,31.3-10.9c7.5-4.5,23.4-3,23.4-3c-1.5,1.4-10.6,2-14.3,3c-16.6,6-22.1,8.8-30.2,11.3
            c-12.1,3.8-12.8,10.6-12.8,10.6v-0.5c-1.4,6.9-2.5,14.6-3,23.1C47.1,161.8,45.6,92.5,110.4,75.9z"></path>
        </g>
      </g>
      </svg>`
    },
    cat: {
      x: 0,
      y: 0,
      width: 666,
      height: 666,
      svg: `<svg
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 666.66669 666.66669"
      height="666.66669"
      width="666.66669"
      xml:space="preserve"
      id="svg2"
      version="1.1"><metadata
        id="metadata8"><rdf:RDF><cc:Work
            rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
              rdf:resource="http://purl.org/dc/dcmitype/StillImage" /></cc:Work></rdf:RDF></metadata><defs
        id="defs6"><clipPath
          id="clipPath20"
          clipPathUnits="userSpaceOnUse">
          <path
            id="path18"
            d="M 0,500 H 500 V 0 H 0 Z" /></clipPath></defs><g
        transform="matrix(1.3333333,0,0,-1.3333333,0,666.66667)"
        id="g10">
        <path
          id="path12"
          style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:none"
          d="M 0,0 H 500 V 500 H 0 Z" /><g
          id="g14"><g
            clip-path="url(#clipPath20)"
            id="g16"><g
              transform="translate(110.5986,268.1956)"
              id="g22">
              
              <path
                id="path24"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 14.099,-37.104 28.199,-62.334 14.099,-25.231 11.131,-23.746 7.42,-51.203 -3.71,-27.457 -3.339,-31.909 -8.904,-43.04 0,0 -18.181,-1.856 -14.842,-18.552" /></g><g
              transform="translate(180.0741,330.7124)"
              id="g26">
              <path
                id="path28"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 -1.669,-5.007 -14.19,-9.455 -12.522,-4.456 -29.779,8.345 -50.095,18.639 -7.853,3.981 -12.589,7.59 -15.571,11.504 -2.372,3.101 -3.635,6.405 -4.473,10.234 -0.839,3.804 -1.271,8.142 -1.957,13.327 -2.254,16.978 0,25.89 0,25.89" /></g><g
              transform="translate(178.1272,347.3874)"
              id="g30"><path
                id="path32"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -2.258,0.377 -4.267,0.21 -7.421,0.025 -3.154,-0.186 -5.936,0.742 -5.936,0.742 0,0 -1.115,-0.498 0.686,-2.298 1.8,-1.801 3.071,-3.177 3.918,-5.189 0.847,-2.013 3.071,-2.013 3.071,-2.013 0,0 0.847,-1.27 2.436,1.377 1.588,2.648 3.711,4.977 4.341,5.825 C 1.726,-0.684 1.253,-0.209 0,0 Z" /></g><g
              transform="translate(172.8687,342.3613)"
              id="g34"><path
                id="path36"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 0.741,-1.589 -0.424,-3.706" /></g><g
              transform="translate(164.5006,347.1826)"
              id="g38"><path
                id="path40"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 2.755,-1.927 4.485,-2.35 1.73,-0.424 2.153,-1.695 1.306,-2.33" /></g><g
              transform="translate(185.9649,346.2443)"
              id="g42"><path
                id="path44"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 4.377,-6.072 -1.977,-11.155 -6.354,-5.083 -13.274,-0.847 -13.274,-0.847 -9.529,-4.871 -14.824,1.412 -14.824,1.412 0,0 -4.448,4.603 -1.2,11.021" /></g><g
              transform="translate(170.7142,334.2424)"
              id="g46"><path
                id="path48"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 0.865,-0.194 1.731,3.777" /></g><g
              transform="translate(167.1855,331.0654)"
              id="g50"><path
                id="path52"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 3.106,-2.189 6.707,0" /></g><g
              transform="translate(159.9872,357.9666)"
              id="g54"><path
                id="path56"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -0.483,3.253 -1.355,9.7 -4.431,14.656 -1.449,2.347 -3.397,4.355 -6.023,5.533 -3.669,1.643 -7.142,1.245 -9.853,0.305 -3.338,-1.153 -5.532,-3.127 -5.532,-3.127" /></g><g
              transform="translate(196.1284,374.6224)"
              id="g58"><path
                id="path60"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 -2.11,1.677 -5.846,1.982 -1.889,0.153 -4.193,-0.042 -6.862,-0.991 -3.414,-1.22 -4.931,-4.304 -5.549,-7.421 -0.822,-4.101 -0.093,-8.252 -0.093,-8.252" /></g><g
              transform="translate(137.6213,377.596)"
              id="g62"><path
                id="path64"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -0.39,-0.203 -2.88,-8.76 5.913,-13.098 5.007,-2.473 10.52,0.384 13.584,5.085" /></g><g
              transform="translate(191.2256,376.4969)"
              id="g66"><path
                id="path68"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 3.141,-4.272 -0.778,-9.038 -3.918,-4.765 -11.863,-3.6 -12.868,-1.27" /></g>
                
                <g
              transform="translate(149.5329,378.1552)"
              id="g70">
              <path
                id="path72"
                style="fill:${color.eyeLeft};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c -2.784,1.247 -5.454,1.316 -7.765,0.867 0.854,-0.289 1.474,-1.088 1.474,-2.04 0,-1.194 -0.968,-2.162 -2.162,-2.162 -0.956,0 -1.758,0.625 -2.044,1.485 -0.07,-0.438 -0.118,-0.884 -0.118,-1.344 0,-4.685 3.795,-8.489 8.48,-8.489 3.88,0 7.15,2.601 8.158,6.151 C 4.575,-3.185 2.626,-1.178 0,0" /></g>
    
                <g
              transform="translate(149.5329,378.1552)"
              id="g74">
              <path
                id="path76"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -2.784,1.247 -5.454,1.316 -7.765,0.867 0.854,-0.289 1.474,-1.088 1.474,-2.04 0,-1.194 -0.968,-2.162 -2.162,-2.162 -0.956,0 -1.758,0.625 -2.044,1.485 -0.07,-0.438 -0.118,-0.884 -0.118,-1.344 0,-4.685 3.795,-8.489 8.48,-8.489 3.88,0 7.15,2.601 8.158,6.151 C 4.575,-3.185 2.626,-1.178 0,0 Z" /></g>
                <g
              transform="translate(190.2827,376.6048)"
              id="g78"><path
                id="path80"
                style="fill:${color.eyeRight};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c -1.889,0.152 -4.194,-0.042 -6.862,-0.991 -1.104,-0.395 -1.992,-0.999 -2.733,-1.721 0.042,0.003 0.081,0.012 0.123,0.012 0.988,0 1.788,-0.8 1.788,-1.787 0,-0.987 -0.8,-1.788 -1.788,-1.788 -0.848,0 -1.555,0.593 -1.738,1.386 -0.575,-1.098 -0.96,-2.306 -1.201,-3.524 1.338,-1.076 3.041,-1.719 4.897,-1.719 4.337,0 7.853,3.515 7.853,7.853 C 0.339,-1.491 0.22,-0.72 0,0" /></g><g
              transform="translate(190.2827,376.6048)"
              id="g82"><path
                id="path84"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -1.889,0.152 -4.194,-0.042 -6.862,-0.991 -1.104,-0.395 -1.992,-0.999 -2.733,-1.721 0.042,0.003 0.081,0.012 0.123,0.012 0.988,0 1.788,-0.8 1.788,-1.787 0,-0.987 -0.8,-1.788 -1.788,-1.788 -0.848,0 -1.555,0.593 -1.738,1.386 -0.575,-1.098 -0.96,-2.306 -1.201,-3.524 1.338,-1.076 3.041,-1.719 4.897,-1.719 4.337,0 7.853,3.515 7.853,7.853 C 0.339,-1.491 0.22,-0.72 0,0 Z" /></g><g
              transform="translate(108.1645,331.0654)"
              id="g86"><path
                id="path88"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 19.062,21.977 50.196,13.777" /></g><g
              transform="translate(182.2937,344.8425)"
              id="g90"><path
                id="path92"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 21.039,7.264 47.725,-16.887" /></g><g
              transform="translate(190.6217,347.6562)"
              id="g94"><path
                id="path96"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 4.522,2.941 7.052,8.9" /></g><g
              transform="translate(112.0015,321.6634)"
              id="g98"><path
                id="path100"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 12.99,24.594 48.855,20.164" /></g><g
              transform="translate(121.2959,317.4398)"
              id="g102"><path
                id="path104"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 15.864,24.639 39.56,20.58" /></g><g
              transform="translate(180.0752,341.5847)"
              id="g106"><path
                id="path108"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 25.375,6.636 48.673,-22.592" /></g><g
              transform="translate(182.2937,338.4711)"
              id="g110"><path
                id="path112"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 20.897,0.996 32.476,-21.031" /></g><g
              transform="translate(141.0695,353.8069)"
              id="g114"><path
                id="path116"
                style="fill:${color.patternFace};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c -0.373,0.119 -9.404,3.101 -19.774,-0.008 -8.175,-2.449 -14.453,-5.905 -21.078,-2.398 -2.372,3.101 -3.634,6.405 -4.473,10.234 2.762,-2.686 7.167,-5.405 13.479,-5.075 12.072,0.627 13.131,2.822 20.968,1.407 C -3.287,2.787 -0.186,0.161 0,0" /></g><g
              transform="translate(141.0695,353.8069)"
              id="g118"><path
                id="path120"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -0.373,0.119 -9.404,3.101 -19.774,-0.008 -8.175,-2.449 -14.453,-5.905 -21.078,-2.398 -2.372,3.101 -3.634,6.405 -4.473,10.234 2.762,-2.686 7.167,-5.405 13.479,-5.075 12.072,0.627 13.131,2.822 20.968,1.407 C -3.287,2.787 -0.186,0.161 0,0 Z" /></g><g
              transform="translate(199.1021,359.7796)"
              id="g122"><path
                id="path124"
                style="fill:${color.patternFace};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c -0.025,-0.068 -0.051,-0.127 -0.076,-0.195 -0.356,-0.889 -0.729,-1.737 -1.11,-2.524 -2.101,0.465 -5.219,0.516 -9.836,-0.5 0,0 4.761,3.727 11.022,3.219" /></g><g
              transform="translate(199.1021,359.7796)"
              id="g126"><path
                id="path128"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -0.025,-0.068 -0.051,-0.127 -0.076,-0.195 -0.356,-0.889 -0.729,-1.737 -1.11,-2.524 -2.101,0.465 -5.219,0.516 -9.836,-0.5 0,0 4.761,3.727 11.022,3.219 z" /></g><g
              transform="translate(154.2855,390.1065)"
              id="g130"><path
                id="path132"
                style="fill:${color.patternFace};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c 0,0 3.581,-6.303 2.804,-13.455 0,0 5.414,8.37 -2.804,13.455" /></g><g
              transform="translate(154.2855,390.1065)"
              id="g134"><path
                id="path136"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 3.581,-6.303 2.804,-13.455 0,0 5.414,8.37 -2.804,13.455 z" /></g><g
              transform="translate(179.8568,387.6159)"
              id="g138"><path
                id="path140"
                style="fill:${color.patternFace};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c 0,0 2.073,-5.41 0.601,-10.967 0,0 5.281,5.964 -0.601,10.967" /></g><g
              transform="translate(179.8568,387.6159)"
              id="g142"><path
                id="path144"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 2.073,-5.41 0.601,-10.967 0,0 5.281,5.964 -0.601,10.967 z" /></g><g
              transform="translate(155.164,408.2035)"
              id="g146"><path
                id="path148"
                style="fill:${color.patternFace};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c 0,0 8.937,-11.785 8.809,-27.632 0,0 5.939,17.594 -8.809,27.632" /></g><g
              transform="translate(155.164,408.2035)"
              id="g150"><path
                id="path152"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 8.937,-11.785 8.809,-27.632 0,0 5.939,17.594 -8.809,27.632 z" /></g><g
              transform="translate(164.0445,405.1836)"
              id="g154"><path
                id="path156"
                style="fill:${color.patternFace};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c 0,0 7.113,-10.895 6.02,-24.793 0,0 6.301,15.071 -6.02,24.793" /></g><g
              transform="translate(164.0445,405.1836)"
              id="g158"><path
                id="path160"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 7.113,-10.895 6.02,-24.793 0,0 6.301,15.071 -6.02,24.793 z" /></g><g
              transform="translate(167.4776,411.4797)"
              id="g162"><path
                id="path164"
                style="fill:${color.patternFace};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c 0,0 7.601,-11.074 7.137,-25.582 0,0 5.617,15.925 -7.137,25.582" /></g><g
              transform="translate(167.4776,411.4797)"
              id="g166"><path
                id="path168"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 7.601,-11.074 7.137,-25.582 0,0 5.617,15.925 -7.137,25.582 z" /></g><g
              transform="translate(99.0996,412.1614)"
              id="g170"><path
                id="path172"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 -1.287,-4.778 -0.395,-9.579 0.747,-4.026 4.8,-4.377 4.236,-7.06 -0.565,-2.683 -6.213,-6.214 -4.942,-12.143" /></g><g
              transform="translate(103.7937,433.3705)"
              id="g174"><path
                id="path176"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 -6.078,-12.486 2.676,-25.167 0,0 0.848,-1.809 0,-4.35 -0.847,-2.542 4.66,-3.954 4.942,-7.766 0.283,-3.812 -0.847,-5.981 -0.847,-5.981" /></g><g
              transform="translate(135.0883,421.0654)"
              id="g178"><path
                id="path180"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 2.869,-4.83 4.422,-9.327" /></g><g
              transform="translate(112.9652,437.4586)"
              id="g182"><path
                id="path184"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 11.206,1.694 23.465,-26.969" /></g><g
              transform="translate(116.3014,398.9086)"
              id="g186"><path
                id="path188"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.743,-0.873 1.222,-1.966 1.36,-3.104" /></g><g
              transform="translate(118.2146,400.2092)"
              id="g190"><path
                id="path192"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.146,-0.498 2.094,-1.436 2.606,-2.576" /></g><g
              transform="translate(119.8386,401.5496)"
              id="g194"><path
                id="path196"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.35,-0.444 2.584,-1.235 3.551,-2.276" /></g><g
              transform="translate(122.0923,403.4955)"
              id="g198"><path
                id="path200"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.638,-0.298 3.179,-1.106 4.355,-2.284" /></g><g
              transform="translate(124.5684,405.1301)"
              id="g202"><path
                id="path204"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 2.344,0.107 4.714,-0.47 6.747,-1.641" /></g><g
              transform="translate(128.4342,407.1246)"
              id="g206"><path
                id="path208"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 2.549,0.035 5.103,-0.702 7.241,-2.089" /></g><g
              transform="translate(131.6852,409.3565)"
              id="g210"><path
                id="path212"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.193,-0.092 2.37,-0.392 3.462,-0.88" /></g><g
              transform="translate(112.5459,433.6687)"
              id="g214"><path
                id="path216"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.661,-0.312 3.288,-0.805 4.842,-1.468" /></g><g
              transform="translate(113.6378,431.2635)"
              id="g218"><path
                id="path220"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.971,-0.532 3.813,-1.537 5.327,-2.906" /></g><g
              transform="translate(114.6785,428.041)"
              id="g222"><path
                id="path224"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.686,-0.747 3.234,-1.806 4.542,-3.107" /></g><g
              transform="translate(114.9889,424.8293)"
              id="g226"><path
                id="path228"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.5,-0.895 3.031,-1.737 4.589,-2.525" /></g><g
              transform="translate(112.8286,421.5801)"
              id="g230"><path
                id="path232"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 2.194,-0.129 4.362,-0.691 6.343,-1.644" /></g><g
              transform="translate(114.4908,418.6655)"
              id="g234"><path
                id="path236"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.145,-0.181 2.291,-0.362 3.436,-0.543 4.282,-0.677 5.173,-0.831 5.829,-1.382" /></g><g
              transform="translate(113.392,415.5312)"
              id="g238"><path
                id="path240"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 2.316,0.176 4.657,0.028 6.933,-0.439" /></g><g
              transform="translate(114.8046,412.5749)"
              id="g242"><path
                id="path244"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 2.444,0.281 4.945,0.054 7.299,-0.661" /></g><g
              transform="translate(116.2127,409.9256)"
              id="g246"><path
                id="path248"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 2.198,0.266 4.433,0.234 6.623,-0.094" /></g><g
              transform="translate(117.3492,407.1977)"
              id="g250"><path
                id="path252"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.783,0.272 3.566,0.545 5.349,0.817" /></g><g
              transform="translate(117.9093,404.5546)"
              id="g254"><path
                id="path256"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.584,0.709 3.352,1.002 5.08,0.842" /></g><g
              transform="translate(175.8465,414.5844)"
              id="g258"><path
                id="path260"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 3.988,-1.283 9.152,6.481 5.163,7.764 19,19.505 26.151,20.773" /></g><g
              transform="translate(194.7192,414.5052)"
              id="g262"><path
                id="path264"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 3.53,0.958 5.789,9.061 2.259,8.103 5.224,13.186 6.636,14.881" /></g><g
              transform="translate(184.5805,416.0802)"
              id="g266"><path
                id="path268"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.548,0.744 3.211,1.249 4.911,1.49" /></g><g
              transform="translate(186.6753,418.9478)"
              id="g270"><path
                id="path272"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.392,0.447 2.801,0.841 4.222,1.183" /></g><g
              transform="translate(188.9324,421.631)"
              id="g274"><path
                id="path276"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.083,0.186 2.166,0.371 3.249,0.557" /></g><g
              transform="translate(190.8895,424.2701)"
              id="g278"><path
                id="path280"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.185,0.244 2.369,0.487 3.554,0.731" /></g><g
              transform="translate(192.8849,426.4553)"
              id="g282"><path
                id="path284"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.773,-0.093 1.572,0.044 2.27,0.388" /></g><g
              transform="translate(195.0045,428.4032)"
              id="g286"><path
                id="path288"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.704,0.109 1.407,0.219 2.111,0.328" /></g><g
              transform="translate(185.7231,414.2333)"
              id="g290"><path
                id="path292"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.979,0.579 2.071,0.966 3.196,1.133" /></g><g
              transform="translate(187.1021,412.5632)"
              id="g294"><path
                id="path296"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.411,0.241 2.822,0.482 4.233,0.723" /></g><g
              transform="translate(189.9147,411.6342)"
              id="g298"><path
                id="path300"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.008,0.257 2.077,0.274 3.093,0.05" /></g><g
              transform="translate(191.3364,410.1427)"
              id="g302"><path
                id="path304"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.24,0.114 2.505,-0.045 3.679,-0.462" /></g><g
              transform="translate(192.5956,407.7399)"
              id="g306"><path
                id="path308"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.31,-0.11 2.604,-0.417 3.823,-0.908" /></g><g
              transform="translate(194.2976,405.1104)"
              id="g310"><path
                id="path312"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.788,0.113 1.624,-0.207 2.135,-0.818" /></g><g
              transform="translate(101.2566,367.4703)"
              id="g314"><path
                id="path316"
                style="fill:${color.patternFace};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c 0,0 6.161,-4.086 14.21,1.58 8.05,5.666 15.88,4.882 15.88,4.882 0,0 -7.999,-2.085 -14.114,-7.556 C 9.861,-6.565 2.7,-5.932 0,0" /></g><g
              transform="translate(101.2566,367.4703)"
              id="g318"><path
                id="path320"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 6.161,-4.086 14.21,1.58 8.05,5.666 15.88,4.882 15.88,4.882 0,0 -7.999,-2.085 -14.114,-7.556 C 9.861,-6.565 2.7,-5.932 0,0 Z" /></g><g
              transform="translate(307.2545,127.9512)"
              id="g322"><path
                id="path324"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 5.083,-9.884 17.226,-16.379 12.143,-6.495 11.706,-16.277 11.706,-16.277" /></g><g
              transform="translate(182.5819,106.4269)"
              id="g326"><path
                id="path328"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 10.584,12.205 23.857,2.321" /></g><g
              transform="translate(199.3788,103.9475)"
              id="g330"><path
                id="path332"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 -8.365,-6.772 -1.217,-14.964" /></g><g
              transform="translate(212.369,306.7115)"
              id="g334"><path
                id="path336"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 1.694,-22.4 -6.21,-49.044 -0.44,-1.499 -0.839,-2.948 -1.178,-4.346 -1.872,-7.523 -2.406,-13.75 -2.533,-19.655 -0.084,-3.914 0.009,-7.684 0.034,-11.589 0.009,-3.923 -0.051,-7.973 -0.466,-12.454 -0.5,-5.363 -1.508,-11.344 -3.482,-18.418 -8.192,-29.364 -27.084,-76.247 -27.084,-76.247" /></g><g
              transform="translate(190.8875,321.0854)"
              id="g338"><path
                id="path340"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.875,-1.422 3.75,-2.844 5.625,-4.266" /></g><g
              transform="translate(190.3605,316.8994)"
              id="g342"><path
                id="path344"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 2.043,-1.546 3.664,-3.644 4.645,-6.012" /></g><g
              transform="translate(188.7315,311.3005)"
              id="g346"><path
                id="path348"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.733,-1.977 2.817,-4.513 3.048,-7.131" /></g><g
              transform="translate(185.8699,306.4372)"
              id="g350"><path
                id="path352"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.79,-3.338 1.294,-6.745 1.502,-10.169" /></g><g
              transform="translate(182.5945,300.2223)"
              id="g354"><path
                id="path356"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.249,-4.52 0.498,-9.04 0.747,-13.561" /></g><g
              transform="translate(179.0183,292.591)"
              id="g358"><path
                id="path360"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C -0.31,-3.865 -0.62,-7.73 -0.93,-11.594" /></g><g
              transform="translate(174.1708,286.6594)"
              id="g362"><path
                id="path364"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C -0.051,-4.068 -0.382,-8.132 -0.99,-12.154" /></g><g
              transform="translate(167.9545,280.4579)"
              id="g366"><path
                id="path368"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C -0.537,-3.455 -1.277,-6.879 -2.217,-10.247" /></g><g
              transform="translate(161.9926,273.3924)"
              id="g370"><path
                id="path372"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C -0.17,-2.825 -0.34,-5.65 -0.511,-8.475" /></g><g
              transform="translate(157.3389,268.2971)"
              id="g374"><path
                id="path376"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C -0.536,-3.641 -0.735,-7.331 -0.593,-11.008" /></g><g
              transform="translate(151.2328,261.2491)"
              id="g378"><path
                id="path380"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 0.528,-11.862" /></g><g
              transform="translate(146.9716,257.0316)"
              id="g382"><path
                id="path384"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.546,-2.612 0.885,-5.267 1.015,-7.932" /></g><g
              transform="translate(141.4483,258.4884)"
              id="g386"><path
                id="path388"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.767,-2.681 1.152,-5.471 1.14,-8.259" /></g><g
              transform="translate(137.4351,260.2306)"
              id="g390"><path
                id="path392"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.197,-1.871 1.813,-4.108 1.743,-6.329" /></g><g
              transform="translate(132.0752,264.1459)"
              id="g394"><path
                id="path396"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.109,-2.651 1.918,-5.428 2.405,-8.26" /></g><g
              transform="translate(127.3938,264.0841)"
              id="g398"><path
                id="path400"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.206,-1.825 1.802,-4.047 1.669,-6.23" /></g><g
              transform="translate(234.8366,300.222)"
              id="g402"><path
                id="path404"
                style="fill:${color.patternBack};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c -2.94,-15.665 -0.864,-26.271 -0.017,-50.831 0.839,-24.383 -25.433,-34.168 -25.831,-34.312 0.475,0.525 15.707,17.207 18.189,34.312 2.516,17.367 -4.642,27.101 -0.83,57.049 3.711,29.144 -6.227,37.387 -6.752,37.802 4.888,-1.627 9.988,-3.643 15.3,-6.176 C 3.312,25.492 2.203,11.725 0,0" /></g><g
              transform="translate(234.8366,300.222)"
              id="g406"><path
                id="path408"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -2.94,-15.665 -0.864,-26.271 -0.017,-50.831 0.839,-24.383 -25.433,-34.168 -25.831,-34.312 0.475,0.525 15.707,17.207 18.189,34.312 2.516,17.367 -4.642,27.101 -0.83,57.049 3.711,29.144 -6.227,37.387 -6.752,37.802 4.888,-1.627 9.988,-3.643 15.3,-6.176 C 3.312,25.492 2.203,11.725 0,0 Z" /></g><g
              transform="translate(277.1792,292.5888)"
              id="g410"><path
                id="path412"
                style="fill:${color.patternBack};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c -2.965,-20.324 -7.625,-23.721 -19.062,-60.998 -11.437,-37.276 -49.137,-38.971 -49.137,-38.971 22.874,9.319 35.582,24.569 40.242,47.443 4.659,22.874 8.472,15.25 14.826,50.408 2.346,12.996 0.931,23.213 -1.78,30.939 C -9.861,25.077 -4.66,20.841 0.703,16.029 1.051,10.692 0.763,5.253 0,0" /></g><g
              transform="translate(277.1792,292.5888)"
              id="g414"><path
                id="path416"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -2.965,-20.324 -7.625,-23.721 -19.062,-60.998 -11.437,-37.276 -49.137,-38.971 -49.137,-38.971 22.874,9.319 35.582,24.569 40.242,47.443 4.659,22.874 8.472,15.25 14.826,50.408 2.346,12.996 0.931,23.213 -1.78,30.939 C -9.861,25.077 -4.66,20.841 0.703,16.029 1.051,10.692 0.763,5.253 0,0 Z" /></g><g
              transform="translate(308.9913,263.6911)"
              id="g418"><path
                id="path420"
                style="fill:${color.patternBack};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c -0.796,-15.241 -7.227,-25.433 -10.277,-29.135 -5.582,-6.777 -10.945,-17.367 -27.889,-44.054 -16.944,-26.686 -52.526,-20.332 -52.526,-20.332 23.721,5.506 33.464,12.707 43.207,22.45 9.743,9.743 7.201,15.25 26.686,51.255 8.04,14.851 10.455,28.923 10.522,40.327 C -6.371,14.123 -2.965,7.193 0,0" /></g><g
              transform="translate(308.9913,263.6911)"
              id="g422"><path
                id="path424"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -0.796,-15.241 -7.227,-25.433 -10.277,-29.135 -5.582,-6.777 -10.945,-17.367 -27.889,-44.054 -16.944,-26.686 -52.526,-20.332 -52.526,-20.332 23.721,5.506 33.464,12.707 43.207,22.45 9.743,9.743 7.201,15.25 26.686,51.255 8.04,14.851 10.455,28.923 10.522,40.327 C -6.371,14.123 -2.965,7.193 0,0 Z" /></g><g
              transform="translate(426.4204,81.5195)"
              id="g426"><path
                id="path428"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -1.576,-8.26 -7.913,-15.495 -19.909,-19.875 h -0.008 c -3.796,-1.398 -8.159,-2.499 -13.115,-3.253 -2.948,-0.449 -6.1,-0.78 -9.472,-0.975 -2.185,-0.127 -4.456,-0.194 -6.819,-0.203 -3.203,-0.025 -6.575,0.068 -10.116,0.28 -1.491,0.084 -2.957,0.178 -4.38,0.262 -2.406,0.144 -4.719,0.28 -6.938,0.415 -5.1,0.314 -9.735,0.602 -13.937,0.873 -2.304,0.144 -4.473,0.28 -6.523,0.415 -5.32,0.348 -9.819,0.653 -13.598,0.924 -2.465,0.169 -4.625,0.322 -6.506,0.457 -1.389,0.102 -2.618,0.195 -3.719,0.28 -2.22,0.169 -4.245,1.067 -5.829,2.465 -1.576,1.406 -2.702,3.313 -3.134,5.498 -1.229,6.202 3.575,11.954 9.903,11.836 10.904,-0.195 27.576,-0.738 43.648,-2.246 27.11,-2.541 47.493,1.966 37.31,7.761 -6.803,1.457 -13.276,1.957 -18.875,2.55 -23.73,2.507 -38.217,6.311 -38.217,6.311 -4.448,-5.938 -21.146,-5.938 -21.146,-5.938 l -99.808,0.372 c -6.684,-4.456 -17.071,-0.745 -17.071,-0.745 0,0 -12.987,-4.821 -17.062,2.601 -4.084,7.421 1.482,14.842 1.482,14.842 -7.421,1.483 -11.132,8.532 -11.132,8.532 l -1.855,-7.794 c 0,0 -1.855,-6.676 -5.939,-14.843 -4.083,-8.159 -19.29,-3.711 -19.29,-3.711 -8.167,-3.711 -14.843,-0.364 -14.843,-0.364 -5.193,0 -7.049,4.82 -7.049,4.82 0,0 -10.022,0.746 -8.54,11.869 1.492,11.133 16.012,11.454 16.012,11.454 -0.821,21.35 -3.812,42.928 -7.37,62.261 -0.415,2.27 -0.83,4.549 -1.22,6.836 -0.449,2.525 -0.873,5.067 -1.271,7.625 -0.339,2.135 -0.652,4.278 -0.949,6.439 -0.085,0.61 -0.186,1.228 -0.305,1.838 -4.871,26.449 -36.234,52.509 -43.85,92.039 -7.795,40.445 12.242,58.253 14.842,85.338 2.593,27.084 9.277,33.396 9.277,33.396 0,0 0.364,25.594 12.615,27.822 12.242,2.228 23.374,-18.918 23.374,-18.918 19.663,4.448 21.146,0 30.422,3.711 9.277,3.71 8.532,-0.746 18.181,5.193 9.65,5.939 30.059,15.953 27.458,11.869 -2.601,-4.083 -7.422,-13.352 -8.532,-19.663 -1.118,-6.303 -5.193,-10.76 -5.193,-10.76 0,0 3.338,-4.083 1.856,-8.167 -1.492,-4.074 -2.601,-12.978 1.109,-22.628 3.669,-9.539 0.932,-15.334 -1.287,-20.841 -0.026,-0.068 -0.051,-0.127 -0.077,-0.195 -0.355,-0.889 -0.728,-1.736 -1.11,-2.524 -1.982,-4.169 -4.066,-6.863 -4.066,-6.863 7.862,-1.126 16.427,-2.838 25.721,-5.938 0,0 0.008,-0.009 0.025,-0.017 4.889,-1.627 9.989,-3.643 15.301,-6.176 8.565,-4.067 17.68,-9.455 27.372,-16.656 5.049,-3.745 10.251,-7.981 15.614,-12.793 1.855,-1.652 3.728,-3.38 5.617,-5.176 5.744,-5.448 10.793,-11.996 15.215,-19.24 3.906,-6.388 7.312,-13.318 10.277,-20.51 4.778,-11.59 8.387,-23.866 10.996,-35.676 1.195,-5.379 2.178,-10.657 2.966,-15.723 1.33,-8.422 2.118,-16.275 2.465,-23.061 0.22,-4.321 0.254,-8.201 0.135,-11.522 v -0.008 c -0.135,-3.347 -0.423,-6.125 -0.864,-8.201 -4.083,-19.291 -2.601,-30.423 -2.601,-30.423 2.686,-10.31 11.759,-15.893 23.502,-19.35 1.863,-0.55 3.803,-1.05 5.794,-1.499 5.261,-1.203 10.887,-2.093 16.605,-2.881 4.236,-0.584 8.515,-1.109 12.742,-1.652 h 0.008 c 7.066,-0.906 13.945,-1.872 20.138,-3.253 4.617,-1.042 8.845,-2.313 12.462,-3.973 C -7.43,22.366 -3.262,18.833 -1.406,13.775 -1,12.666 -0.652,11.564 -0.39,10.463 V 10.454 C 0.483,6.888 0.635,3.363 0,0 Z" /></g><g
              transform="translate(388.0898,95.2948)"
              id="g430"><path
                id="path432"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 16.309,0 22.129,-14.689 0,-15.975" /></g><g
              transform="translate(235.5256,139.8119)"
              id="g434"><path
                id="path436"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 -5.93,-9.602 12.708,-22.874 18.638,-13.273 28.804,-12.14 38.688,-20.473" /></g><g
              transform="translate(242.0208,157.0381)"
              id="g438"><path
                id="path440"
                style="fill:${color.patternLeg};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="M 0,0 C 0,0 34.963,19.702 55.067,-10.449 55.067,-10.449 41.512,32.758 0,0" /></g><g
              transform="translate(242.0208,157.0381)"
              id="g442"><path
                id="path444"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 34.963,19.702 55.067,-10.449 55.067,-10.449 41.512,32.758 0,0 Z" /></g><g
              transform="translate(240.6088,144.6127)"
              id="g446"><path
                id="path448"
                style="fill:${color.patternLeg};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="M 0,0 C 0,0 35.3,15.249 59.586,-11.578 59.586,-11.578 41.036,32.473 0,0" /></g><g
              transform="translate(240.6088,144.6127)"
              id="g450"><path
                id="path452"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 35.3,15.249 59.586,-11.578 59.586,-11.578 41.036,32.473 0,0 Z" /></g><g
              transform="translate(243.5043,131.0576)"
              id="g454"><path
                id="path456"
                style="fill:${color.patternLeg};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c 0,0 24.497,11.861 44.265,-3.106 19.768,-14.967 30.499,-16.329 30.499,-16.329 0,0 -14.403,-1.462 -33.323,9.269 C 22.52,0.565 19.839,3.671 0,0" /></g><g
              transform="translate(243.5043,131.0576)"
              id="g458"><path
                id="path460"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 24.497,11.861 44.265,-3.106 19.768,-14.967 30.499,-16.329 30.499,-16.329 0,0 -14.403,-1.462 -33.323,9.269 C 22.52,0.565 19.839,3.671 0,0 Z" /></g><g
              transform="translate(322.953,212.292)"
              id="g462"><path
                id="path464"
                style="fill:${color.patternBack};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c -3.719,-3.075 -7.93,-7.913 -11.463,-15.436 -8.471,-18.07 -26.262,-21.747 -26.262,-21.747 0,0 12.428,6.777 23.763,33.04 4.134,9.573 7.879,15.817 10.997,19.867 C -1.771,10.344 -0.788,5.066 0,0" /></g><g
              transform="translate(322.953,212.292)"
              id="g466"><path
                id="path468"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -3.719,-3.075 -7.93,-7.913 -11.463,-15.436 -8.471,-18.07 -26.262,-21.747 -26.262,-21.747 0,0 12.428,6.777 23.763,33.04 4.134,9.573 7.879,15.817 10.997,19.867 C -1.771,10.344 -0.788,5.066 0,0 Z" /></g><g
              transform="translate(325.5538,177.7096)"
              id="g470"><path
                id="path472"
                style="fill:${color.patternBack};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 v -0.008 c -3.262,-1.771 -7.108,-4.431 -10.107,-8.193 -6.498,-8.141 -15.25,-8.802 -15.25,-8.802 0,0 3.101,0.847 12.42,15.537 4.787,7.54 9.43,11.209 12.801,12.988 C 0.085,7.201 0.119,3.321 0,0" /></g><g
              transform="translate(325.5538,177.7096)"
              id="g474"><path
                id="path476"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 v -0.008 c -3.262,-1.771 -7.108,-4.431 -10.107,-8.193 -6.498,-8.141 -15.25,-8.802 -15.25,-8.802 0,0 3.101,0.847 12.42,15.537 4.787,7.54 9.43,11.209 12.801,12.988 C 0.085,7.201 0.119,3.321 0,0 Z" /></g><g
              transform="translate(187.8103,145.4919)"
              id="g478"><path
                id="path480"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.175,-0.13 0.119,-0.4 0.045,-0.605 -0.552,-2.264 -1.149,-3.923 -1.746,-5.581" /></g><g
              transform="translate(190.2622,140.319)"
              id="g482"><path
                id="path484"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C -0.33,-2.04 -0.556,-4.097 -0.676,-6.16" /></g><g
              transform="translate(193.1961,137.7715)"
              id="g486"><path
                id="path488"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.161,-2.328 0.191,-4.664 0.09,-6.995" /></g><g
              transform="translate(196.5979,133.7392)"
              id="g490"><path
                id="path492"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C -0.027,-2.613 0.118,-5.227 0.432,-7.821" /></g><g
              transform="translate(201.0469,131.8407)"
              id="g494"><path
                id="path496"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.175,-3.108 0.35,-6.217 0.525,-9.325" /></g><g
              transform="translate(204.8711,127.6174)"
              id="g498"><path
                id="path500"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.489,-3.24 0.89,-6.494 1.201,-9.756" /></g><g
              transform="translate(208.034,123.7738)"
              id="g502"><path
                id="path504"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.345,-2.835 0.837,-5.652 1.473,-8.436" /></g><g
              transform="translate(213.3673,120.2271)"
              id="g506"><path
                id="path508"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.85,-3.074 1.478,-6.208 1.877,-9.372" /></g><g
              transform="translate(217.5189,116.3881)"
              id="g510"><path
                id="path512"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.545,-2.405 1.09,-4.81 1.635,-7.214" /></g><g
              transform="translate(221.3591,115.1335)"
              id="g514"><path
                id="path516"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.709,-2.14 1.418,-4.281 2.127,-6.421" /></g><g
              transform="translate(226.3994,113.219)"
              id="g518"><path
                id="path520"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.736,-1.656 1.349,-3.366 1.832,-5.112" /></g><g
              transform="translate(229.9907,113.2192)"
              id="g522"><path
                id="path524"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.84,-1.534 1.451,-3.194 1.806,-4.907" /></g><g
              transform="translate(233.7048,112.4413)"
              id="g526"><path
                id="path528"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.988,-1.666 1.976,-3.332 2.965,-4.997" /></g><g
              transform="translate(237.8252,111.3226)"
              id="g530"><path
                id="path532"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 1.165,-1.435 2.156,-3.012 2.943,-4.684" /></g><g
              transform="translate(241.7214,110.6882)"
              id="g534"><path
                id="path536"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.408,-1.5 1.165,-2.903 2.193,-4.069" /></g><g
              transform="translate(245.0184,110.4856)"
              id="g538"><path
                id="path540"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.76,-0.574 1.458,-1.232 2.077,-1.957" /></g><g
              transform="translate(248.7518,110.7483)"
              id="g542"><path
                id="path544"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.694,-1.223 1.74,-2.243 2.98,-2.907" /></g><g
              transform="translate(142.5689,194.3061)"
              id="g546"><path
                id="path548"
                style="fill:${color.patternArm};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c -0.432,-0.263 -10.293,-6.1 -22.484,-1.195 -0.339,2.135 -0.653,4.279 -0.949,6.439 -0.085,0.61 -0.187,1.229 -0.305,1.839 C -19.638,3.406 -11.005,-2.533 0,0" /></g><g
              transform="translate(142.5689,194.3061)"
              id="g550"><path
                id="path552"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -0.432,-0.263 -10.293,-6.1 -22.484,-1.195 -0.339,2.135 -0.653,4.279 -0.949,6.439 -0.085,0.61 -0.187,1.229 -0.305,1.839 C -19.638,3.406 -11.005,-2.533 0,0 Z" /></g><g
              transform="translate(147.9825,184.1483)"
              id="g554"><path
                id="path556"
                style="fill:${color.patternArm};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c 0,0 -8.514,-9.743 -25.407,-5.498 -0.415,2.27 -0.831,4.549 -1.22,6.837 C -19.723,-1.364 -9.446,-3.906 0,0" /></g><g
              transform="translate(147.9825,184.1483)"
              id="g558"><path
                id="path560"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0,0 -8.514,-9.743 -25.407,-5.498 -0.415,2.27 -0.831,4.549 -1.22,6.837 C -19.723,-1.364 -9.446,-3.906 0,0 Z" /></g><g
              transform="translate(154.1658,263.5292)"
              id="g562"><path
                id="path564"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.441,-1.804 0.489,-3.704 0.139,-5.528" /></g><g
              transform="translate(170.3154,280.7279)"
              id="g566"><path
                id="path568"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C -0.025,-2.311 -0.192,-4.621 -0.501,-6.911" /></g><g
              transform="translate(122.9695,267.7264)"
              id="g570"><path
                id="path572"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.827,-1.502 1.261,-3.217 1.248,-4.931" /></g><g
              transform="translate(118.4571,270.3218)"
              id="g574"><path
                id="path576"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0.184,-0.009 0.291,-0.208 0.359,-0.379 0.869,-2.18 1.586,-4.421 2.144,-6.7" /></g><g
              transform="translate(114.3179,271.0092)"
              id="g578"><path
                id="path580"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 1.929,-6.65" /></g><g
              transform="translate(80.8468,290.5764)"
              id="g582"><path
                id="path584"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C -0.266,-0.56 -0.632,-1.072 -1.075,-1.506" /></g><g
              transform="translate(81.9534,288.8965)"
              id="g586"><path
                id="path588"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C -0.598,-1.465 -1.234,-2.915 -1.907,-4.347" /></g><g
              transform="translate(83.706,285.0741)"
              id="g590"><path
                id="path592"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C -0.548,-1.935 -1.162,-3.852 -1.84,-5.745" /></g><g
              transform="translate(86.6604,280.0172)"
              id="g594"><path
                id="path596"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C -0.136,-2.74 -0.384,-5.474 -0.744,-8.193" /></g><g
              transform="translate(89.653,274.3701)"
              id="g598"><path
                id="path600"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C -0.102,-3.2 -0.076,-6.404 0.078,-9.601" /></g><g
              transform="translate(92.9758,268.1704)"
              id="g602"><path
                id="path604"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.431,-2.911 0.791,-5.833 1.08,-8.762" /></g><g
              transform="translate(96.9548,264.6449)"
              id="g606"><path
                id="path608"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.456,-2.928 0.912,-5.855 1.368,-8.783" /></g><g
              transform="translate(100.6812,260.5368)"
              id="g610"><path
                id="path612"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.635,-3.188 1.584,-6.314 2.827,-9.318" /></g><g
              transform="translate(104.9451,258.8684)"
              id="g614"><path
                id="path616"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0.686,-0.995 1.094,-2.15 1.495,-3.291 0.828,-2.357 1.656,-4.715 2.484,-7.072" /></g><g
              transform="translate(108.8973,255.8722)"
              id="g618"><path
                id="path620"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.12,0.132 0.316,-0.059 0.386,-0.223 1.464,-2.74 2.541,-5.256 3.619,-7.772" /></g><g
              transform="translate(137.3132,111.6183)"
              id="g622"><path
                id="path624"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 9.751,2.949 18.294,-7.671" /></g><g
              transform="translate(129.9469,116.3881)"
              id="g626"><path
                id="path628"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 1.831,0.784 5.628,-0.401" /></g><g
              transform="translate(128.9207,99.7115)"
              id="g630"><path
                id="path632"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 -4.021,-4.01 0.601,-11.465" /></g><g
              transform="translate(118.1896,103.9475)"
              id="g634"><path
                id="path636"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 -2.542,-4.096 2.259,-10.449" /></g><g
              transform="translate(142.8993,101.4059)"
              id="g638"><path
                id="path640"
                style="fill:none;stroke:#231f20;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0,0 -6.67,-6.105 1.466,-12.795" /></g><g
              transform="translate(204.9816,253.3215)"
              id="g642"><path
                id="path644"
                style="fill:${color.patternArm};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c -1.872,-7.523 -2.406,-13.75 -2.533,-19.655 -2.516,-1.44 -5.956,-2.88 -10.463,-3.77 -11.53,-2.262 -29.194,1.695 -44.503,-7.904 0,0 5.391,12.14 25.698,13.834 C -17.687,-16.317 -6.54,-7.404 0,0" /></g><g
              transform="translate(204.9816,253.3215)"
              id="g646"><path
                id="path648"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -1.872,-7.523 -2.406,-13.75 -2.533,-19.655 -2.516,-1.44 -5.956,-2.88 -10.463,-3.77 -11.53,-2.262 -29.194,1.695 -44.503,-7.904 0,0 5.391,12.14 25.698,13.834 C -17.687,-16.317 -6.54,-7.404 0,0 Z" /></g><g
              transform="translate(202.4824,222.0771)"
              id="g650"><path
                id="path652"
                style="fill:${color.patternArm};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c 0.008,-3.923 -0.051,-7.972 -0.466,-12.454 -3.77,-0.415 -9.048,-0.423 -15.021,1.212 -11.903,3.245 -6.142,8.048 -25.255,5.506 0,0 10.845,5.363 20.858,3.11 C -12.911,-4.202 -5.727,-2.974 0,0" /></g><g
              transform="translate(202.4824,222.0771)"
              id="g654"><path
                id="path656"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0.008,-3.923 -0.051,-7.972 -0.466,-12.454 -3.77,-0.415 -9.048,-0.423 -15.021,1.212 -11.903,3.245 -6.142,8.048 -25.255,5.506 0,0 10.845,5.363 20.858,3.11 C -12.911,-4.202 -5.727,-2.974 0,0 Z" /></g><g
              transform="translate(380.7314,113.6958)"
              id="g658"><path
                id="path660"
                style="fill:${color.patternTail};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c -0.381,-0.195 -0.762,-0.398 -1.135,-0.61 -5.38,-3.041 -10.082,-7.184 -15.453,-10.259 -5.371,-3.067 -11.844,-5.033 -17.74,-3.186 4.397,0.288 8.345,2.838 11.581,5.837 3.236,2.991 5.99,6.49 9.361,9.345 0.204,0.169 0.415,0.347 0.644,0.525 C -8.506,1.067 -4.227,0.542 0,0" /></g><g
              transform="translate(380.7314,113.6958)"
              id="g662"><path
                id="path664"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -0.381,-0.195 -0.762,-0.398 -1.135,-0.61 -5.38,-3.041 -10.082,-7.184 -15.453,-10.259 -5.371,-3.067 -11.844,-5.033 -17.74,-3.186 4.397,0.288 8.345,2.838 11.581,5.837 3.236,2.991 5.99,6.49 9.361,9.345 0.204,0.169 0.415,0.347 0.644,0.525 C -8.506,1.067 -4.227,0.542 0,0 Z" /></g><g
              transform="translate(413.3398,106.4693)"
              id="g666"><path
                id="path668"
                style="fill:${color.patternTail};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c -4.812,0.11 -9.607,-0.796 -14.3,-3.118 -4.228,-2.084 -7.956,-5.083 -12.175,-7.201 -4.219,-2.109 -9.276,-3.295 -13.64,-1.482 4.228,0.542 7.481,3.812 10.743,6.565 4.905,4.143 10.691,7.481 16.91,9.209 C -7.845,2.931 -3.618,1.661 0,0" /></g><g
              transform="translate(413.3398,106.4693)"
              id="g670"><path
                id="path672"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -4.812,0.11 -9.607,-0.796 -14.3,-3.118 -4.228,-2.084 -7.956,-5.083 -12.175,-7.201 -4.219,-2.109 -9.276,-3.295 -13.64,-1.482 4.228,0.542 7.481,3.812 10.743,6.565 4.905,4.143 10.691,7.481 16.91,9.209 C -7.845,2.931 -3.618,1.661 0,0 Z" /></g><g
              transform="translate(426.4204,81.5195)"
              id="g674"><path
                id="path676"
                style="fill:${color.patternTail};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c -2.736,3.185 -6.617,5.312 -10.691,6.413 -4.423,1.195 -9.082,1.271 -13.657,0.941 5.346,2.651 11.208,4.558 17.172,4.363 2.296,-0.085 4.609,-0.492 6.786,-1.254 V 10.454 C 0.483,6.888 0.635,3.363 0,0" /></g><g
              transform="translate(426.4204,81.5195)"
              id="g678"><path
                id="path680"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -2.736,3.185 -6.617,5.312 -10.691,6.413 -4.423,1.195 -9.082,1.271 -13.657,0.941 5.346,2.651 11.208,4.558 17.172,4.363 2.296,-0.085 4.609,-0.492 6.786,-1.254 V 10.454 C 0.483,6.888 0.635,3.363 0,0 Z" /></g><g
              transform="translate(406.7487,62.3306)"
              id="g682"><path
                id="path684"
                style="fill:${color.patternTail};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c -0.076,-0.229 -0.152,-0.457 -0.237,-0.686 h -0.009 c -3.795,-1.398 -8.158,-2.499 -13.114,-3.253 2.66,3.854 6.371,7.048 8.421,11.276 2.109,4.371 1.686,9.463 0.254,13.953 1.881,-1.906 3.304,-4.117 4.27,-6.506 C 1.457,10.149 1.593,4.88 0,0" /></g><g
              transform="translate(406.7487,62.3306)"
              id="g686"><path
                id="path688"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -0.076,-0.229 -0.152,-0.457 -0.237,-0.686 h -0.009 c -3.795,-1.398 -8.158,-2.499 -13.114,-3.253 2.66,3.854 6.371,7.048 8.421,11.276 2.109,4.371 1.686,9.463 0.254,13.953 1.881,-1.906 3.304,-4.117 4.27,-6.506 C 1.457,10.149 1.593,4.88 0,0 Z" /></g><g
              transform="translate(351.3848,118.2283)"
              id="g690"><path
                id="path692"
                style="fill:${color.patternTail};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c -0.059,-0.042 -0.11,-0.076 -0.169,-0.119 -4.296,-3.049 -9.226,-8.167 -12.793,-14.681 1.059,5.142 2.219,10.513 5.549,14.571 0.5,0.61 1.042,1.186 1.618,1.729 C -3.931,0.949 -1.991,0.449 0,0" /></g><g
              transform="translate(351.3848,118.2283)"
              id="g694"><path
                id="path696"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c -0.059,-0.042 -0.11,-0.076 -0.169,-0.119 -4.296,-3.049 -9.226,-8.167 -12.793,-14.681 1.059,5.142 2.219,10.513 5.549,14.571 0.5,0.61 1.042,1.186 1.618,1.729 C -3.931,0.949 -1.991,0.449 0,0 Z" /></g><g
              transform="translate(377.0969,57.2136)"
              id="g698"><path
                id="path700"
                style="fill:${color.patternTail};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="m 0,0 c 0.822,3.406 1.474,6.735 1.449,10.276 -0.017,2.373 -0.5,4.77 -0.017,7.091 C 3.634,11.717 6.354,6.125 6.82,0.203 4.634,0.076 2.364,0.008 0,0" /></g><g
              transform="translate(377.0969,57.2136)"
              id="g702"><path
                id="path704"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="m 0,0 c 0.822,3.406 1.474,6.735 1.449,10.276 -0.017,2.373 -0.5,4.77 -0.017,7.091 C 3.634,11.717 6.354,6.125 6.82,0.203 4.634,0.076 2.364,0.008 0,0 Z" /></g><g
              transform="translate(355.6631,58.1709)"
              id="g706"><path
                id="path708"
                style="fill:${color.patternTail};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="M 0,0 C 0.856,3.482 1.542,6.888 1.516,10.505 1.499,12.877 1.017,15.275 1.491,17.596 3.804,11.683 6.684,5.812 6.939,-0.415 4.532,-0.271 2.22,-0.136 0,0" /></g><g
              transform="translate(355.6631,58.1709)"
              id="g710"><path
                id="path712"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.856,3.482 1.542,6.888 1.516,10.505 1.499,12.877 1.017,15.275 1.491,17.596 3.804,11.683 6.684,5.812 6.939,-0.415 4.532,-0.271 2.22,-0.136 0,0 Z" /></g><g
              transform="translate(335.2033,59.4586)"
              id="g714"><path
                id="path716"
                style="fill:${color.patternTail};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="M 0,0 C 0.695,3.041 1.211,6.04 1.195,9.217 1.178,11.59 0.703,13.987 1.178,16.308 3.329,10.81 5.973,5.346 6.523,-0.415 4.219,-0.271 2.05,-0.136 0,0" /></g><g
              transform="translate(335.2033,59.4586)"
              id="g718"><path
                id="path720"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.695,3.041 1.211,6.04 1.195,9.217 1.178,11.59 0.703,13.987 1.178,16.308 3.329,10.81 5.973,5.346 6.523,-0.415 4.219,-0.271 2.05,-0.136 0,0 Z" /></g><g
              transform="translate(315.0995,60.8396)"
              id="g722"><path
                id="path724"
                style="fill:${color.patternTail};fill-opacity:1;fill-rule:nonzero;stroke:none"
                d="M 0,0 C 0.695,3.008 1.203,5.981 1.186,9.124 1.169,11.488 0.686,13.885 1.161,16.207 3.312,10.725 5.939,5.278 6.506,-0.457 4.041,-0.288 1.881,-0.136 0,0" /></g><g
              transform="translate(315.0995,60.8396)"
              id="g726"><path
                id="path728"
                style="fill:none;stroke:#231f20;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                d="M 0,0 C 0.695,3.008 1.203,5.981 1.186,9.124 1.169,11.488 0.686,13.885 1.161,16.207 3.312,10.725 5.939,5.278 6.506,-0.457 4.041,-0.288 1.881,-0.136 0,0 Z" /></g></g></g></g>
      </svg>`
    }
  }
}
