## 声网音视频通话

[agora声网官网][https://www.agora.io/cn]

[sdk-v4.2.1][https://docs.agora.io/cn/Video/API%20Reference/web_ng/index.html]

1,运行安装命令：

```shell
npm install agora-rtc-sdk-ng --save
```

2,在你的项目的 JavaScript 代码中加入以下代码，引入这个模块：

```js
import AgoraRTC from "agora-rtc-sdk-ng"
const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
```

3,或者绑定全局属性

```
import AgoraRTC from "agora-rtc-sdk-ng";
Vue.prototype.$AgoraRTC=AgoraRTC
```

4,实例页面

```vue
<template>
    <!-- 音视频弹窗 -->
    <div class="videoPop" v-show="showVideo" id="move_div" @mousedown="changePd" @mouseup="changePu">
        <div class="top"><img :src="downUrl+$store.state.showVideoPop.imageIconUrl" alt=""><span>{{$store.state.showVideoPop.fromName||''}}</span>
        </div>
        <div class="showTime" v-show="!isShowVideo1&&!isShowVideo2">{{textAudio}}</div>
        <div class="content" v-show="isShowVideo1||isShowVideo2">
            <span id="video-container1" v-show="isShowVideo1" class="video"></span>
            <span id="video-container2" v-show="isShowVideo2" class="video"></span>
            <span class="warning" v-show="warning1">{{$t('currentNetworkIsUnstable')}}</span>
            <span class="warning2" v-show="warning2">{{$t('otherNetworkIsUnstable')}}</span>
            <span v-show="!isShowVideo2" class="video">{{$t('Calling')}}</span>
        </div>
        <div v-show="$store.getters.getEngaged&&time.s" class="time">
            <span>{{$t('callDuration')}}</span>
            <span v-show="time.h!='00'">{{time.h}}</span> <span v-show="time.h!='00'"> ：</span>
            <span>{{time.m}}</span><span> ：</span>
            <span>{{time.s}}</span>
        </div>
        <div class="bottom"><span class="left" @click="answer"
                                  :style="{'backgroundColor':isMute?'#D3D3D3': '#00c2ff'}">{{messageType?$t('Answer'): isMute?$t('muted'):$t('Mute')}}</span>
            <span class="right" @click="colseVideo($store.getters.getEngaged?1:$store.state.showVideoPop.type==1?4:3)">{{$t('hangUp')}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "audioAndVideo",
        data() {
            return {
                isShowVideo1: false,
                isShowVideo2: false,
                rtc: {
                    // 用来放置本地客户端。
                    client: null,
                    // 用来放置本地音视频频轨道对象。
                    localAudioTrack: null,
                    localVideoTrack: null,
                },
                messageType: 0,
                showVideo: false,
                conversationTime: 0,
                callTime: 0,
                duration: 0,
                audios: null,
                isMute: false,
                time: {
                    h: 0,
                    m: 0,
                    s: 0
                },
                x: 0,
                y: 0,
                l: 0,
                t: 0,
                isDown: false,
                badInt: false,
                warning1: false,
                warning2: false,
            }
        },
        computed: {
            downUrl() {
                let url = JSON.parse(localStorage.getItem("readydata")).fileBaseInfo
                    .downUrl;
                return url;
            },
            textAudio() {
                let data = this.$store.state.showVideoPop
                return data.messageType == 42 && data.type == 4 ? this.$t('voiceToElectricity') : data.messageType == 42 && data.type == 1 ? this.$t('voiceCalling') :
                    data.messageType == 44 && data.type == 1 ? this.$t('videoCalling') : this.$t('inVoiceCall')
            }
        },
        methods: {
            changePu() {
                let vm = this
                let dv = document.getElementById('move_div')
                //开关关闭
                vm.isDown = false;
                dv.style.cursor = 'default';
                vm.changeMove()
            },
            changePd(e) {
                let vm = this
                let dv = document.getElementById('move_div')
                //获取x坐标和y坐标
                vm.x = e.clientX;
                vm.y = e.clientY;

                //获取左部和顶部的偏移量
                vm.l = dv.offsetLeft;
                vm.t = dv.offsetTop;
                //开关打开
                vm.isDown = true;
                //设置样式
                dv.style.cursor = 'move';
                vm.changeMove()
            },
            changeMove() {
                let vm = this
                let dv = document.getElementById('move_div')
                //鼠标移动
                window.onmousemove = function (e) {
                    if (!vm.isDown) {
                        return;
                    }
                    //获取x和y
                    let nx = e.clientX;
                    let ny = e.clientY;
                    //计算移动后的左偏移量和顶部的偏移量
                    let nl = nx - (vm.x - vm.l);
                    let nt = ny - (vm.y - vm.t);

                    dv.style.left = nl + 'px';
                    dv.style.top = nt + 'px';
                }
            },
            startTime() {
                let vm = this;
                vm.duration = 0
                vm.conversationTime = setInterval(() => {
                    vm.duration++;
                    // 需要改变页面上时分秒的值
                    vm.time = {
                        h: vm.showNum(parseInt(vm.duration / 60 / 60)),
                        m: vm.showNum(parseInt(vm.duration / 60) % 60),
                        s: vm.showNum(vm.duration % 60),
                    }
                }, 1000)
            },
            showNum(num) {
                if (num < 10) {
                    return '0' + num
                }
                return num
            },
            async getCenter() {
                let vm = this;
                let data = vm.$store.state.showVideoPop
                vm.rtc.client = vm.$AgoraRTC.createClient({mode: "rtc", codec: "vp8"});
                //订阅远端音视频事件
                vm.rtc.client.on("user-published", async (user, mediaType) => {
                    // 开始订阅远端用户。
                    await vm.rtc.client.subscribe(user, mediaType);
                    // 表示本次订阅的是视频。
                    if (mediaType === "video" && data.messageType == 44) {
                        if (data.messageType == 44 && !vm.conversationTime) {
                            vm.startTime()
                        }
                        // 订阅完成后，从 `user` 中获取远端视频轨道对象。
                        const remoteVideoTrack = user.videoTrack;
                        if (remoteVideoTrack) {
                            remoteVideoTrack.play("video-container2")
                        }
                    }
                    // 表示本次订阅的是音频。
                    if (mediaType === "audio") {
                        if (data.messageType == 42 && !vm.conversationTime) {
                            vm.startTime()
                        }
                        // 订阅完成后，从 `user` 中获取远端音频轨道对象。
                        const remoteAudioTrack = user.audioTrack;
                        // 播放音频因为不会有画面，不需要提供 DOM 元素的信息。
                        if (remoteAudioTrack) {
                            remoteAudioTrack.play();
                        }
                    }
                    this.$store.commit('SET_engaged', true)
                });
                //监听远端用户离线
                vm.rtc.client.on("user-left", async (user, reason) => {
                    if (reason == 'ServerTimeOut') {
                        vm.colseVideo(2)
                    }
                    if (reason == 'Quit' && this.$store.getters.getEngaged) {
                        vm.colseVideo(6)
                    }
                });
                //音视频加密
                vm.rtc.client.setEncryptionConfig(data.encryptionMode, data.encryptionKey);
                //加入频道
                await vm.rtc.client.join('adcc0b90cdda42b784ff4d7773de12c3', data.channelName, data.callToken, data.uid)
                //通过麦克风采集的音频创建本地音频轨道对象。
                vm.rtc.localAudioTrack = await vm.$AgoraRTC.createMicrophoneAudioTrack();
                // 将音视频轨道对象发布到频道中。
                if (vm.rtc.localAudioTrack) {
                    await vm.rtc.client.publish(vm.rtc.localAudioTrack);
                }
                if (vm.rtc.localVideoTrack) {
                    await vm.rtc.client.publish(vm.rtc.localVideoTrack);
                }
                //监听token失效事件
                vm.rtc.client.on("token-privilege-will-expire", async () => {
                    vm.$serve.refreshCallToken({channelName: data.channelName, uid: data.uid}).then(res => {
                        vm.rtc.client.renewToken(res.data.data.callToken);
                    })
                })
                //监听网络事件
                vm.rtc.client.on('network-quality', stats => {
                    console.log(stats, 203)
                    if (stats.downlinkNetworkQuality > 4) {
                        vm.warning2 = true
                        console.log('对方网络不稳定！')
                        setTimeout(() => {
                            vm.warning2 = false
                        }, 2000)
                    }
                    if (stats.uplinkNetworkQuality > 4) {
                        console.log('当前网络不稳定！')
                        vm.warning1 = true
                        setTimeout(() => {
                            vm.warning1 = false
                        }, 2000)
                    }
                    if (stats.downlinkNetworkQuality > 5) {
                        vm.colseVideo(6)
                    }
                });
            },
            async openVedio() {
                this.isShowVideo1 = true
                // 通过摄像头采集的视频创建本地视频轨道对象。
                this.rtc.localVideoTrack = await this.$AgoraRTC.createCameraVideoTrack();
                this.rtc.localVideoTrack.play("video-container1")
            },
            async answer() {
                let vm = this
                let data = vm.$store.state.showVideoPop
                if (this.messageType == 1) {
                    this.openMuc()
                    this.$serve.connectCall({'channelName': this.$store.state.showVideoPop.channelName}).then(() => {
                        this.messageType = 0
                        if (data.messageType == 44) {
                            this.isShowVideo2 = true
                            this.openVedio()
                        }
                        this.getCenter()
                    })
                } else {
                    if (vm.isMute) {
                        if (vm.rtc.client) {
                            await vm.rtc.client.publish(vm.rtc.localAudioTrack);
                        } else {
                            this.openMuc(1)
                        }
                    }
                    if (!vm.isMute) {
                        this.openMuc()
                        if (vm.rtc.client) {
                            await vm.rtc.client.unpublish(vm.rtc.localAudioTrack);
                        }
                    }
                    vm.isMute = !vm.isMute
                }
            },
            showVideoPops() {
                let data = this.$store.state.showVideoPop
                //去电中
                if ((data.messageType == 44 || data.messageType == 42) && data.type == 4) {
                    if (data.messageType == 44) {
                        this.openVedio()
                    }
                    this.messageType = 0
                    this.showVideo = true
                    this.openMuc(1)
                }
                //来电中
                if ((data.messageType == 44 || data.messageType == 42) && data.type == 1) {
                    this.openMuc(1)
                    this.messageType = 1
                    this.showVideo = true
                }
            },
            async colseVideo(e) {
                let vm = this;
                vm.$store.commit('SET_engaged', false)
                vm.$serve.stopCall({
                    "channelName": vm.$store.state.showVideoPop.channelName,
                    "type": e,
                    'duration': e == 1 ? vm.duration : e == 6 ? vm.duration : undefined
                }).then(() => {
                })
                vm.isMute = false
                vm.openMuc(2)
                if (this.callTime) {
                    clearTimeout(this.callTime)
                }
                if (vm.conversationTime) {
                    clearInterval(vm.conversationTime)
                    vm.time = {
                        h: 0,
                        m: 0,
                        s: 0
                    }
                    vm.conversationTime = 0
                }

                if (this.rtc.client) {
                    await vm.rtc.client.leave();
                }
                if (this.rtc.localVideoTrack) {
                    vm.rtc.localVideoTrack.close();
                }
                if (this.rtc.localAudioTrack) {
                    vm.rtc.localAudioTrack.close();
                }
                vm.rtc = {
                    client: null,
                    localAudioTrack: null,
                    localVideoTrack: null,
                }
                vm.showVideo = false
                vm.isShowVideo1 = false
                vm.isShowVideo2 = false
            },
            openMuc(e) {
                if (this.audios) {
                    this.audios.pause()
                }
                if (e == 1) {
                    this.audios = new Audio(require('@/assets/CRBT/background.mp3'))
                    this.audios.loop = true
                    this.audios.play()
                }
                if (e == 2) {
                    this.audios = new Audio(require('@/assets/CRBT/call_stop.mp3'))
                    this.audios.play()
                }
            },
        }
        ,
        watch: {
            '$store.state.showVideoPop'(e) {
                console.log(e, 329)
                if (e.flag && !this.$store.getters.getEngaged) {
                    this.showVideoPops()
                }
                if (e.callTime) {//主叫等待时间
                    this.callTime = setTimeout(() => {
                        this.colseVideo(2)
                    }, 60 * 1000)
                }
                if (e.messageType == 43 && e.type == 1) {
                    if (this.$store.getters.getEngaged) {
                        this.colseVideo(1)
                    }
                }
                if ((e.messageType == 44 || e.messageType == 42) && e.type == 3) {
                    this.openMuc()
                    this.colseVideo(e.reason)
                }
                if ((e.messageType == 44 || e.messageType == 42) && e.type == 2 && this.messageType == 1) {
                    this.openMuc()
                    this.showVideo = false
                } else if ((e.messageType == 44 || e.messageType == 42) && e.type == 2 && this.messageType == 0) {//接通中
                    if (this.callTime) {
                        clearTimeout(this.callTime)
                    }
                    this.openMuc()
                    this.getCenter()
                    if (e.messageType == 44) {
                        this.isShowVideo2 = true
                    }
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .videoPop {
        min-width: 350px;
        background-color: #111F2C;
        position: fixed;
        top: calc(10% + 20px);
        /*right: calc(10% + 20px);*/
        left: 50%;
        z-index: 4;
        padding: 20px;

        .showTime {
            height: 100px;
            line-height: 100px;
            text-align: center;
            color: #FFF;
            font-size: 20px;
        }

        .top {
            display: flex;
            align-items: center;

            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }

            span {
                color: #FFF;
                font-weight: 600;
                font-family: MicrosoftYaHeiSemibold;
                margin-left: 10px;
            }
        }

        .time {
            color: #FFF;

        }

        .content {
            display: flex;
            margin: 20px 0;

            .video {
                height: 300px;
                line-height: 300px;
                text-align: center;
                width: 200px;
                display: inline-block;
                color: #FFF;
                font-size: 20px;
                /*margin: 20px 0;*/
            }

            .warning {
                color: black;
                font-weight: 600;
                position: absolute;
                top: 45%;
                left: 15%;
            }

            .warning2 {
                color: black;
                font-weight: 600;
                position: absolute;
                top: 45%;
                left: 55%;
            }

        }

        .bottom {
            display: flex;
            justify-content: space-between;

            span {
                width: 50px;
                height: 50px;
                line-height: 50px;
                border-radius: 50%;
                cursor: pointer;
            }

            span:nth-child(2) {
                background-color: red;
            }
        }
    }
</style>
```

阶段总结：

1，依靠socket推送信息，触发监听任务

2，挂断电话的方式，应以socket推送触发为主，以SDK触发为辅

3，如网络不稳定的情况下，SDK监听会优于socket推送。故两种方法必须都存在。