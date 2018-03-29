<template>
  <div class="fours">
    <headers headerTitle="4S店"></headers>
    <section id="main" class="main">
      <article class="page si-page">
        <!-- 品牌,推荐排序 -->
        <div style="height:100%">
          <header class="page-top si-page-top">
            <div class="flex-wrap si-top-flex-wrap">
              <div class="flex si-top-item">品牌
                <i class="iconfont iconfont_up icon-icon11"></i>
              </div>
              <div class="si-line vertical-line"></div>
              <div class="flex si-top-item">推荐排序
                <i class="iconfont iconfont_up icon-icon11"></i>
              </div>
            </div>
          </header>
          <!-- 内容 -->
        <div class="page-content">
          <div class="si-shop-info">
            <ul>
              <li class="si-shop-wrap" v-for="(item, index) in cars" :key="item.id">
                <div class="si-shop-logo vertical-center">
                  <img v-lazy="item.cart_img">
                </div>
                <div class="si-shop-item">
                  <!-- 店名 -->
                  <div class="si-shop-name show-dots">{{item.storeName}}</div>
                  <div class="si-logo-discount">
                    <!-- 折扣 -->
                    <div class="si-discount">
                      <span class="si-discount-num">{{item.discount}}</span>
                      <span class="font-xs">折起</span>
                    </div>
                    <!-- 评分 -->
                    <span class="si-score-words">
                      {{item.score}}
                      <span class="font-xs si-score">分</span>
                    </span>
                  </div>
                  <!-- 四个图标 -->
                  <div><span class="si-tips-item" style="background-image: url(&quot;https://ocpvgmewj.qnssl.com/mkt_banner_ad/banner_ad_iphone_img/20170615/f163d72d-9df3-43dc-8f96-880724db358f.png&quot;);"></span><span class="si-tips-item" style="background-image: url(&quot;https://ocpvgmewj.qnssl.com/mkt_banner_ad/banner_ad_iphone_img/20170615/bb504384-3fe2-4cd8-9c6d-66cbbe4e694d.png&quot;);"></span><span class="si-tips-item" style="background-image: url(&quot;https://ocpvgmewj.qnssl.com/mkt_banner_ad/banner_ad_iphone_img/20170809/020a8a49-99e9-49ae-b677-e428422b3508.png&quot;);"></span><span class="si-tips-item" style="background-image: url(&quot;https://ocpvgmewj.qnssl.com/mkt_banner_ad/banner_ad_iphone_img/20170615/357a1463-c59e-4f52-b94a-494b548eefac.png&quot;);"></span></div>
                  <!-- 地址 -->
                  <div class=" address show-dots font-xs gray">{{item.address}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </article>
    </section>
  </div>
</template>
<script>
import Headers from '@/components/Headers/Headers'
import api from '@/api'
export default {
  created () {
    this.$http.get(api.host + '/cars')
      .then(res =>{
        // console.log(res.data)
        this.cars = res.data
      })
  },
  data () {
    return {
      cars: []

    }
  },
  components: {
    Headers
  }
}
</script>
<style scoped>
#main{
  flex: 1;
  margin-top: 4rem;
  height: 100%;
}
.main{
  left: 0;
  top: 0;
  width: 100%;
  bottom: 0;
  background: #f4f4f8;
  overflow-y: scroll;
}
.page-top{
  position: absolute;
  width: 100%;
  left: 0;
}
.page-content{
  padding-top:4rem;
}
.si-page-top{
  z-index: 9;
}
.flex-wrap{
  display: flex;
}
.si-top-flex-wrap{
  height: 4rem;
  line-height: 4rem;
  font-size: 1.2rem;
  text-align: center;
  background-color: #fff;
  border-top: 2px #ededee solid;
  border-bottom: 2px #ededee solid;
}
.flex{
  width: 100%;
  flex: 1;
}
.si-top-item{
  color: #666;
}
.vertical-line{
  position: relative;
}
.si-line::after {
  top: .1rem;
  bottom: .1rem;
  background-color: #ccc;
}
.vertical-line::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    width: 2px;
    background-color: #ececec;
    transform: scale(.5,1);
}
.page-content{
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.si-shop-wrap{
  padding: 1.2rem 0;
  height: 75px;
  position: relative;
  background: #fff;
  box-shadow: 1.2rem 1px 0 rgba(0,0,0,0.04);
}
.si-shop-logo{
  width: 75px;
  height: 75px;
  left: 1.2rem;
}
.vertical-center{
  position: absolute;
  top:50%;
  transform: translateY(-50%);
}
.si-shop-item{
  padding: 0 1.2rem 0 9rem;
  position: relative;
}
.si-shop-name{
  font-size: 1.4rem;
}
.show-dots{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.si-logo-discount{
  vertical-align: top;
  height: 100%;
  margin-top: .5rem;
}
.si-discount{
  vertical-align: top;
  color: #fa5a4b;
  float: right;
  height: 2rem;
  line-height: 2rem;
}
.si-discount-num{
  font-size: 1.4rem;
}
.font-xs{
  font-size: 1rem;
}
.si-score-words{
  vertical-align: top;
  color: #fa5a4b;
  font-size: 1.5rem;
}
.gray{
  color:#666;
}
.si-tips-item {
  width: 2rem;
  height: 1.5rem;
  color: #ffaa3f;
  margin-right: .2rem;
  display: inline-block;
  background-size: 100% 100%;
}
</style>
