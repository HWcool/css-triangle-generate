<template>
  <div class="container">
    <header>
      <h2>前端武器库之[三角形样式生成器]</h2>
    </header>
    <main>
      <css-triangle />
    </main>
  </div>
</template>

<script>
import cssTriangle from './components/css-triangle.vue'
import { ref } from 'vue';
export default {
  name: 'App',
  components: {
    cssTriangle
  },
  setup() {
    const value = ref(0);
    return {
      value
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background: #ddd;
}
.container{
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
header{
  height: 100px;
  text-align: left;
  color: #ddd;
}
header h2{
  line-height: 100px;
}
main{
  max-height: 600px;
  min-height: 600px;
  overflow: hidden;
}
footer{
  height: 80px;
  margin-top: 20px;
  background: #fff;
}
</style>
