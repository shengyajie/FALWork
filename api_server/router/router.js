// router.js 路由模块
const express = require('express')
const router = express.Router()

// 导入业务处理模块
const ctrl = require('../constroler/controler.js')


router.get('/', ctrl.getRoot)

// 获取所有英雄列表
router.get('/getAllCourse', ctrl.getAllCourse)



// 导出路由模块
module.exports = router