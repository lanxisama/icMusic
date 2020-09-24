# icMusic

v-avatar    用户点击上传图片
            前端页面回显
            


2020-09-08 更新
* 音乐分标签上传：需要更新mongoose Schema
* 参赛评委avatar上传更新
* 用户账号信息设置 ：待设计
* 后端静态资源每小时执行一次清除过期数据脚本
        (文件存储的时候随机命名，同时把originName跟新生成的名字)
        {
            type:'funny',
            name:'5a655fs66689wwassd335'
            originationalName:'而立.mp3'
        }
    服务器端应对上传的文件大小做处理    
* 前端：根据新的Schema重新显示，重新设计UI
*       topBar BUG 页面跳转未和topBar同步

~~音乐播放优化：当前页面只能有一个audio进行播放，当切换的时候，旧的pause()，新的play()~~
    

            