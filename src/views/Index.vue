<template>
  <div class="main">
    <!-- 头部 -->
    <div class="header">
      <div class="bg"
           :style="{backgroundImage:'url('+data.avatar+')',backgroundRepeat:'no-repeat',backgroundColor:'rgba(0,0,0,0)',backgroundSize:'cover',filter:'blur(2px)'}">
      </div>
      <div class="name">
        <div class="left"><img :src="data.avatar"></div>
        <div class="right">
          <h3>
            <img src="../assets/imgs/brand@2x.png">{{data.name}}
          </h3>
          <p>{{data.description}}/{{data.deliveryTime}}分钟送达</p>
          <p><img src="../assets/imgs/decrease_1@2x.png"> 在线支付满28减5，满50减10</p>
        </div>
      </div>
    </div>
    <!-- 公告 -->
    <div class="bulletin">
      <img src="../assets/imgs/bulletin@2x.png"> {{data.bulletin}}
    </div>
    <!-- 内容 -->
    <div class="title">
      <p>
        <router-link to="/Goods">商品</router-link>
      </p>
      <p>
        <router-link to="/Evaluate">评价</router-link>
      </p>
      <p>
        <router-link to="/Merchant">商家</router-link>
      </p>
    </div>
    <div class="content">
      <router-view></router-view>
      <div class="footer">
        底部
      </div>
    </div>
    <!-- 底部 -->

  </div>
</template>

<script>
import { getSeller } from '../api/apis'
export default {
  data () {
    return {
      data: {}
    }
  },
  created () {
    getSeller().then(d => {
      this.data = d.data.data
      console.log(this.data)    }

    )
  }
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 100%;
    position: relative;
    color: #fcfbfb;
    .bg {
      position: absolute;
      height: 170px;
      width: 100%;
      z-index: -1;
    }
    .name {
      display: flex;
      width: 90%;
      height: 80px;
      z-index: 1;
      .left {
        img {
          width: 80px;
          height: 80px;
        }
      }
      .right {
        margin-left: 10px;
        h3 {
          font-size: 13px;
          line-height: 42px;
          display: flex;
          align-items: center;
          img {
            width: 40px;
          }
        }
        p {
          display: flex;
          font-size: 12px;
          align-items: center;
          img {
            width: 14px;
          }
        }
      }
    }
  }

  .title {
    height: 32px;
    font-size: 16px;
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #d9dde1;
  }
  .bulletin {
    height: 29px;
    font-style: 12px;
    padding: 4px;
    white-space: nowrap; /*不允许换行*/
    overflow: hidden; /*超出隐藏*/
    text-overflow: ellipsis; /*文本超出三点代替*/
    background-color: #46413d;
    color: #fcfbfb;
    img {
      width: 28px;
      height: 14px;
    }
  }
  .content {
    flex: 1;
    overflow: hidden;
    margin-bottom: 40px;
  }
  .footer {
    position: absolute;
    bottom: 0;
    height: 40px;
    width: 100%;
    background: #000;
  }
}
</style>