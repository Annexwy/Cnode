<template>
  <div id="app">
    <Header></Header>
      <div class="project">
      <div id="main" class="clearfix">
        <router-view name="main_content" class="left"></router-view>
        <router-view name="sidebar" class="right"></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"


export default {
  name: 'App',
  components:{
    Header,
    Footer,
  }
}
</script>

<style>
*{
  margin:0px;
  padding:0px;
}
.clearfix::after{
  content: '';
  display: block;
  clear: both;
}
ul,li{
  list-style:none;
}
a{
  text-decoration:none;
}
.project{
  background-color:#e1e1e1;
}

.project  #main{
  max-width:1400px;
  margin:0 auto;
  padding:15px;
}
.project #main .left{
  float:left;
}
.project #main .right{
  float:right;
}
</style>
