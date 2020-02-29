//所有请求封装接口文件（统一管理方便维护）

import axios from 'axios'
// axios.defaults.baseURL='http://work.08321.org' 与其作用相似 这个无法设置超时
// 创建一个请求对象
let req = axios.create({
  baseURL: 'http://192.168.0.106:3000',
  timeout: 10000 //ms 请求10秒 为请求到显示请求超时 一般8-12s
})


// 请求商家信息
export function getSeller () {
  return req.get('/api/seller')
}
//请求商品信息
export function getGoods () {
  return req.get('/api/goods')
}