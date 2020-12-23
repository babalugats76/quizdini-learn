<template>
  <ui-modal
    class="splash__modal"
    :appear="true"
    :duration="config.timeouts.default"
    :show="showModal"
    @close="$emit('close')"
    @exited="$emit('exited')"
  >
    <div class="splash">
      <div class="splash__header">
        <div class="splash__badge"></div>
        <header class="splash__title">{{ title }}</header>
        <div class="splash__subtitle">{{ author }}</div>
      </div>
      <div class="splash__body">
        <div class="splash__details" v-if="$slots.details">
          <slot name="details" />
        </div>
      </div>
      <div class="splash__footer">
        <button @click.prevent="$emit('close')">Start Game</button>
      </div>
    </div>
  </ui-modal>
</template>

<script>
import UiModal from "@/components/ui/UiModal";

export default {
  name: "game-splash",
  components: {
    UiModal,
  },
  props: ["author", "config", "showModal", "title"],
  emits: ["close", "exited"],
};
</script>

<style lang="scss" scoped>
.splash {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #888;
  border-radius: inherit;
  &::before {
    content: ""; // ::before and ::after both require content
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: inherit;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 1920 897'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none;%7D.cls-2%7Bfill:%2301e7e4;%7D.cls-3%7Bfill:%23001399;%7D.cls-4%7Bfill:url(%23linear-gradient);%7D.cls-5%7Bfill:%23014ce4;%7D.cls-6%7Bfill:%23aa54ff;%7D.cls-7%7Bfill:url(%23linear-gradient-2);%7D.cls-8%7Bfill:%23711cff;%7D.cls-9%7Bfill:%23fff;%7D%3C/style%3E%3ClinearGradient id='linear-gradient' x1='1319.99' y1='411.36' x2='1319.99' y2='-252.43' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2301e7e4'/%3E%3Cstop offset='1' stop-color='%23aa54ff'/%3E%3C/linearGradient%3E%3ClinearGradient id='linear-gradient-2' x1='1320' y1='461.29' x2='1320' y2='310.45' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fff'/%3E%3Cstop offset='1' stop-color='%2301e7e4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ctitle%3EQuizdini - Banner Illustration Web%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Crect class='cls-1' width='1920' height='897'/%3E%3Cpath class='cls-2' d='M865.62,662.61H842.39A17.43,17.43,0,0,0,825,680.06v27.22a17.44,17.44,0,0,0,17.39,17.45h25.36v-16.6h-23.9a4.75,4.75,0,0,1-4.74-4.75V682.71a4.75,4.75,0,0,1,4.74-4.75h23.9V662.61Z'/%3E%3Cpath class='cls-2' d='M849.58,654v72.52c0,11.61,19.12,21,42.71,21s42.71-9.41,42.71-21V654Z'/%3E%3Cellipse class='cls-2' cx='892.29' cy='654.04' rx='42.71' ry='14.28'/%3E%3Cpath class='cls-3' d='M865.67,500.47a22.78,22.78,0,0,1,2.85,11.94,36.06,36.06,0,0,1-3.08,12.21c-1.61,3.85-3.5,7.5-5.17,11.08a45.16,45.16,0,0,0-3.72,10.56,17.38,17.38,0,0,0,.73,9.48,20.9,20.9,0,0,0,2.2,4.15,15.6,15.6,0,0,0,3,3.21c4.33,3.56,11.07,4.39,19.09,5.22a87.9,87.9,0,0,1,13.16,2.19,42.21,42.21,0,0,1,7.4,2.79,32.72,32.72,0,0,1,7.23,5,33.6,33.6,0,0,1,5.72,6.92,36.27,36.27,0,0,1,3.71,8,32.8,32.8,0,0,1,1.53,9.24,38.63,38.63,0,0,1-.93,9.06,56.14,56.14,0,0,1-2.44,7.76c-.93,2.35-1.91,4.5-2.87,6.52-1.91,4-3.67,7.46-4.81,10.42a23.31,23.31,0,0,0,.83,19.26l-31.17,4a42,42,0,0,1-2.44-10,37.64,37.64,0,0,1,.35-10.52,43,43,0,0,1,2.74-9.08,60.57,60.57,0,0,1,3.73-7.13c2.58-4.18,5.13-7.53,7.25-10.52,1.05-1.47,2-2.86,2.81-4.15a35.67,35.67,0,0,0,1.93-3.49,11.14,11.14,0,0,0,1.22-5.59,13.24,13.24,0,0,0-.71-3.2,11.92,11.92,0,0,0-1.39-2.79,11.35,11.35,0,0,0-2.28-2.41,20.68,20.68,0,0,0-3.57-2.18,70.89,70.89,0,0,0-10.25-3.57,106.64,106.64,0,0,1-12.47-4.17,41.76,41.76,0,0,1-6.51-3.52,30.06,30.06,0,0,1-5.82-5.18,27.87,27.87,0,0,1-4.13-6.5,31.07,31.07,0,0,1-2.22-7.07,26.2,26.2,0,0,1-.3-7.44,28.9,28.9,0,0,1,1.66-7,52.6,52.6,0,0,1,6.32-11.38c2.36-3.38,4.78-6.56,6.89-9.86a33.06,33.06,0,0,0,4.72-10.54A21.74,21.74,0,0,0,865.67,500.47Z'/%3E%3Cellipse class='cls-3' cx='892.29' cy='652.61' rx='33.46' ry='8.57'/%3E%3Cellipse class='cls-3' cx='892.29' cy='656.9' rx='28.98' ry='4.28'/%3E%3Cpath class='cls-4' d='M1693.17,0H946.81c-26.15,52.5,5.65,80.22,43.3,110.77,38.08,30.2,82,63.23,90.3,118.52,16.17,109.5-67.23,125.22-42.32,234.59,21.29,93.1,76.57,96.19,101.89,166.27,1.52,4.18,2.92,8.6,4.21,13.29l.15.56h351.34l.15-.54c1.28-4.69,2.69-9.1,4.2-13.28,25.34-70,80.56-73.11,101.85-166.16,24.91-109.37-58.48-125.09-42.31-234.59,8.3-55.28,52.22-88.31,90.3-118.52C1687.5,80.37,1719.31,52.5,1693.17,0Z'/%3E%3Cpath class='cls-3' d='M1630.36,525.48c-12.23-17.56-28.64-27.42-46.28-27.78h-1.86c-17.39.36-33.68,10.06-45.89,27.34s-19,40.41-19,64.89v119.6h5V589.93c0-23.45,6.43-45.48,18.1-62,7.51-10.62,16.63-18.12,26.52-22-4.39,4.68-8.39,11.29-11.79,19.67-7,17.24-10.85,40.11-10.85,64.39V707.31h5V589.93c0-23.65,3.72-45.85,10.48-62.51,5.74-14.14,13.26-22.87,20.92-24.45V698.65h5V503c17.22,3.45,31.4,42.12,31.4,87V707.31h5V589.93c0-37.68-9.2-69.64-22.66-84,25.66,10.27,44.64,44.23,44.64,84v119.6h5V589.93C1649.07,565.68,1642.42,542.79,1630.36,525.48Z'/%3E%3Cpath class='cls-3' d='M1583.19,698.65c-52.53,0-95.12,12.29-95.12,27.44v15.33c0,15.15,42.59,27.44,95.12,27.44s95.12-12.29,95.12-27.44V726.09C1678.31,710.94,1635.72,698.65,1583.19,698.65Z'/%3E%3Cellipse class='cls-5' cx='1583.19' cy='726.09' rx='95.12' ry='27.44'/%3E%3Cellipse class='cls-3' cx='1583.19' cy='722.06' rx='82.25' ry='17.95'/%3E%3Cpath class='cls-5' d='M1584.28,497.35H1582a92.7,92.7,0,0,0-91.44,92.58V720.6c0,18.67,47.71,28.74,92.6,28.74s92.6-10.07,92.6-28.74V589.93A92.7,92.7,0,0,0,1584.28,497.35Zm70.57,235.81a118.3,118.3,0,0,1-18.18,5.33V589.93c0-24.24-5.31-47.14-15-64.46a70.9,70.9,0,0,0-12.13-16.25c26.46,12.83,45.28,44.29,45.28,80.71Zm-96.25,9.48a233.46,233.46,0,0,1-23.18-3V589.93c0-23.47,5.14-45.51,14.46-62,6.4-11.34,14.23-19.07,22.69-22.61q-4.26,7.11-7.52,20.54c-4.16,17.17-6.45,39.94-6.45,64.12ZM1557,509.06a70.13,70.13,0,0,0-12.08,16c-9.79,17.38-15.19,40.41-15.19,64.85V738.49a117.81,117.81,0,0,1-18.17-5.33V589.93c0-23.3,7.51-45.18,21.16-61.63A72.18,72.18,0,0,1,1557,509.06Zm74,80.87v149.7a233.07,233.07,0,0,1-23.18,3V589.93c0-34.44-4.78-69.45-14-84.69C1615,514.09,1631,548.86,1631,589.93ZM1496.31,720.6V589.93a86.87,86.87,0,0,1,38-71.81,85.8,85.8,0,0,0-6,6.53c-14.49,17.47-22.47,40.65-22.47,65.28V730.59C1499.68,727.4,1496.31,723.94,1496.31,720.6Zm68,22.46V589.93c0-23.74,2.24-46,6.29-62.78,4.24-17.53,9.36-23.94,12.38-24.09h.34c7.83.41,18.75,33.66,18.75,86.88V743.05c-6,.38-12.32.58-18.88.58S1570.32,743.43,1564.31,743.06Zm105.77-22.46c0,3.34-3.38,6.8-9.52,10V589.93c0-24.42-7.87-47.47-22.16-64.88a84.92,84.92,0,0,0-6.38-6.94,86.87,86.87,0,0,1,38.06,71.82Z'/%3E%3Cpath class='cls-5' d='M1583.19,504.05c-8.9,0-16.15-7.59-16.15-16.91s7.25-16.92,16.15-16.92,16.15,7.59,16.15,16.92S1592.09,504.05,1583.19,504.05Zm0-27c-5.12,0-9.28,4.51-9.28,10.05s4.16,10.05,9.28,10.05,9.28-4.51,9.28-10.05S1588.31,477.09,1583.19,477.09Z'/%3E%3Cpath class='cls-5' d='M1114.37,611.07V739.51c0,11.77-33.09,21.32-73.91,21.32s-73.91-9.55-73.91-21.32V611.07c0-11.77,33.08-21.32,73.91-21.32S1114.37,599.3,1114.37,611.07Z'/%3E%3Cpath class='cls-6' d='M1114.37,596.36v28.19c0,11.78-33.09,21.33-73.91,21.33s-73.91-9.55-73.91-21.33V596.36c0-11.77,33.08-21.32,73.91-21.32S1114.37,584.59,1114.37,596.36Z'/%3E%3Cpath class='cls-5' d='M1040.46,536.64c-61.3,0-111,14.33-111,32l2.46,17.88c0,17.69,48.59,32,108.54,32s108.54-14.33,108.54-32l2.45-17.88C1151.45,551,1101.76,536.64,1040.46,536.64Z'/%3E%3Cellipse class='cls-2' cx='1040.46' cy='568.57' rx='112.1' ry='32.34'/%3E%3Cellipse class='cls-5' cx='1040.46' cy='564.29' rx='76.03' ry='20.12'/%3E%3Cpath class='cls-3' d='M1103.31,575.61c-13.68,5.31-36.73,8.79-62.85,8.79s-49.17-3.48-62.85-8.79c13.68-5.32,36.73-8.8,62.85-8.8S1089.63,570.29,1103.31,575.61Z'/%3E%3Cpath class='cls-2' d='M932.19,461.34H941a7.34,7.34,0,0,1,7.34,7.34v56.38a0,0,0,0,1,0,0H924.85a0,0,0,0,1,0,0V468.68a7.34,7.34,0,0,1,7.34-7.34Z' transform='translate(-121.34 528.35) rotate(-29.67)'/%3E%3Cpath class='cls-6' d='M1000.38,581.38c-18.22-3-31.3-8-34.93-13.79l-.27-.49-23-40.4,20.43-11.64,20.52,36Z'/%3E%3Cpath class='cls-3' d='M961.52,681.19c4.33,9.11,4.33,19.06.42,26.94-.83,1.6,1.73,2,3.17.45,6.84-7.47,9.77-17,8.38-25.7a3,3,0,0,0-2.27-2.12l-8.79-1.24C961.43,679.38,961,680.17,961.52,681.19Z'/%3E%3Cpath class='cls-3' d='M905.17,740c9.44,6.72,21.79,5.58,27.57-2.55a16.9,16.9,0,0,0,2.3-14.31,14.41,14.41,0,0,0,10-5.81c5-7,2.42-17.35-5.7-23.13a19.75,19.75,0,0,0-11.52-3.76l-.18-.15a27.61,27.61,0,0,1,20.28.94,30.17,30.17,0,0,1,15.47,16.89,30.17,30.17,0,0,1,22.87,1.34c14.64,7,19.63,27.16,13.32,41.45l-.33.7c-.11.23-.22.46-.34.69-12.32,25-40.92,32.27-66.15,20.27-15-7.14-25.49-19.51-29.07-33.71C904.17,739.28,904.66,739.66,905.17,740Z'/%3E%3Cpath class='cls-5' d='M902.36,729.11a44.39,44.39,0,0,0,1.33,9.77c.48.4,1,.78,1.48,1.14,9.44,6.72,21.79,5.58,27.57-2.55a16.9,16.9,0,0,0,2.3-14.31,14.41,14.41,0,0,0,10-5.81c5-7,2.42-17.35-5.7-23.13a19.75,19.75,0,0,0-11.52-3.76,17.65,17.65,0,0,1,2.72,2.86c5.12,6.76,4.56,15.81-1.25,20.21a12.23,12.23,0,0,1-9.58,2.16,13.9,13.9,0,0,1-17.35,13.42Z'/%3E%3Cpolygon class='cls-6' points='1512 655.43 1128 655.43 1163.87 778.96 1476.13 778.96 1512 655.43'/%3E%3Cpolygon class='cls-7' points='1512 504.05 1128 504.05 1163.87 419.79 1476.13 419.79 1512 504.05'/%3E%3Cpolygon class='cls-5' points='1508.51 654.74 1131.49 654.74 1166.71 580.43 1473.29 580.43 1508.51 654.74'/%3E%3Cpolygon class='cls-5' points='1508.51 504.74 1131.49 504.74 1166.71 579.05 1473.29 579.05 1508.51 504.74'/%3E%3Cpath class='cls-8' d='M1476.13,579.74H1163.87L1128,655.43h384ZM1169,591.16H1471l25,52.84H1143.92Z'/%3E%3Cpath class='cls-2' d='M1128,504.05l35.87,75.69h312.26L1512,504.05Zm343,64.26H1169l-25-52.84h352.16Z'/%3E%3Cpolygon class='cls-3' points='1193.94 644 1143.92 644 1168.96 591.16 1169.02 591.16 1193.94 644'/%3E%3Cpolygon class='cls-3' points='1496.08 644 1445.99 644 1470.91 591.16 1471.04 591.16 1496.08 644'/%3E%3Cpolygon class='cls-3' points='1496.08 515.47 1471.04 568.31 1470.73 568.31 1445.76 515.47 1496.08 515.47'/%3E%3Cpolygon class='cls-3' points='1193.96 515.47 1168.99 568.31 1168.96 568.31 1143.92 515.47 1193.96 515.47'/%3E%3Cpath class='cls-6' d='M1476.13,579.74H1163.87L1140,630.15c1.52,4.18,2.92,8.6,4.21,13.29L1169,591.16H1471l24.79,52.3c1.28-4.69,2.69-9.1,4.2-13.28Z'/%3E%3Cpath class='cls-3' d='M1400.33,504H1441a0,0,0,0,1,0,0V538.4a6.35,6.35,0,0,1-6.35,6.35h-28a6.35,6.35,0,0,1-6.35-6.35V504a0,0,0,0,1,0,0Z'/%3E%3Cpath class='cls-3' d='M1199,504h40.7a0,0,0,0,1,0,0V538.4a6.35,6.35,0,0,1-6.35,6.35h-28a6.35,6.35,0,0,1-6.35-6.35V504A0,0,0,0,1,1199,504Z'/%3E%3Cpath class='cls-5' d='M1441,504.05h-40.7l-5.65-25.1a6.35,6.35,0,0,1,6.19-7.75h24.46a6.35,6.35,0,0,1,6,4.31Z'/%3E%3Cpath class='cls-5' d='M1245.32,479l-5.65,25.1H1199l9.69-28.54a6.35,6.35,0,0,1,6-4.31h24.46A6.35,6.35,0,0,1,1245.32,479Z'/%3E%3Cpath class='cls-3' d='M1433,696.13H1405.6a6.36,6.36,0,0,1-6.35-6.56l1.08-34.14H1441l-1.65,34.65A6.35,6.35,0,0,1,1433,696.13Z'/%3E%3Cpath class='cls-3' d='M1234.4,696.13H1207a6.35,6.35,0,0,1-6.34-6L1199,655.43h40.7l1.08,34.14A6.36,6.36,0,0,1,1234.4,696.13Z'/%3E%3Cpath class='cls-3' d='M1488.24,744H1151.76a4,4,0,0,1-3.81-2.82l-5.61-18.47a4,4,0,0,1,3.8-5.13h347.72a4,4,0,0,1,3.8,5.13l-5.61,18.47A4,4,0,0,1,1488.24,744Z'/%3E%3Cpath class='cls-3' d='M1327.85,472.49c0-3.81-3.51-6.9-7.85-6.9s-7.85,3.09-7.85,6.9a6.91,6.91,0,0,0,4.62,6.28l-4.62,13.75h15.7l-4.62-13.75A6.91,6.91,0,0,0,1327.85,472.49Z'/%3E%3Crect class='cls-8' x='1415.59' y='664.76' width='9.1' height='22.04' rx='4.55' ry='4.55'/%3E%3Crect class='cls-8' x='1215.31' y='664.76' width='9.1' height='22.04' rx='4.55' ry='4.55'/%3E%3Crect class='cls-5' x='1416.59' y='513.38' width='9.1' height='22.04' rx='4.55' ry='4.55'/%3E%3Crect class='cls-5' x='1214.31' y='513.38' width='9.1' height='22.04' rx='4.55' ry='4.55'/%3E%3Cpath class='cls-5' d='M1395.15,828c-14.67,0-26.56,6.37-26.56,14.22v9.69c0,7.85,11.89,14.22,26.56,14.22s26.57-6.37,26.57-14.22v-9.69C1421.72,834.36,1409.82,828,1395.15,828Z'/%3E%3Cellipse class='cls-2' cx='1395.15' cy='842.21' rx='26.56' ry='14.22'/%3E%3Cellipse class='cls-5' cx='1395.15' cy='842.21' rx='16.85' ry='9.02'/%3E%3Cpath class='cls-3' d='M1467.75,802.42c-14.67,0-26.56,6.36-26.56,14.22v9.68c0,7.86,11.89,14.22,26.56,14.22s26.56-6.36,26.56-14.22v-9.68C1494.31,808.78,1482.42,802.42,1467.75,802.42Z'/%3E%3Cellipse class='cls-8' cx='1467.75' cy='816.64' rx='26.56' ry='14.22'/%3E%3Cellipse class='cls-3' cx='1467.75' cy='816.64' rx='16.85' ry='9.02'/%3E%3Cpath class='cls-3' d='M1508.05,808.93c-14.67,0-26.57,6.37-26.57,14.22v9.69c0,7.85,11.9,14.22,26.57,14.22s26.56-6.37,26.56-14.22v-9.69C1534.61,815.3,1522.72,808.93,1508.05,808.93Z'/%3E%3Cellipse class='cls-8' cx='1508.05' cy='823.15' rx='26.56' ry='14.22'/%3E%3Cellipse class='cls-3' cx='1508.05' cy='823.15' rx='16.85' ry='9.02'/%3E%3Cpath class='cls-8' d='M1488.9,796.45c-14.67,0-26.56,6.36-26.56,14.22v9.68c0,7.86,11.89,14.22,26.56,14.22s26.57-6.36,26.57-14.22v-9.68C1515.47,802.81,1503.57,796.45,1488.9,796.45Z'/%3E%3Cellipse class='cls-6' cx='1488.9' cy='810.67' rx='26.56' ry='14.22'/%3E%3Cellipse class='cls-8' cx='1488.9' cy='810.67' rx='16.85' ry='9.02'/%3E%3Cpath class='cls-2' d='M1743.59,786.56l-171.71,90a3.77,3.77,0,0,1-4.49-.83l-21.83-26.71a2.31,2.31,0,0,1,.85-3.62l171.71-90a3.77,3.77,0,0,1,4.49.83l21.83,26.71A2.31,2.31,0,0,1,1743.59,786.56Z'/%3E%3Cpath class='cls-9' d='M1598.37,862.71l3.67-1.93-4.89-6a2.59,2.59,0,0,0-3.09-.57h0a1.59,1.59,0,0,0-.59,2.5Z'/%3E%3Cpath class='cls-9' d='M1614.8,854.09l3.68-1.93-4.89-6a2.61,2.61,0,0,0-3.1-.57h0a1.59,1.59,0,0,0-.58,2.5Z'/%3E%3Cpath class='cls-9' d='M1581.93,871.33l3.68-1.93L1573,854a2.59,2.59,0,0,0-3.1-.57h0a1.59,1.59,0,0,0-.58,2.5Z'/%3E%3Cpath class='cls-9' d='M1631.24,845.47l3.68-1.93-12.58-15.39a2.61,2.61,0,0,0-3.1-.57h0a1.59,1.59,0,0,0-.58,2.5Z'/%3E%3Cpath class='cls-9' d='M1647.68,836.85l3.68-1.93-4.9-6a2.59,2.59,0,0,0-3.09-.58h0a1.59,1.59,0,0,0-.59,2.5Z'/%3E%3Cpath class='cls-9' d='M1664.12,828.23l3.67-1.92-4.89-6a2.59,2.59,0,0,0-3.1-.57h0a1.59,1.59,0,0,0-.58,2.5Z'/%3E%3Cpath class='cls-9' d='M1680.55,819.61l3.68-1.92-12.58-15.39a2.59,2.59,0,0,0-3.1-.57h0a1.59,1.59,0,0,0-.58,2.49Z'/%3E%3Cpath class='cls-9' d='M1697,811l3.68-1.93-4.9-6a2.59,2.59,0,0,0-3.09-.57h0a1.59,1.59,0,0,0-.59,2.5Z'/%3E%3Cpath class='cls-9' d='M1713.43,802.38l3.67-1.93-4.89-6a2.61,2.61,0,0,0-3.1-.57h0a1.59,1.59,0,0,0-.58,2.5Z'/%3E%3Cpath class='cls-9' d='M1729.86,793.76l3.68-1.93L1721,776.44a2.59,2.59,0,0,0-3.09-.57h0a1.59,1.59,0,0,0-.59,2.5Z'/%3E%3Cpolygon class='cls-6' points='981.79 836.34 975.29 838.81 958.56 838.09 949.43 837.7 955.99 831.33 968 819.67 974.5 817.2 981.79 836.34'/%3E%3Cpath class='cls-3' d='M958.56,838.09l-9.13-.39,6.56-6.37a14.16,14.16,0,0,1,1.74,3.21A13.65,13.65,0,0,1,958.56,838.09Z'/%3E%3Cpath class='cls-8' d='M1092.42,788.73l-3.64-9.57-.23-.6a4.48,4.48,0,0,0-5.78-2.59L968,819.67a5.12,5.12,0,0,0,6.61,3h0a5.12,5.12,0,0,0,3.64,9.57,5.12,5.12,0,0,0-3,6.61l114.77-43.7a4.49,4.49,0,0,0,2.59-5.79Z'/%3E%3Cpolygon class='cls-8' points='1059.61 841.61 1052.69 842.25 1036.77 837.08 1028.07 834.26 1036.1 829.88 1050.8 821.86 1057.72 821.21 1059.61 841.61'/%3E%3Cpath class='cls-3' d='M1036.77,837.08l-8.7-2.82,8-4.38a13.92,13.92,0,0,1,.67,7.2Z'/%3E%3Cpath class='cls-2' d='M1179,825.37l-1-10.2-.06-.64a4.49,4.49,0,0,0-4.88-4L1050.8,821.86a5.12,5.12,0,0,0,5.57,4.62h0a5.12,5.12,0,1,0,1,10.2,5.13,5.13,0,0,0-4.63,5.57L1175,830.88a4.48,4.48,0,0,0,4-4.88Z'/%3E%3Cpath class='cls-9' d='M1314.41,274l-19.62-3.73-8.41-18.13a4.17,4.17,0,0,0-7.88,1l-3.73,19.63-18.13,8.4a4.17,4.17,0,0,0,1,7.88l19.63,3.73,8.4,18.13a4.17,4.17,0,0,0,7.88-1l3.73-19.62,18.13-8.41A4.17,4.17,0,0,0,1314.41,274Z'/%3E%3Cpath class='cls-2' d='M1724.13,481.68l-16.44-11.34-.37-20a4.17,4.17,0,0,0-7.6-2.3l-11.34,16.45-20,.36a4.18,4.18,0,0,0-2.29,7.61l16.44,11.34.37,20a4.17,4.17,0,0,0,7.6,2.29l11.35-16.45,20-.36A4.17,4.17,0,0,0,1724.13,481.68Z'/%3E%3Cpath class='cls-9' d='M1441.32,369.64l-5.71-2.2-1.54-5.91a3.53,3.53,0,0,0-6.71-.38l-2.19,5.7-5.92,1.54a3.53,3.53,0,0,0-.38,6.71l5.71,2.2,1.54,5.92a3.52,3.52,0,0,0,6.7.37l2.2-5.7,5.92-1.54A3.53,3.53,0,0,0,1441.32,369.64Z'/%3E%3Cpath class='cls-2' d='M1637.23,286.87l-5-3.53,0-6.12a3.53,3.53,0,0,0-6.41-2l-3.53,5-6.11.05a3.52,3.52,0,0,0-2,6.4l5,3.53,0,6.12a3.53,3.53,0,0,0,6.41,2l3.53-5,6.11-.05A3.52,3.52,0,0,0,1637.23,286.87Z'/%3E%3Cpath class='cls-2' d='M943.58,379.51l-6.06.8-4.18-4.47a3.53,3.53,0,0,0-6.07,2.87l.79,6.07L923.6,389a3.52,3.52,0,0,0,2.86,6.07l6.07-.8,4.18,4.47a3.53,3.53,0,0,0,6.07-2.87l-.79-6.06,4.46-4.18A3.53,3.53,0,0,0,943.58,379.51Z'/%3E%3Cpath class='cls-9' d='M1192.29,343.52l-4.44-.76-2-4.06a2.59,2.59,0,0,0-4.89.69l-.77,4.44-4.06,2a2.59,2.59,0,0,0,.69,4.89l4.44.77,2,4.05a2.6,2.6,0,0,0,4.9-.68l.76-4.44,4.06-2A2.6,2.6,0,0,0,1192.29,343.52Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position-x: -135px;
    background-position-y: -50px;
    background-size: 800px auto;
  }

  &__header {
    flex: 0;
    padding: 1.5rem;
    z-index: 2;
  }

  &__badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 5rem;
    height: 5rem;
    background-color: white;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.13);
    border-radius: 100%;
  }

  &__title {
    margin: 0 6rem 0.5rem 0.25rem;
    padding: 0.25rem;
    color: #333;
    font-size: 2.625rem;
    font-family: "Montserrat";
    font-weight: 800;
    line-height: 1;
    letter-spacing: $tracking-tight;
    text-shadow: 2px 2px 1px rgba(255, 255, 255, 0.6);
  }

  &__subtitle {
    margin-left: 0.375rem;
    font-size: 1.25rem;
    font-family: "Montserrat";
    font-weight: 400;
    letter-spacing: $tracking-tight;
  }

  &__body {
    flex: 1;
    padding: 0 1.5rem 0.75rem;
    z-index: 2;
  }

  &__footer {
    flex: 0;
    padding: 1rem;
    z-index: 2;
    button {
      background-color: var(--violet);
      color: var(--white);
      padding: 0.5rem 1.5rem;
      border-radius: 0.5rem;
      width: 100%;
      font-size: 1.625rem;
      line-height: 2rem;
      font-family: "Montserrat";
      font-weight: 800;
      letter-spacing: -0.035em;
    }
  }
}

.splash-enter-active,
.splash-enter-from {
  opacity: 0;
  transition: opacity 800ms cubic-bezier(0.4, 0, 0.2, 1);
}

.splash-enter-to {
  opacity: 1;
}

.splash-leave-active,
.splash-leave-from {
  opacity: 1;
  transition: opacity 800ms cubic-bezier(0.4, 0, 0.2, 1);
}

.splash-leave-to {
  opacity: 0;
}
</style>