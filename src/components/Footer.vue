<template>
  <footer class="footer">
    <div class="container">
        <div class="links">
          <a href="https://cnodejs.org/rss">RSS</a>
          <span class="seperator">|</span>
          <a href="https://github.com/cnodejs/nodeclub/">源码地址</a>
        </div>
        <p class="inner1">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
        <p class="inner2">
          服务器赞助商为
          <a href="https://www.ucloud.cn">
            <img src="../assets/ucloud.jpg" alt id="ucloud" />
          </a>
          ,存储赞助商为
          <a href="https://www.qiniu.com">
            <img src="../assets/qiniu.jpg" alt id="qiniu" />
          </a>
          ,由
          <a href="https://www.aliyun.com">
            <img src="../assets/alinode.jpg" alt id="alinode" />
          </a>
          提供应用性能服务
        </p>
        <p>
          新手搭建 Node.js 服务器，推荐使用无需备案的
          <a href="https://www.digitalocean.com">DigitalOcean(https://www.digitalocean.com/)</a>
        </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: `Footer`
};
</script>

<style scoped>
.footer {
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #e1e1e1;
}
.footer .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 0;
   font-size: 13px;
}
.container  .links{
    padding: 4px 0;
    font-size:14px;
}
.container .links a,.container .links span{
    color:#666666;
}
.container p{
     color:#ababab;
     margin:12px 0;
}
.container p.inner1{
  margin:3px 0;
}

.container  img {
  vertical-align: bottom;
}

.container  p:last-child a{
  color: #52bbed;
}
.container  #ucloud {
  width: 92px;
}
.container  #qiniu {
  width: 115px;
}
.container  #alinode {
  width: 166px;
}
</style>