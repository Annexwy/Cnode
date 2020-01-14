<template>
  <div class="sideBar">
     <div class="panel login">
      <div class="inner">
       <div class="head">
          <h4>个人信息</h4>
        </div>
        <div class="message">
         <ul>
            <li class="userMessage">
                <img :src="userData.avatar_url" alt/>
                <span class="author_loginname">{{userData.loginname}}</span>
            </li>
            <li class="score">
                <span>积分: {{userData.score}}</span>
            </li>
          </ul>
          </div>
      </div>
    </div>
    <div class="panel advertise">
      <div class="inner">
        <a href="https://www.qiniu.com">
          <img src="../assets/advertiseQiniu.png" alt="" class="qiniu">
        </a>
        <div class="empty"></div>
        <a href="https://www.aliyun.com">
          <img src="../assets/advertiseAlinode.png" alt="" class="aliyun">
        </a>
        <div class="empty"></div>
        <a href="https://www.ucloud.cn">
          <img src="../assets/advertiseUcloud.png" alt="" class="ucloud">
        </a>
      </div>
    </div>
    
    <div class="panel topics">
      <div class="inner">
        <div class="head">
          <h4>无人回复的话题</h4>
        </div>
        <div class="content">
          <ul>
            <li>
              <a heaf="">帮助电脑/手机建立直连通道</a>
            </li>
            <li>
              <a heaf="">帮助电脑/手机建立直连通道</a>
            </li>
            <li>
              <a heaf="">帮助电脑/手机建立直连通道</a>
            </li>
            <li>
              <a heaf="">帮助电脑/手机建立直连通道</a>
            </li>
          </ul>
        </div>
        </div>
    </div>
      <div class=" panel rank">
        <div class="inner">
            <div class="head">
              <h4>积分榜  TOP 100>></h4>
            </div>
            <div class="content">
              <ul>
                <li>
                  <a hraf="">21795    i5ting</a>
                </li>
                <li>
                  <a hraf="">21795    i5ting</a>
                </li>
                <li>
                  <a hraf="">21795    i5ting</a>
                </li> 
              </ul>
            </div>
            </div>
      </div>
      <div class="panel community">
        <div class="inner">
          <div class="head">
            <h4>友情社区</h4>
          </div>
          <div class="place">
            <a href="https://ruby-china.org/"><img src="../assets/ruby-china.png"></a>
            <a href="http://golangtc.com/"><img src="../assets/golang.png"></a>
            <a href="http://phphub.org/"><img src="../assets/phphub.png"></a>
            <a href="https://testerhome.com/"><img src="../assets/TesterHome.png"></a>
          </div>
        </div>
      </div>
      <div class="panel usercode">
        <div class="inner">
          <div class="head">
            <h4>客户端二维码 </h4>
          </div>
          <div class="code">
            <img src="../assets/QrCode.png">
          </div>
          <div class="user_place">
            <a href="https://github.com/soliury/noder-react-native"><p>客户端源码地址</p></a>
          </div>
        </div>
      </div>
    </div>


</template>
<script>
import axios from "axios";
export default {
  name: `UserSideBar`,
   data() {
    return {
      userData: {},
      authorName: this.$route.params.name,
      
    };
  },
    methods: {
      getData() {
        axios
          .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then(response => {
         
          this.userData = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getData();
  }
 
};
</script>
<style scoped>
 .sideBar  .panel{
  background-color: white;
  margin-bottom: 15px;
  border-radius: 4px;
  width: 290px;
}

.sideBar .panel  .inner .head {
  background-color:#f6f6f6;
}
 .sideBar .panel .inner h4{
  font-size: 14px;
  color: #333;
  font-weight: 400;
  padding: 6px 0 14px 10px;
  
}
 .sideBar  .panel .inner .message .userMessage img{
  width:41px;
  height:42px;
  margin-left:10px;
}
 .sideBar  .panel .inner  .message .userMessage span{
  vertical-align:top;
}

 .sideBar  .panel .inner .message  ul .score{
  color:#333333;
  margin-left:10px;
}
.sideBar  .login .inner p{
  font-size: 13px;
  padding: 6px 0 6px 10px;
}
 .sideBar  .login .inner p a{
  color: #778087;
  margin: 0 6px;
}

.sideBar .advertise .inner a{
  display:block;

}
.sideBar .advertise .inner a img{
  width:270px;
  vertical-align:top;
  margin:6px 10px;
  
}
 .sideBar .advertise .inner .empty{
  height:5px;
}
 .sideBar .topics .content, .sideBar .rank .content{
  margin-left:10px;
}
 .sideBar .topics .content li, .sideBar .rank .content li{
  line-height:30px;
  vertical-align:center;
  color:#778087;
  font-size:14px;
}
.sideBar .community .place a{
  margin-left:10px;
  
}
 .sideBar .community .place img{
  width:149px;
  height:45px;
  margin-top:10px;

}
.sideBar .usercode .inner .code img{
  width:195px;
  height:196px;
  margin-left:50px;
}
 .sideBar .usercode .inner .user_place a{
  text-align:center;
  color:#778087;
}
 .sideBar .usercode .inner .user_place a:hover{
  text-decoration:underline;
}








</style>