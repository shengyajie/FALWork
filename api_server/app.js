const express = require('express')
const app = express()
    // 导入跨域插件
const cors = require('cors');
// 导入路由模块
const router = require('./router/router.js');
// 启用跨域资源共享
app.use(cors());
// 注册路由模块，让路由模块中的代码能够使用
app.use(router)
app.use('/images', express.static('images')) // => /images 为虚拟目录
app.listen(3001, () => {
    console.log('runing http://127.0.0.1:3001');
})