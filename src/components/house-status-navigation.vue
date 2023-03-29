<template>
  <div class="house-status-main-ui">
    <template v-if="isHouseStatusNavigationArray">
      <div
        class="house-status-navigation-array"
        v-for="(item, index) in houseStatusNavigationArray"
        :key="index"
      >
        <div class="house-status-name">
          <img :src="makeUseOfImage + '/' + item.name + '.svg'" />
        </div>
        <div class="house-status-Chinese-name">{{ item.ChineseName }}</div>
      </div>
      <div class="icon-navigation" @click="isHouseStatusNavigationArray = false">
        <svg
          t="1648040747976"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1680"
          width="16"
          height="16"
        >
          <path
            d="M847 927h-12l-544-79a40 40 0 0 1-23-68l127-127-270-271a100 100 0 0 1 0-141l127-127a100 100 0 0 1 141 0l271 270 128-128a40 40 0 0 1 68 22l86 535v2a100 100 0 0 1-99 112z m-2-80a20 20 0 0 0 21-22l-73-457-101 101a40 40 0 0 1-57 0L337 170a20 20 0 0 0-28 0L182 298a20 20 0 0 0 0 28l298 299a40 40 0 0 1 0 57l-99 99z"
            fill="#ff7c3e"
            p-id="1681"
          />
        </svg>
      </div>
    </template>
    <template v-else>
      <div class="icon-navigation" @click="isHouseStatusNavigationArray = true">
        <svg
          t="1648040836386"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2743"
          width="16"
          height="16"
        >
          <path
            d="M720 965a100 100 0 0 1-71-29L379 666 251 793a40 40 0 0 1-68-23l-78-544v-2a100 100 0 0 1 112-109h2l535 86a40 40 0 0 1 22 68L647 397l271 271a100 100 0 0 1 0 141L790 936a100 100 0 0 1-70 29zM379 569a40 40 0 0 1 28 12l299 299a20 20 0 0 0 28 0l127-128a20 20 0 0 0 0-28L563 425a40 40 0 0 1 0-57l100-100-456-73a20 20 0 0 0-22 21l67 464 99-99a40 40 0 0 1 28-12z"
            fill="#ff7c3e"
            p-id="2744"
          />
        </svg>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'houseStatusNavigation',
  computed: {

    // 农房状况 图标
    makeUseOfImage () {
      const earthHttpString = 'http://120.24.61.35:8301';
      const earthHttpStringOld = '/gis/3dtiles/yongfen';
      return earthHttpString + earthHttpStringOld + '/sharedfarmhouse3d/make-use-of'
    },
    // 农房状况字典
    houseStatusNavigationArray () {

      return [
        { LYZK: '1', name: 'parking-lot', ChineseName: '停车场' },
        { LYZK: '2', name: 'transformer', ChineseName: '鱼塘' },
        { LYZK: '3', name: 'tourist-center', ChineseName: '游客中心' },
        { LYZK: '4', name: 'bathroom', ChineseName: '厕所' },
        { LYZK: '5', name: 'fitness-plaza', ChineseName: '休闲广场' },
        { LYZK: '6', name: 'senior-activity-center', ChineseName: '厂房' },
        { LYZK: '7', name: 'homestead-reserve', ChineseName: '宅基地预留地' },
        { LYZK: '8', name: 'garbage-collection', ChineseName: '垃圾收集点' }
      ]
    }
  },
  props: {

  },
  data () {
    return {
      isHouseStatusNavigationArray: true
    };
  }
};
</script>
<style  scoped>
.house-status-main-ui {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  background-color: transparent;
}
.house-status-main-ui > .house-status-navigation-array {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.house-status-main-ui > .house-status-navigation-array > .house-status-name {
  display: flex;
  justify-content: center;
  align-items: center;
}
.house-status-main-ui
  > .house-status-navigation-array
  > .house-status-Chinese-name {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-shadow: #000 1px 0 0, #000 0 1px 0, #000 -1px 0 0, #000 0 -1px 0;
}
.house-status-main-ui > .icon-navigation {
  position: absolute;
  width: 16px;
  height: 16px;
  right: -8px;
  bottom: -8px;
  cursor: pointer;
  pointer-events: auto;
}
</style>
