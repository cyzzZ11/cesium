<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
onMounted(() => {
  const viewer = new Cesium.Viewer('cesiumContainer')

})
</script>

<template>
  <div id="cesiumContainer"></div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
#cesiumContainer {
  height: 600px;
}
</style>
