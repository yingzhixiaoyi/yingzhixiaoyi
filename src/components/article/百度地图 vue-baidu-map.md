## 百度地图 vue-baidu-map 

1. 百度示例网址：http://lbsyun.baidu.com/jsdemo.htm#webgl4_0
2. 百度JSAPI网址：http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_webgl_1_0.html

#### 引入使用

```vue
//main.js

import BaiduMap from 'common/components/vue-baidu-map'
import styleJson from 'common/mapStyle/custom_map_config4-2.json'//自定义地图样式

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'CpmeIdqjNe7lNu74ZGEv6UO2IGQrVcqT'
});

//页面vue
 <baidu-map :center="centers" :zoom="zoom" 
            @ready="handler" class="map" 
            v-if="refresh" :ak="ak"
            />
            
//centers:视角中心点
//zoom:视角范围大小
//@ready：地图加载完成回调函数
//class="map"： 需要设置height值
//refresh： 用于强制刷新地图
//ak：页面ak,如全局ak已写，则此处可不需要这个属性

//地图回调
  handler({BMap, map}) {
        let vm = this;
        vm.BMap = BMap;
        vm.map = map;
		//添加导航功能，作用1：将途经点画线至道路中，作用2：导航出线路
 		vm.DrivingRoute = new BMap.DrivingRoute(map, {
                    onSearchComplete: vm.onSearchComplete//导航回调，可得到线路数据数组
                })
                vm.map.setMapStyleV2({styleJson: styleJson});//添加地图自定义样式

 		// 判断是否已经定位过了
                if (localStorage.getItem('localPos') == null) {
                    // 浏览器定位
                    let geolocation = new BMap.Geolocation();
                    geolocation.getCurrentPosition(function (r) {
                        console.log('r--------------------------------------', r)
                        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                            localStorage.setItem('localPos', JSON.stringify(r))
                            vm.getPositionCallBack(r)//未定位，获取定位后回调
                        } else {
                            vm.$Message.warning('定位失败，请刷新重试！')
                        }
                    }, {enableHighAccuracy: true})

                } else {
					//已定位，获取定位后回调
                    this.getPositionCallBack(JSON.parse(localStorage.getItem('localPos')))
                }
                vm.interval1 = setInterval(vm.getVehicleStat(), 3 * 60 * 1000)
		......
        // 添加鼠标滚动缩放
        map.enableScrollWheelZoom();
        //添加比例尺控件
        map.addControl(new BMap.ScaleControl());
        //添加地图类型控件
        map.addControl(new BMap.MapTypeControl());
        //设置地图皮肤
        map.setMapStyleV2({styleJson: styleJson});
}

 //获取导航路线
            Driving(start, end, passingList) {
                let vm = this
                if (!vm.flagNumber) {//设置某情况下，清除之前的导航结果
                    vm.DrivingRoute.clearResults()
                }
                vm.DrivingRoute.search(start, end, passingList)
            },

//获取导航结果
            onSearchComplete(e) {
                let vm = this
                vm.flagNumber++
                let list = e['Xq'] ? e['Xq'][0]['bk'][0]['Zq'] : e['Ol'] ? e['Ol'][0]['Wh'][0]['yr'] : []
                if (list.length && vm.flagNumber < 3) {//获取到结果后，且满足相应条件
                    if (vm.flagNumber == 1) {//将获取到的数据存到线路集合中
                        vm.polyLines[0] = list
                        vm.Driving(vm.againStart, vm.end)//获取上条集合之后，再进行下一段线路的搜索，否则后面的数据到颠倒
                    }
                    if (vm.flagNumber == 2) {
                        vm.polyLines[1] = list
                        vm.flagNumber = 0
                        vm.passingList = []
                        vm.viewShow()//条件满足后，再展示
                    }
                }
            }，                                   
                                                    
//展示线路、站点、车辆
            viewShow() {
                let vm = this
                vm.map.clearOverlays()
                vm.markers.forEach(item => {
                    vm.addMarker(item)
                })
                vm.polyLines.forEach((item, index) => {
                    vm.addPolyline(item, index)
                })
            },

//添加Marker
 	addMarker(item, index) {
        let vm = this
        let point = item.point ? new vm.BMap.Point(item.point.lng, item.point.lat) : 
		new vm.BMap.Point(item.longitude, item.latitude);
        let marker = new vm.BMap.Marker(point, {
            icon: new vm.BMap.Icon('图片路径', new vm.BMap.Size(50, 50)),
            offset: new vm.BMap.Size(10, -16)
          })
        vm.addLabel(marker, item); //添加label
        vm.map.addOverlay(marker);//挂载标注
},

 //添加标注label
  addLabel(markers, item) {
        let vm = this
        let label = new vm.BMap.Label(item['name'], {offset: new vm.BMap.Size(24, -20)})
 		//	label设置样式
          label.setStyle({
            color: "black",
            fontSize: "12px",
            height: '34px',
            border: null,
            padding: '5px',
            background: `url(${labels})  `
          });
        markers.setLabel(label);
},

   //添加标注title
    addTitle(markers, point, item) {
        let vm = this
        let opts = {
          width: 200,     // 信息窗口宽度
          height: 100,     // 信息窗口高度
          title: item.name, // 信息窗口标题
        };
        let sContent = `<h2 style='margin:0 0 5px 0;padding:0.2em 0'>
            ${item && item.title ? item.title : '标题'}</h2><h5>${item && item.detail ?
            item.detail : '内容'}</h5>`;
        let infoWindow = new vm.BMap.InfoWindow(sContent, opts);  // 创建信息窗口对象
        markers.addEventListener("mouseover", function (e) {
          vm.map.openInfoWindow(infoWindow, point); //开启信息窗口
        });
        markers.addEventListener("mouseout", function (e) {
          vm.map.closeInfoWindow(infoWindow, point); //关闭信息窗口
        });
},
                    
//添加线路polyline
            addPolyline(data, index) {
                let obj = {}, res = [];
                data.forEach(item => {//过滤掉重复数据
                    let i = item.lng + item.lat + ''
                    if (obj[i] != i) {
                        res.push(item)
                        obj[i] = i
                    }
                })
                let vm = this
                let path = 'M0 0 L-4 2 L0 -2 L4 2 Z';
                let sy = new vm.BMap.Symbol(path, {
                    fillColor: "#fff",
                    fillOpacity: 0.6,
                    scale: 0.8,//图标缩放大小
                    strokeColor: "#fff",//设置矢量图标的线填充颜色
                    strokeWeight: 0,//设置线宽
                });
                let wid = res.length < 200 ? '40%' : '5%'//控制集合length的箭头间距
                let icons = new vm.BMap.IconSequence(sy, '5%', wid);//
                let polyline = new vm.BMap.Polyline(res, {
                    icons: [icons],//添加线路箭头
                    strokeColor: !index ? 'dimgray' : index == 1 ? 'mediumseagreen' : 'lime',
                    enableClicking: false,//是否响应点击事件，默认为true
                    strokeWeight: '6',//折线的宽度，以像素为单位
                    strokeOpacity: 0.5,//折线的透明度，取值范围0 - 1
                });
                vm.map.addOverlay(polyline);
                if (vm.goCenter) {
                    vm.map.setViewport(res)//根据提供的地理区域或坐标设置地图视野，调整后的视野会保证包含提供的地理区域或坐标
                    vm.goCenter = false
                }
            },



//添加路书LuShu
	npm i bmaplib.lushu
	import LuShu from 'bmaplib.lushu'
 	addLushu(){
  	let myIcon = new vm.BMap.Icon(car, new vm.BMap.Size(50, 20), {    //小车图片
          imageOffset: new vm.BMap.Size(0, 0),    //图片的偏移量。为了是图片底部中心对准坐标点。
        });
          let lushu = new LuShu(vm.map, ['轨迹集合'], {
            defaultContent: "",
            autoView: true, //是否开启自动视野调整，如果开启那么路书在运动过程中会根据视野自动调整
            icon: myIcon,
            enableRotation: true, //是否设置marker随着道路的走向进行旋转
            speed: 100,
            landmarkPois: []
          });
          lushu.start();
}

  //获取定位
   getPosition(BMap, map){
 	new BMap.Geolocation().getCurrentPosition(function (r) {console.log(r)}）
}

  //强制刷新地图
     refreshMap() {
        this.refresh = false;
        this.$nextTick(() => {
          this.refresh = true
        })
}
```

#### 阶段总结

1. 地图的各方法单独抽离，以备使用
2. 地图要设置高度，不然不显示
3. 经纬度使用时，检查是否NEW过，否则不显示