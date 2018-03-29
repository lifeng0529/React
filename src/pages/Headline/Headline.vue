<template>
  <div class="headeline">
    <section id="main" class="main">
      <article class="page">
        <div class="page-content">
          <div class="news-wrap">
            <ul class="form-wrap">
              <li class="form-item" v-for="(item, index) in lists" :key="item.id">
                <div class="ai-items">
                  <!-- 预览图片 -->
                  <div class="ai-items-logo">
                    <img v-lazy="item.preview_img">
                  </div>
                   <!-- 新闻内容 -->
                   <div class="ai-items-content">
                     <div class="ai-content-top">{{item.title}}
                       <div class="ai-content-bottom">
                         <span class="ai-content-title">{{item.auther}}</span>
                         <div class="ai-content-visited">
                           <img src="">
                           <span class="ai-bottom-visited">{{item.view}}</span>
                         </div>
                       </div>
                     </div>
                   </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
      
  </div>
</template>
<script>
import api from '@/api'
export default {
  created() {
    this.$http.get(api.host + '/article_list')
      .then(res =>{
        // console.log(res.data)
        this.lists = res.data
      })
  },
  data() {
    return {
      lists: []
    }
  }
  
}
</script>
<style scoped>
.page {
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
  overflow: scroll;
  box-sizing: border-box;
}
.news-wrap{
  background: #fff;
}
.form-wrap{
  margin: 0;
  width: 100%;
  position: relative;
}
.form-item{
  padding: 1rem 1.2rem;
  position: relative;
  font-size: 1.2rem;
  box-shadow: 1.2rem 1px 0 rgba(0,0,0,0.04);
}
.ai-items{
  position: relative;
}
.ai-items-logo{
  display: inline-block;
  width: 110px;
  height: 75px;
  position: relative;
}
.ai-items-logo img{
  width: 100%;
  height: 100%;
  border-radius: .3rem;
}
.ai-items-content{
  display: inline-block;
  position: absolute;
  left: 10rem;
  right: 0;
  height: 100%;
}
.ai-content-top{
  color: #333;
  font-size: 1.2rem;
  display: block;
  margin-top: .5rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ai-content-bottom{
  position: absolute;
  bottom: .5rem;
  right: 0;
  left: 0;
  color: #999;
}
.ai-content-visited{
  display: inline-block;
  float: right;
}
</style>
