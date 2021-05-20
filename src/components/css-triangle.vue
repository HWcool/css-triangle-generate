<template>
  <div class="bg">
    <div class="left">
      <div class="slider-item">
      <a-radio-group v-model:value="direction">
        <span>方向：</span>
        <a-radio :value="1">上</a-radio>
        <a-radio :value="2">下</a-radio>
        <a-radio :value="3">左</a-radio>
        <a-radio :value="4">右</a-radio>
      </a-radio-group>
      </div>
      <div class="slider-item">
        <span class="label">宽度：</span>
        <a-slider v-model:value="width" :min="0" :max="220" />
      </div>
      <div class="slider-item">
        <span class="label">高度：</span>
        <a-slider v-model:value="height" :min="0" :max="220" />
      </div>
      <div class="slider-item">
        <span class="label">角度：</span>
        <a-slider v-model:value="angle" :min="0" :max="360" />
      </div>
      <div class="slider-item">
        <span>背景：</span>
        <a-input type="color" v-model:value="bg_color" style="width: 80px"></a-input>
      </div>
      <div class="slider-item">
        <span>CSS：</span>
        <a-textarea
          v-model:value="jsonStyle"
          :auto-size="{ minRows: 10, maxRows: 5 }"
        />
      </div>  
    </div>
    <div class="right">
      <div class="preview-area">
        <div :style="triangleStyle" class="css-triangle"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  name: 'cssTriangle',
  setup() {
    const direction = ref(1)
    const width = ref(120)
    const height = ref(120)
    const angle = ref(0)
    const bg_color = ref('rgba(131,129, 239, 1)')
    const triangleStyle = computed(() => {
      // 缓存value 值
      let bg = bg_color.value
      let triangle_direction = direction.value
      let triangle_w = width.value
      let triangle_h = height.value
      // 三角形的border 样式
      let top = triangle_direction === 2 ? bg : 'transparent';
      let right = triangle_direction === 3 ? bg : 'transparent';
      let bottom = triangle_direction === 1 ? bg : 'transparent';
      let left = triangle_direction === 4 ? bg: 'transparent';
      // 三角形的border 宽度计算
      let borderWidth = ''
      switch(triangle_direction) {
        case 1:
          borderWidth = `0 ${triangle_w / 2}px ${triangle_h}px ${triangle_w / 2}px`
          break;
        case 2: 
          borderWidth = `${triangle_h}px ${triangle_w / 2}px 0 ${triangle_w / 2}px`
        break;
        case 3:
          borderWidth = `${triangle_h / 2}px ${triangle_w}px ${triangle_h/2}px 0`
          break;
        case 4:
          borderWidth = `${triangle_w / 2}px 0 ${triangle_w / 2}px ${triangle_h}px`
          break;
      }

      let cssResult = {
        display: 'inline-block',
        width: 0,
        height: 0,
        transform: `rotate(${angle.value}deg)`,
        borderStyle: 'solid',
        borderWidth,
        borderColor: `${top} ${right} ${bottom} ${left}`
      }
      return cssResult
    })

    const jsonStyle = computed(() => {
      return JSON.stringify(triangleStyle.value, null, 4)
    })
    return {
      triangleStyle,
      width,
      height,
      angle,
      bg_color,
      direction,
      jsonStyle
    }
  }
}
</script>

<style scoped>
.bg{
  display: flex;
  flex-direction: row;
  max-height: 600px;
  min-height: 600px;
  overflow: hidden;
}
.slider-item{
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.slider-item .label{
  padding-right: 10px;
}
.slider-item .ant-slider{
  width: calc(100% - 80px);
}
.bg .left{
  flex: 1;
  margin-right: 20px;
  padding: 20px;
  background: #fff;
}
.bg .right{
  flex: 1;
  padding: 20px;
  background: #fff;
}
.preview-area{
  position: relative;
  text-align: center;
  height: 100%;
  line-height: 600px;
  background: #eee;
  background-image: linear-gradient(45deg,rgba(0,0,0,.2) 25%,transparent 0,transparent 75%,rgba(0,0,0,.2) 0),linear-gradient(45deg,rgba(0,0,0,.2) 25%,transparent 0,transparent 75%,rgba(0,0,0,.2) 0);
  background-size: 30px 30px;
  background-position: 0 0,15px 15px;
}
.css-triangle{
  transition: all .6s ease;
}
</style>
