## uniApp清除缓存

```
//计算缓存
formatSize() {
    try {
        plus.cache.calculate(function (size) {
            console.log(size, 163)
            let sizeCache = parseInt(size);
            if (sizeCache == 0) {
                vm.fileSizeString = "0B";
            } else if (sizeCache < 1024) {
                vm.fileSizeString = sizeCache + "B";
            } else if (sizeCache < 1048576) {
                vm.fileSizeString = (sizeCache / 1024).toFixed(2) + "KB";
            } else if (sizeCache < 1073741824) {
                vm.fileSizeString = (sizeCache / 1048576).toFixed(2) + "MB";
            } else {
                vm.fileSizeString = (sizeCache / 1073741824).toFixed(2) + "GB";
            }
            console.log(vm.fileSizeString, '查看缓存')
        })
    } catch (e) {
        console.log('当前设备不是手机')
    }

},
//清理缓存
clearCache() {
    try {
        let os = plus.os.name;
        if (os == 'Android') {
            let main = plus.android.runtimeMainActivity();
            let sdRoot = main.getCacheDir();
            let files = plus.android.invoke(sdRoot, "listFiles");
            let len = files.length;
            for (let i = 0; i < len; i++) {
                let filePath = '' + files[i]; // 没有找到合适的方法获取路径，这样写可以转成文件路径
                plus.io.resolveLocalFileSystemURL(filePath, function (entry) {
                    if (entry.isDirectory) {
                        entry.removeRecursively(function (entry) { //递归删除其下的所有文件及子目录
                            uni.showToast({
                                title: '缓存清理完成',
                                duration: 2000
                            });
                            vm.formatSize(); // 重新计算缓存
                        }, function (e) {
                            console.log(e.message)
                        });
                    } else {
                        entry.remove();
                    }
                }, function (e) {
                    console.log('文件路径读取失败')
                });
            }
        } else { // ios
            plus.cache.clear(function () {
                uni.showToast({
                    title: '缓存清理完成',
                    duration: 2000
                });
                vm.formatSize();
            });
        }
    } catch (e) {

    }
},
```