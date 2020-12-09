## uniApp 地图使用

1、[官网地址][https://uniapp.dcloud.io/component/map]，[插件市场地址][https://ext.dcloud.net.cn/]

2、地图分显示，和获取定位两部分；显示可选择腾讯地图、高德地图、百度地图

3、获取定位方法由 uniApp 提供，坐标为固定的 gcj02、即使设置类型 wgs84,也是得到 gcj02 坐标

```vue
<template>
    <map :controls="controls" :latitude="latitude" :longitude="longitude" :markers="markers" :polyline="polyline" :scale="scale" :show-compass="true" :show-location="true" :style="mapStyle" @controltap="controltap" @regionchange="regionchange" id="map2">
</template>

```

## 创建地图

```
onReady() {
			let vm = this
			vm.map = uni.createMapContext('map2', this)
			vm.getLocation()
		},

methods: {
		//获取定位
			getLocation() {
				let vm = this
				uni.getLocation({
					type: 'gcj02',
					geocode: true,//获取城市具体地址
					success: (e) => {
						if (e.address.city) {
							vm.cityName = e.address.city
							vm.poiName = e.address.poiName
							vm.moveToLocation()
						}
						vm.latitude = e.latitude
						vm.longitude = e.longitude
						vm.run = 'start'
						vm.addDingwei()
					},
					fail: (e) => {
						vm.longitude = 113.953834 //e.longitude
						vm.latitude = 22.540235 //e.latitude
						vm.run = 'start'
						vm.addDingwei()
					},
				})
			},  
			//移动到指定位置
			moveToLocation() {
				let vm = this
				let falg = Object.keys(vm.map).length
				if (falg) {
					vm.map.moveToLocation({
						longitude: vm.longitude,
						latitude: vm.latitude,
						success: () => {}
					})
				}
			}，  
			//添加定位点
			addDingwei() {
				let vm = this,arr = [];
				arr.push({
					id: 0,
					latitude: vm.latitude,
					longitude: vm.longitude,
					iconPath: '../../static/dingwei.png',
					callout: {
						content: '删除此站点', //文本
						color: '#ffffff', //文字颜色
						fontSize: 14, //文本大小
						borderRadius: 2, //边框圆角
						bgColor: '#00c16f', //背景颜色
						display: 'BYCLICK', //点击显示
					},
				})
				vm.markers = arr
			},  
			//点击控件
			controltap(e) {
				let vm = this
				if (e.detail.controlId === 0) {
					vm.getLocation()
				}
				if (e.detail.controlId === 1) {
					uni.chooseLocation({
						success: (e) => {
							vm.getLine(e)
						}
					})
				}
			},  
			//移动地图位置触发获取地图中心店坐标
			regionchange(e) {
				let vm = this
				if (e.type != 'begin' && vm.run == 'start') {
					vm.getCenterLocation()
				}
			},
			}

```




## 唤醒第三方地图 

![1607480370610](https://imgkr2.cn-bj.ufileos.com/ef3dbbd2-8aa1-495d-a621-7eaebc8f9269.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=Z2TAGYwPE%252F72Dn3Wr6fjz3yiRDY%253D&Expires=1607568363)

```


//引入插件
import Map from '@/js_sdk/fx-openMap/openMap.js'
              //既有起点也有终点
             var options = {
              	origin: { //导航起点坐标和名称,如果不传则起点为当前位置
              		latitude: vm.latitude,
              		longitude: vm.longitude,
              		name: "大冲商务中心C座"
              	},
              	destination: { //导航终点点坐标和名称
              		latitude: item.latitude,
              		longitude: item.longitude,
              		name: item.name
              	},
              	mode: "drive" //导航方式 公交：bus驾车：drive（默认）,步行：walk,骑行：bike
              }
              //只有有终点(起点默认为当前位置)
              var options = {
              	destination: { //导航终点点坐标和名称
              		latitude: item.latitude,
              		longitude: item.longitude,
              		name: item.name
              	},
              	mode: "drive" //导航方式 公交：bus驾车：drive（默认）,步行：walk,骑行：bike
              }
              Map.openMap(options, 'gcj02')
```

## app 端生成导航线路

![1607481679376](https://imgkr2.cn-bj.ufileos.com/82259ecc-4a83-4df6-8058-1cbf59e1ce08.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=pi0t0gN2KxAGgfqPxy4OlHHChL8%253D&Expires=1607568425)

```
//引入插件
import Amap from '../../js_sdk/Lyn4ever-gaodeRoutePlanning/lyn4ever-gaode.js';  

//搜索路线
getLine(item) {
let vm = this
let latitude = JSON.stringify(vm.latitude).slice(0, 9),
	longitude = JSON.stringify(vm.longitude).slice(0, 10);
let startPoi = longitude + ',' + latitude;
let wayPoi = "";
let endPoi = item.longitude + ',' + item.latitude;
vm.polyline = []
if (window === undefined) {
	Amap.line(startPoi, endPoi, wayPoi, function(res) {
		vm.polyline.push(res)
	});
	Amap.markers(startPoi, endPoi, wayPoi, function(res) {
		vm.markers = res
	});
} else {
	window.open('https://map.baidu.com/')
}
},
```

#### 阶段总结

1，运行环境判断 window === undefined？“app”：“h5”

2，变量样式获取使用 :style="mapStyle"||:style="coverView()"

3，造轮子之前，先查看插件库，研究研究
