<template>
  <div class="mine">
    <headers headerTitle="我的"></headers>
    <article class="page">
      <!-- 主体 -->
      <div id="main" class="main">
        <!-- 内容 -->
        <div class="page-content">
          <!-- 顶部 -->
          <div class="top-wrap">
            <div class="top">
              <span class="settings">
                <button class="btn">签到领积分</button>
              </span>
              <div class="top-conts">
                <div class="user-photo"></div>
                <span class="click-login">点击登录</span>
              </div>
            </div>
          </div>
          <!-- 钱包 -->
          <div class="flex-wrap">
            <!-- 钱包 -->
            <div class="flex-item">
              <div class="mi-num">
                <span class="mi-word">0</span>
                <span class="font-xs">元</span>
              </div>
              <div class="mi-name font-xs">
                <span class="font-s">钱包</span>
              </div>
            </div>
            <!-- 优惠券 -->
            <div class="flex-item">
              <div class="mi-num">
                <span class="mi-word">0</span>
                <span class="font-xs">张</span>
              </div>
              <div class="mi-name font-xs">
                <span class="font-s">优惠券</span>
              </div>
            </div>
            <!-- 积分 -->
            <div class="flex-item">
              <div class="mi-num">
                <span class="mi-word">0</span>
                <span class="font-xs">分</span>
              </div>
              <div class="mi-name font-xs">
                <span class="font-s">积分</span>
              </div>
            </div>
          </div>
          <!-- 订单 -->
          <div class="form-wrap">
            <div class="form-item">
              <div class="form-label">
                我的订单
              </div>
              <div class="form-right mi-order vertical-center">
                <span class="font-s">全部订单<i class="iconfont icon-youjiantou"></i></span>
              </div>
            </div>
            <div class="mi-psc">
              <div class="flex font-s">
                <div class="mi-psc-item">
                  <i class="iconfont icon-daizhifu mi-pay gray9"></i>
                </div>
                <span class="mi-fu-margin">待支付</span>
              </div>
              <div class="flex font-s">
                <div class="mi-psc-item">
                  <i class="iconfont icon-shizhong mi-service gray9"></i>
                </div>
                <span class="mi-fu-margin">服务中</span>
              </div>
              <div class="flex font-s">
                <div class="mi-psc-item">
                  <i class="iconfont icon-zan mi-comment gray9"></i>
                </div>
                <span class="mi-fu-margin">待评价</span>
              </div>
            </div>
          </div>
          <!-- 图标 -->
          <div class="mi-hot-car clearfix">
            <!-- 我的车库 -->
            <div class="mi-hot-item fix-content">
              <i class="iconfont icon-qiche mi-car-icon"></i>
              <div class="font-s gray">我的车库</div>
            </div>
            <!-- 积分任务 -->
            <div class="mi-hot-item fix-content">
              <i class="iconfont icon-jinbi mi-integral"></i>
              <div class="font-s gray">积分任务</div>
            </div>
            <!-- 积分商城 -->
            <div class="mi-hot-item fix-content">
              <i class="iconfont icon-store mi-shop"></i>
              <div class="font-s gray">积分商城</div>
            </div>
            <!-- 热门活动 -->
            <div class="mi-hot-item fix-content">
              <i class="iconfont icon-xiaolaba mi-hot-icon"></i>
              <div class="font-s gray">热门活动</div>
            </div>
            <div class=" mi-hot-wash mi-hot-item fix-content">
              <div class="mi-car-logo"></div>
              <div class="font-s gray">&nbsp;</div>
            </div>
            <!-- 邀请有礼 -->
            <div class="mi-hot-item fix-content">
              <i class="iconfont icon-qiandai mi-invite"></i>
              <div class="font-s gray">邀请有礼</div>
            </div>
            <!-- 客服中心 -->
            <div class="mi-hot-item fix-content">
              <i class="iconfont icon-xiazai46 mi-question"></i>
              <div class="font-s gray">客服中心</div>
            </div>
            <!-- 意见反馈 -->
            <div class="mi-hot-item fix-content">
              <i class="iconfont icon-yijianfankui mi-idea"></i>
              <div class="font-s gray">意见反馈</div>
            </div>
            <!-- 评价有礼 -->
            <div class="mi-hot-item fix-content">
              <i class="iconfont icon-zan mi-favor"></i>
              <div class="font-s gray">评价有礼</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
import Headers from '@/components/Headers/Headers'
export default {
  components: {
    Headers
  }
}
</script>
<style scoped>
#main{
  position: relative;
  overflow: hidden;
  flex: 1;
  margin-top: 4rem;
}
.page{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  bottom: 0;
  background: #f4f4f8;
  overflow: hidden;
}
.page-content{
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
.top-wrap{
  width: 100%;
  height: 9rem;
  background: url(https://img06.lechebangstatic.com/my/user/topbgaa91247e8e.png) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
.top{
  padding: 1.2rem 1.5rem 0;
  color: #fff;
  position: relative;
}
.settings{
  position: absolute;
  padding: 1.2rem 1.2rem 0 0;
  right: 0;
  top: 0;
  z-index: 1;
}
.btn{
  width: 6rem;
  padding: .2rem 0;
  background: #ffe141;
  color: #fa5849;
  border: none;
  outline: none;
  font-weight: 600;
  border-radius: 1rem;
  box-shadow: 0 2px 0 #ffae00;
}
.top-conts{
  position: relative;
  padding-left: 7rem;
  height: 6rem;
  overflow: hidden;
}
.user-photo{
  position: absolute;
  top: 0;
  left: 0;
  width: 5rem;
  height: 5rem;
  border: 2px #fff solid;
  border-radius: 50%;
  background: url(https://img06.lechebangstatic.com/my/user/unman67c3718a7d.png) no-repeat center center;
  background-size: 100% 100%;
}
.click-login{
  font-size: 1.5rem;
  line-height: 4rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.flex-wrap{
  display: flex;
  box-shadow: 0 1px 0 rgba(0,0,0,0.04);
  background-color: #fff;
  text-align: center;
}
.flex-item{
  width: 100%;
  flex: 1;
  margin: .8rem 0 .5rem;
  border-right: 1px #f1f0f0 solid;
}
.mi-word{
  color: #ccc;
  font-size: 2rem;
  font-weight: 700;
}
.font-xs{
  font-size: 1rem;
}
.font-s{
  font-size: 1.2rem;
}
.mi-name{
  padding-bottom: .5rem;
  color: #666;
}
.form-wrap{
  margin: 1rem 0;
  box-shadow: 0 1px 0 rgba(0,0,0,0.04);
  position: relative;
  background: #fff;
}
.form-item{
  padding: .6rem 1.5rem;
  position: relative;
  font-size: 1.2rem;
  border-bottom: 1px solid #ccc;
}
.form-right{
  font-size: 1.2rem;
}
.mi-order{
  color: #999;
}
.mi-intergral{
  color: #ffc341;
}
.vertical-center{
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translateY(-50%);
}
.mi-psc{
  display: flex;
  padding: .5rem .6rem;
  color: #666;
  text-align: center;
}
.flex{
  width: 100%;
  flex: 1;
}
.mi-psc-item{
  position: relative;
  width: 3rem;
  padding: .5rem .2rem;
  margin: 0 auto;
}
.mi-fu-margin{
  display: block;
}
.mi-hot-car{
  height: 100%;
  background: #fff;
}
.mi-hot-item{
  height: 7rem;
  width: 33.33%;
  padding: 1.5rem 0;
  text-align: center;
  font-size: 1.2rem;
  float: left;
  border-bottom: 1px solid #f1f1f1;
  border-left: 1px solid #f1f1f1;
  position: relative;
}
.mi-pay{
  margin: 0;
  font-size: 1.8rem;
}
.mi-service{
  margin: 0;
  font-size: 1.8rem;
}
.mi-comment{
  margin: 0;
  font-size: 2rem;
}
.mi-car-icon{
  color: #96d20a;
}
.mi-integral {
    color: #ffc341;
}
.mi-shop{
    color: #ffc341;
}
.mi-hot-icon, .mi-invite{
  color: rgb(255, 130, 0)
}
.mi-question {
    color: #32c8fa;
}
.mi-idea{
  color: rgb(50, 200, 250)
}
.mi-favor {
    color: #fa5a4b;
}
.mi-invite, .mi-integral, .mi-shop, .mi-invite, .mi-hot-icon, .mi-car-icon, .mi-join, .mi-question, .mi-idea, .mi-favor {
    font-size: 2rem;
    margin-bottom: 1rem;
}
.gray9{
  color: #999;
}
.fix-content{
  box-sizing: border-box;
}
.gray{
  color: #333;
}
.mi-hot-wash{
  background: url(https://img06.lechebangstatic.com/my/user/wash708593eedc.png) no-repeat center center;
  background-size: 100% 100%;
}
</style>
