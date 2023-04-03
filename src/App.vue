<template>
  <div class="main-ui cesium-3d-map-table">
    <div class="pointer-events-auto">
      <div class="tool-navigation-box">
        <div class="tool-main-ui">
          <div class="navigation-2">
            <div class="none-hover content">
              <div class="cesium-3d-map-checkbox checkbox" @click="toolNavigationGet()">
                <svg
                  v-if="isWorldMap"
                  t="1678071494324"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2378"
                  width="14"
                  height="14"
                >
                  <path
                    d="M887.904 298.208c-12.864-12.064-33.152-11.488-45.216 1.408L415.936 753.984l-233.12-229.696c-12.608-12.416-32.864-12.288-45.28 0.32-12.416 12.576-12.256 32.864 0.352 45.248l256.48 252.672c0.096 0.096 0.224 0.128 0.32 0.224s0.128 0.224 0.224 0.32c2.016 1.92 4.448 3.008 6.784 4.288 1.152 0.672 2.144 1.664 3.36 2.144 3.776 1.472 7.776 2.24 11.744 2.24 4.192 0 8.384-0.832 12.288-2.496 1.312-0.544 2.336-1.664 3.552-2.368 2.4-1.408 4.896-2.592 6.944-4.672 0.096-0.096 0.128-0.256 0.224-0.352 0.064-0.096 0.192-0.128 0.288-0.224L889.28 343.424c12.16-12.832 11.488-33.088-1.376-45.216z"
                    fill
                    p-id="2379"
                  />
                </svg>
              </div>
              <div class="image">
                <svg
                  t="1647010760045"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5024"
                  width="16"
                  height="16"
                >
                  <path
                    d="M889.18 180.37l-224-66.81a24 24 0 0 0-12.85-0.26L396.32 179l-245.51-53.23A32 32 0 0 0 112 157v666.2a32 32 0 0 0 25 31.22l255.27 57.33a24 24 0 0 0 11.17-0.15l253.89-64.24L870.68 912A32 32 0 0 0 912 881.4V211a32 32 0 0 0-22.82-30.63zM840 827.41l-180.93-54.77L433 829.84V516a36 36 0 0 0-72 0v314.94l-177-39.73V206.68L397.68 253 622 195.41V512a36 36 0 0 0 72 0V197.3l146 43.5z"
                    p-id="5025"
                    fill="#e6e6e6"
                  />
                </svg>
              </div>
              <div class="font">天地图</div>
            </div>
            <div class="none-hover content">
              <div class="cesium-3d-map-checkbox checkbox" @click="changeShow('3d')">
                <svg
                  v-if="dshow"
                  t="1678071494324"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2378"
                  width="14"
                  height="14"
                >
                  <path
                    d="M887.904 298.208c-12.864-12.064-33.152-11.488-45.216 1.408L415.936 753.984l-233.12-229.696c-12.608-12.416-32.864-12.288-45.28 0.32-12.416 12.576-12.256 32.864 0.352 45.248l256.48 252.672c0.096 0.096 0.224 0.128 0.32 0.224s0.128 0.224 0.224 0.32c2.016 1.92 4.448 3.008 6.784 4.288 1.152 0.672 2.144 1.664 3.36 2.144 3.776 1.472 7.776 2.24 11.744 2.24 4.192 0 8.384-0.832 12.288-2.496 1.312-0.544 2.336-1.664 3.552-2.368 2.4-1.408 4.896-2.592 6.944-4.672 0.096-0.096 0.128-0.256 0.224-0.352 0.064-0.096 0.192-0.128 0.288-0.224L889.28 343.424c12.16-12.832 11.488-33.088-1.376-45.216z"
                    fill
                    p-id="2379"
                  />
                </svg>
              </div>
              <div class="image">
                <svg
                  t="1647010760045"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5024"
                  width="16"
                  height="16"
                >
                  <path
                    d="M889.18 180.37l-224-66.81a24 24 0 0 0-12.85-0.26L396.32 179l-245.51-53.23A32 32 0 0 0 112 157v666.2a32 32 0 0 0 25 31.22l255.27 57.33a24 24 0 0 0 11.17-0.15l253.89-64.24L870.68 912A32 32 0 0 0 912 881.4V211a32 32 0 0 0-22.82-30.63zM840 827.41l-180.93-54.77L433 829.84V516a36 36 0 0 0-72 0v314.94l-177-39.73V206.68L397.68 253 622 195.41V512a36 36 0 0 0 72 0V197.3l146 43.5z"
                    p-id="5025"
                    fill="#e6e6e6"
                  />
                </svg>
              </div>
              <div class="font">村3D模型</div>
            </div>
            <div class="none-hover content">
              <div class="cesium-3d-map-checkbox checkbox" @click="changeShow('dltb')">
                <svg
                  v-if="dltb"
                  t="1678071494324"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2378"
                  width="14"
                  height="14"
                >
                  <path
                    d="M887.904 298.208c-12.864-12.064-33.152-11.488-45.216 1.408L415.936 753.984l-233.12-229.696c-12.608-12.416-32.864-12.288-45.28 0.32-12.416 12.576-12.256 32.864 0.352 45.248l256.48 252.672c0.096 0.096 0.224 0.128 0.32 0.224s0.128 0.224 0.224 0.32c2.016 1.92 4.448 3.008 6.784 4.288 1.152 0.672 2.144 1.664 3.36 2.144 3.776 1.472 7.776 2.24 11.744 2.24 4.192 0 8.384-0.832 12.288-2.496 1.312-0.544 2.336-1.664 3.552-2.368 2.4-1.408 4.896-2.592 6.944-4.672 0.096-0.096 0.128-0.256 0.224-0.352 0.064-0.096 0.192-0.128 0.288-0.224L889.28 343.424c12.16-12.832 11.488-33.088-1.376-45.216z"
                    fill
                    p-id="2379"
                  />
                </svg>
              </div>
              <div class="image">
                <svg
                  t="1647010760045"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5024"
                  width="16"
                  height="16"
                >
                  <path
                    d="M889.18 180.37l-224-66.81a24 24 0 0 0-12.85-0.26L396.32 179l-245.51-53.23A32 32 0 0 0 112 157v666.2a32 32 0 0 0 25 31.22l255.27 57.33a24 24 0 0 0 11.17-0.15l253.89-64.24L870.68 912A32 32 0 0 0 912 881.4V211a32 32 0 0 0-22.82-30.63zM840 827.41l-180.93-54.77L433 829.84V516a36 36 0 0 0-72 0v314.94l-177-39.73V206.68L397.68 253 622 195.41V512a36 36 0 0 0 72 0V197.3l146 43.5z"
                    p-id="5025"
                    fill="#e6e6e6"
                  />
                </svg>
              </div>
              <div class="font">地类图斑</div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="house-status-navigation-box">
        <houseStatusNavigation></houseStatusNavigation>
      </div> -->
    </div>
  </div>

  <div id="cesiumContainer"></div>
</template>
 
<script setup>
import * as Cesium from 'cesium';
import { onMounted, ref } from 'vue';
import axiosMain from 'axios';
import houseStatusNavigation from './components/house-status-navigation.vue';
let axios = axiosMain.create();
const isWorldMap = ref(true)
function toolNavigationGet () {
  console.log('%c [ toolNavigationGet ]-311', 'font-size:13px; background:pink; color:#bf2c9f;')
  const self = this;
  if (window.viewer != null) {
    isWorldMap.value = !window.viewer.imageryLayers.get(0).show;
    window.viewer.imageryLayers.get(0).show = isWorldMap.value;
    // 显式渲染新帧
    window.viewer.scene.requestRender();
    // self.setOtherSelf('isWorldMap');
    return isWorldMap.value;
  } else {
    return null;
  }
}
function updateHighlight () {
  // 3dtiles
  // 改变颜色
  if (window.earth3dFeature != null) {
    window.earth3dFeature.color = new Cesium.Color(1, 1, 1, 0.00393);
    window.earth3dFeature = null;
    window.viewer.scene.requestRender();
  }
}
function getPropertyObject (cesium3dtilesFeature) {
  console.log('%c [ cesium3dtilesFeature ]-105', 'font-size:13px; background:pink; color:#bf2c9f;', cesium3dtilesFeature)
  let propertyObject = {};
  let propertyNames = cesium3dtilesFeature.getPropertyIds();
  for (let i = 0; i < propertyNames.length; i++) {
    let propertyName = propertyNames[i];
    propertyObject[propertyName] = cesium3dtilesFeature.getProperty(propertyName);
  }
  return propertyObject;
}
const self = this;
const tileset = ref()
const dshow = ref(true)
const dltb = ref(false)
function changeShow (r) {
  if (r === '3d') {
    dshow.value = !tileset.value.show
    tileset.value.show = !tileset.value.show
  }
  if (r === 'dltb') {
    dltb.value = !window.earth3dSimpleModel.show
    window.earth3dSimpleModel.show = !window.earth3dSimpleModel.show

  }
  window.viewer.scene.requestRender();
}




onMounted(async () => {

  console.log('%c [ self ]-106', 'font-size:13px; background:pink; color:#bf2c9f;', self)
  const isWorldMap = false
  const earthHttpString = 'http://120.24.61.35:8301';
  const earthHttpStringOld = '/gis/3dtiles/deqing';
  // 创建map配置项
  const mapOptions = {
    animation: false, // 是否显示动画控件
    baseLayerPicker: false, // 是否显示图层选择控件
    fullscreenButton: false, // 全屏按钮
    vrButton: false, // vr全屏
    geocoder: false, // 是否显示地名查找控件
    homeButton: false, // 视角返回初始位置
    infoBox: false, // 是否显示点击要素之后显示的信息
    sceneModePicker: false, // 是否显示投影方式控件
    selectionIndicator: false, // 如果设置为false，则不会创建 选择指标 小部件。
    timeline: false, // 是否显示时间线控件
    navigationHelpButton: false, // 是否显示帮助信息控件
    navigationInstructionsInitiallyVisible: false, // 如果帮助最初应该可见，则为True；如果按钮才显示，则为false。
    scene3DOnly: true, // true时，每个几何实例仅将以3D渲染以节省GPU内存。
    shouldAnimate: false, // 设为true为了让场景中的动画自动播放
    selfVue: self
  }
  window.viewer = new Cesium.Viewer('cesiumContainer', mapOptions);

  window.viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
    url: earthHttpString + earthHttpStringOld + '/zhejianghuzhou'
  });
  tileset.value = window.viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
      url: 'http://120.24.61.35:8301/gis/3dtiles/deqing-all/tileset.json',
    })
  );
  // 地类图斑
  window.earth3dSimpleModel = {}
  // debugger
  window.earth3dSimpleModel = new Cesium.ImageryLayer(
    new Cesium.WebMapServiceImageryProvider({
      url: 'http://47.103.97.250:8080/geoserver/ows',
      layers: "zjddeqing_sy:dltbpub",
      parameters: {
        service: 'WMS',
        version: '1.1.1',
        format: 'image/png',
        layers: 'zjddeqing_sy:dltbpub',
        styles: 'baseStyles:dltb',
        transparent: true,
        width: 512,
        height: 512,
        srs: 'EPSG:4490'
      },
      enablePickFeatures: false
    }),
    {
      show: false
    }
  );
  window.viewer.imageryLayers.add(window.earth3dSimpleModel);

  window.earth3dFeature = null
  // 点击
  const handler = new Cesium.ScreenSpaceEventHandler(window.viewer.scene.canvas);
  handler.setInputAction((clickEvent) => {
    // debugger
    const pick = window.viewer.scene.pick(clickEvent.position);
    updateHighlight()
    console.log('%c [ pick ]-110', 'font-size:13px; background:pink; color:#bf2c9f;', pick)
    if (pick != null) {

      window.earth3dFeature = pick;
      window.earth3dFeature.color = Cesium.Color.clone(new Cesium.Color(54 / 255.0, 218 / 255.0, 193 / 255.0, 0.6));
      console.log('%c [ getPropertyObject(pick) ]-163', 'font-size:13px; background:pink; color:#bf2c9f;', getPropertyObject(pick))
      let data = getPropertyObject(pick)
      alert(`
      姓名：${data.bz}
      地址：${data.zl}
      宅基地代码：${data.zjddm}`)
    }

    window.viewer.scene.requestRender();

  }, Cesium.ScreenSpaceEventType.LEFT_CLICK)




  // 定位到初始位置
  window.viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(119.9257227, 30.564002, 600.0),
    orientation: {
      heading: Cesium.Math.toRadians(0.0), // 指向
      pitch: Cesium.Math.toRadians(-42.5), // 视角
      roll: 0.0,
    },
  });


  // 地图数组降维
  let arrayRemoveZero = (array) => {
    if (Array.isArray(array) && array.length == 1) {
      return arrayRemoveZero(array[0]);
    } else {
      return array;
    }
  }
  // 获取 degreesArray 通过 降维后的 coordinates
  let getDegreesArrayByCoordinates = (coordinates) => {

    if (
      isLongitudeLatitudeArray(coordinates[0]) &&
      isLongitudeLatitudeArray(coordinates[coordinates.length - 1]) &&
      (coordinates[0][0] != coordinates[coordinates.length - 1][0] ||
        coordinates[0][1] != coordinates[coordinates.length - 1][1])
    ) {
      coordinates.push([coordinates[0][0], coordinates[0][1]]);
      debugConsole.log('coordinates push');
    }
    let degreesArray = [];
    for (let i = 0; i < coordinates.length; i++) {
      if (isLongitudeLatitudeArray(coordinates[i])) {
        degreesArray.push(coordinates[i][0]);
        degreesArray.push(coordinates[i][1]);
      }
    }
    return degreesArray;
  }

  // 判断是否为 coordinates 经纬度坐标
  let isLongitudeLatitudeArray = (array) => {
    if (
      Array.isArray(array) &&
      array.length == 2 &&
      typeof array[0] === 'number' &&
      typeof array[1] === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  }
  // 单体化
  // 加载 3dtiles 单体化
  window.earth3dMonomer = new Cesium.Cesium3DTileset({
    shadows: Cesium.ShadowMode.DISABLED, // 取消阴影 增加性能
    url: earthHttpString + earthHttpStringOld + '/deqingdantihua/tileset.json',
    classificationType: Cesium.ClassificationType.CESIUM_3D_TILE
  });
  window.earth3dMonomer.style = new Cesium.Cesium3DTileStyle({
    color: 'rgba(1, 1, 1, 0.00393)'
    // color: "rgba(0, 0, 255, 0.5)",
  });
  window.viewer.scene.primitives.add(window.earth3dMonomer);
  console.log('%c [ window.viewer.scene.primitives ]-190', 'font-size:13px; background:pink; color:#bf2c9f;', window.viewer.scene.primitives)



  // 图标
  const result = await axios.get('/earth-farm-house-utilization-status-min.json');
  console.log('%c [ result ]-45', 'font-size:13px; background:pink; color:#bf2c9f;', result)
  // debugConsole.log('earthFarmHouseUtilizationStatus', result);
  let computedHouseStatusDictionaryArray = [
    { LYZK: '1', name: 'parking-lot', ChineseName: '停车场' },
    { LYZK: '2', name: 'transformer', ChineseName: '鱼塘' },
    { LYZK: '3', name: 'tourist-center', ChineseName: '游客中心' },
    { LYZK: '4', name: 'bathroom', ChineseName: '厕所' },
    { LYZK: '5', name: 'fitness-plaza', ChineseName: '休闲广场' },
    { LYZK: '6', name: 'senior-activity-center', ChineseName: '厂房' },
    { LYZK: '7', name: 'homestead-reserve', ChineseName: '宅基地预留地' },
    { LYZK: '8', name: 'garbage-collection', ChineseName: '垃圾收集点' }
  ]
  let utilizationStatus = new Cesium.CustomDataSource('earthFarmHouseUtilizationStatus');
  utilizationStatus.clustering.enabled = true;
  utilizationStatus.clustering.minimumClusterSize = 32;
  utilizationStatus.clustering.clusterBillboards = true;
  utilizationStatus.clustering.clusterLabels = false;
  utilizationStatus.clustering.clusterPoints = false;
  utilizationStatus.clustering.clusterEvent.addEventListener(function (entities, cluster) {
    let quantity = {};
    for (let i = 0; i < computedHouseStatusDictionaryArray.length; i++) {
      quantity[computedHouseStatusDictionaryArray[i].name] = 0;
    }
    let quantityKeys = Object.keys(quantity);

    for (let i = 0; i < entities.length; i++) {
      const name = entities[i].name;
      if (name != null && name != '') {
        quantity[name]++;
      }
    }
    // debugConsole.log('quantity', quantity);

    let nowName = computedHouseStatusDictionaryArray[0].name;
    let nowNameMax = 0;
    for (let i = 0; i < quantityKeys.length; i++) {
      let key = quantityKeys[i];
      if (quantity[key] > nowNameMax) {
        nowNameMax = quantity[key];
        nowName = key;
      }
    }
    // debugConsole.log('nowName', nowName);
    cluster.label.show = false;
    cluster.point.show = false;
    cluster.billboard.image = earthHttpString + earthHttpStringOld + '/sharedfarmhouse3d/make-use-of' + '/' + nowName + '.svg';
    cluster.billboard.width = 42;
    cluster.billboard.height = 60;
    cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;
    cluster.billboard.heightReference = Cesium.HeightReference.RELATIVE_TO_GROUND;
    cluster.billboard.show = true;
    // debugConsole.log('cluster', cluster);
  });

  const features = result.data.features;
  for (let i = 0; i < features.length; i++) {
    let coordinates = features[i].geometry.coordinates;
    const properties = features[i].properties;

    let longitude = properties.longitude;
    let latitude = properties.latitude;
    if (longitude == null || longitude == '') {
      longitude = coordinates[0];
    }
    if (latitude == null || latitude == '') {
      latitude = coordinates[1];
    }
    // debugConsole.log('longitude', longitude);
    // debugConsole.log('latitude', latitude);

    let name = '';
    for (let i = 0; i < computedHouseStatusDictionaryArray.length; i++) {
      if (properties.LYZK == computedHouseStatusDictionaryArray[i].LYZK) {
        name = computedHouseStatusDictionaryArray[i].name;
        break;
      }
    }
    if (name == '') {
      continue;
    }

    utilizationStatus.entities.add({
      name: name,
      position: Cesium.Cartesian3.fromDegrees(
        longitude,
        latitude,
        35,
        Cesium.Ellipsoid.CGCS2000
      ),
      billboard: new Cesium.BillboardGraphics({
        image: earthHttpString + earthHttpStringOld + '/sharedfarmhouse3d/make-use-of' + '/' + name + '.svg',
        width: 42,
        height: 60,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
      })
    });
  }
  window.viewer.dataSources.add(utilizationStatus);

  // 房屋

  const result2 = await axios.get('/earth-land-utilization-status-min.json');
  // debugConsole.log('土地状况:', result.data);
  const resultJson = result2.data.features;
  for (let i = 0; i < resultJson.length; i++) {
    let coordinates = arrayRemoveZero(resultJson[i].geometry.coordinates);

    const constProperties = resultJson[i].properties;
    const constName = constProperties.name;
    // debugConsole.log('coordinates', coordinates);
    const degreesArray = getDegreesArrayByCoordinates(coordinates);
    // debugConsole.log('degreesArray', degreesArray);

    const computedLandStatusColor = {
      1: new Cesium.Color(0, 1, 0, 0.5),
      2: new Cesium.Color(1, 1, 0, 0.5),
      3: new Cesium.Color(1, 0, 0, 0.5)
    };
    let conColor = computedLandStatusColor[constProperties.type];

    if (conColor != null) {
      window.viewer.entities.add({
        name: constName,
        properties: constProperties,
        position: Cesium.Cartesian3.fromDegrees(
          constProperties.longitude,
          constProperties.latitude,
          25,
          Cesium.Ellipsoid.CGCS2000
        ),
        label: new Cesium.LabelGraphics({
          text: constName,
          font: '25px sans-serif',
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
          fillColor: Cesium.Color.RED,
          outlineColor: Cesium.Color.WHITE,
          outlineWidth: 3,
          distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 1000.0)
        }),
        polygon: new Cesium.PolygonGraphics({
          hierarchy: Cesium.Cartesian3.fromDegreesArray(
            degreesArray,
            Cesium.Ellipsoid.CGCS2000
          ),
          material: Cesium.Color.clone(conColor),
          distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 2000.0)
          // heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
          // 高度参考类型：CLAMP_TO_GROUND 贴地类型，RELATIVE_TO_GROUND 地形上高度
        })
      });
    }
  }






});
</script>
<style src="./components/css/cesium-3d-map-checkbox.css"></style>
<style src="./components/css/cesium-3d-map-tree.css"></style>
<style src="./components/css/cesium-3d-map-radio.css"></style>
<style src="./components/css/cesium-3d-map-table.css"></style>
<style src="./components/css/tool-navigation.css" scoped></style>
<!-- 添加“scoped”属性以将 CSS 仅限于此组件 -->
<style src="./components/css/cesium-3d-map.css" scoped></style>
<style>
.cesium-viewer-bottom {
  display: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body,
#cesiumContainer {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
</style>