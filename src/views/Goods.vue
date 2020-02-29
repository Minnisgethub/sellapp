<template>
  <div class="goods">
    <div id="left">
      <!-- betterscroll固定格式 -->
      <ul class="content">
        <!-- 快捷键vfor -->
        <!-- 之前要滚动的内容  自己的索引和当前选中索引相同，则显示s -->
        <!-- 
            :style="{样式名: 样式值, 样式名: 样式值}"
            :class="{ 类名: 是否添加此class(true有||  false没有 ), 类2: false }"
            :class="{leftGoods: true, selected: index == curSelected }
        -->
        <div :class="curSelected==i?'active':''"
             @click=clickLeft(i)
             v-for="(item,i) in data"
             :key="item.id">
          {{ item.name }}
        </div>
      </ul>
    </div>
    <div id="right">
      <ul class="content">
        <div :id="i"
             v-for="(item,i) in data"
             :key="item.id">
          <h5>{{ item.name }}</h5>
          <div v-for="child in item.foods"
               :key="child.id">
            <!-- 单独商品描述 -->
            <div class="single">
              <div class="singleLeft">
                <img :src="child.icon">
              </div>
              <div class="singleRight">
                <p>{{child.name}}</p>
                <p>{{child.description}}</p>
                <p>月售{{child.sellCount}}份 好评率{{child.rating}}%</p>
                <p>￥{{child.price}} <span v-show="child.oldPrice !==''">原价--{{child.oldPrice}}</span> </p>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { getGoods } from '../api/apis'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      // 食品数组
      data: [],
      //当前选项卡选中的索引
      curSelected: 0
    }
  },
  created () {
    getGoods().then(d => {
      this.data = d.data.data
      console.log(this.data)    }

    )
  },
  // better-scroll 
  mounted () {
    // 左侧滚动版
    new BScroll(document.getElementById('left'), {
      click: true//允许容器点击 不设置会阻止里面的点击事件
    })
    // 右侧滚动版
    this.rightBox = new BScroll(document.getElementById('right'))
  },
  methods: {
    clickLeft (i) {
      // 将点中的 i 保存
      this.curSelected = i

      // 左联动右边 600为延时
      this.rightBox.scrollToElement(document.getElementById(i), 600)
    }
  }
}
</script>

<style lang="less" scoped>
html,
body {
  height: 100%;
}
.active {
  background: #d6bfac;
}
.goods {
  font: #000;
  height: 100%;
  display: flex;
  #left {
    width: 80px;
    overflow: scroll;
    background: #f4f5f7;

    div {
      height: 60px;
      margin: 0 6px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgb(148, 137, 137);
    }
  }
  #right {
    flex: 1;
    overflow: scroll;
    h5 {
      font-size: 14px;
      color: #969aa1;
      margin: 5px 0;
    }
    .single {
      height: 80px;
      display: flex;
      margin: 10px;
      img {
        width: 60px;
        height: 60px;
      }
      .singleRight {
        margin-left: 6px;
        width: 60%;
        p {
          white-space: nowrap; /*不允许换行*/
          overflow: hidden; /*超出隐藏*/
          text-overflow: ellipsis; /*文本超出三点代替*/
        }
        p:first-child {
          font-size: 16px;
          color: #000;
        }
        p:nth-child(2) {
          font-size: 12px;
          color: #c3c6c9;
        }
        p:nth-child(3) {
          font-size: 12px;
          color: #c3c6c9;
        }
        p:nth-child(4) {
          font-size: 14px;
          color: #ee1413;
          font-weight: bold;
        }
      }
    }
  }
}
</style>