<template>
<header class="header">
    <div class="container clearfix">
            <router-link  :to="{name:'root'}" class="logo">
            <img  src="../assets/cnode.svg" alt="" title="">
            </router-link>
            <form class="search">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-Search"></use>
                </svg>
                <input type="text" value="" placeholder="">
            </form>
            <ul class="menu">
                <li>
                    <a href="#">首页</a>
                </li>
                <li>
                    <a href="#">新手入门</a>
                </li>
                <li>
                    <a href="#">API</a>
                </li>
                <li>
                    <a href="#">关于</a>
                </li>
                <li>
                    <a href="#">注册</a>
                </li>
                <li>
                    <a href="#">登录</a>
                </li>
            </ul>
     </div>
  </header>
        
</template>

<script>
export default {
  name: 'Header',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon {
            width: 1em;
            height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
            color:#585958;
        }
*{
    margin: 0;
    padding: 0;
}
ul,li{
    list-style: none;
}
a{
    text-decoration: none;
}
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
.header {
     height: 50px;
     background-color: #444444;
}
.container{
    width:1400px;
    margin:0 auto;
}
.container .logo{
    float:left;
    position:relative;
    margin:5px 0;
}
.container img{
    margin-top:3px;
    width:128px;
}
.container .search{
    float:left;
    position:relative;
    margin:7px 0 7px 20px;
}
.container .search svg{
    position:absolute;
    left: 7px;
    top: 13px;
    width:15px;
    height:15px;
}

.container .search input{
    border:none;
    outline:none;
    width:238px;
    height:30px;
    display:block;
    margin-top:5px;
    background-color:#888888;
    border-radius:20px;
}
.container .search input:hover{
    background-color:white;
}
.container .search input:focus{
    background-color:white;
}
.container  .menu {
    float: right;
}
.container  .menu li{
   display:inline-block;
}

.container .menu li a {
    display:inline-block;
    font-size: 14px;
    color:#cccccc;
    margin:15px 11px;
}
.container .menu li a:hover{
    color:white;
}
</style>
