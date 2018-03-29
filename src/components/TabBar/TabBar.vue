<template>
    <nav>
        <router-link to="/" class="home">
            <span></span>
            首页
        </router-link>
        <router-link to="/shop" class="shop">
            <span></span>
            4S店
        </router-link>
        <router-link to="/headline" class="headline">
            <span></span>
            头条
        </router-link>
        <router-link to="/mine" class="mine">
            <span></span>
            我的
        </router-link>
    </nav>
</template>
<script>
export default {
  
}
</script>
<style>
nav{
    position: fixed;
    bottom:0;
    width:100%;
    height:5rem;
    background-color: #fff;
     }
nav a{
    float: left;
    width:25%;
    height: 4rem;
    padding-top:1rem;
    text-align: center;
    color:#777;
    position: relative;
 }
 nav a span{ 
     display: block;
     width:100%;
     height:2rem;
     background-size: auto 2rem;
     background-position: center 0;
     margin-bottom: .5rem;
     background-repeat: no-repeat;
  }
@keyframes navs{
  0%{
    background-size: auto .6rem;
  }
  20%{
    background-size: auto 2.2rem;
  }
  40%{
    background-size: auto 1.8rem;
  }
  60%{
    background-size: auto 2.06rem;
  }
  80%{
    background-size: auto 1.94rem;
  }
  100%{
    background-size: auto 2rem;
  }
}
nav>a.home>span{ 
    background-image: url("./images/home.gif")  
}
nav>a.shop>span{
    background-image: url("./images/shop.gif")
}
nav>a.headline>span{
    background-image: url("./images/headline.gif")
}
nav>a.mine>span{
    background-image: url("./images/mine.gif")
}
nav>a.home.router-link-exact-active>span{
  background-image: url("./images/home-active.gif");
}
nav>a.shop.router-link-exact-active>span{
  background-image: url("./images/shop-active.gif");
}
nav>a.headline.router-link-exact-active>span{
  background-image: url("./images/headline-active.gif");
}
nav>a.mine.router-link-exact-active>span{
  background-image: url("./images/mine-active.gif");
}
nav>a.router-link-exact-active>span{
  animation: navs 1s;
}
nav>a.router-link-exact-active{
  color: #fa5a4b; 
}
</style>

