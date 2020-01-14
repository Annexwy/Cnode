<template>
<div id="userinfo" class="clearfix">
    <div class="userInfo_left">
        <div class="header">
          <div class="mainPage">
            <router-link to="/" class="page" >主页</router-link>
          </div>
        </div>
         <div class="innerContent">  
           <ul>
            <li class="userMessage">
                <img :src="userData.avatar_url" alt/>
                <span class="author_loginname">{{userData.loginname}}</span>
            </li>
            <li class="score">
                <span>{{userData.score}}积分</span>
            </li>
            <li class="register_time">
                注册时间{{userData.create_at|formatDate}}
            </li>
          </ul>
         </div>
    </div>

    <div class="userInfo_left">
        <div class="header recent_topics">
            <p>最近创建的话题</p>
        </div>
        <div class="innerContent">
            <ul class="main_content">
                <li v-for="(item,index) in userData.recent_topics" :key="index">
                  <div class="cell clearfix">
                    <a href="#" class="small_avatar">
                    <img :src="userData.avatar_url" alt />
                    </a>
                    
                    <router-link
                       :to="{
                        name: `article_content`,
                        params: {
                          id: item.id,
                          name: item.author.loginname
                        }
                      }"
                        class="topic_title"
                    >{{item.title}}</router-link>
                      <div class="last_reply">{{item.last_reply_at | formatDate}}</div>
                    </div>
                   </li>
            </ul>
        </div>
    </div>

     <div class="userInfo_left">
        <div class="header recent_topics">
            <p>最近参与的话题</p>
        </div>
        <div class="innerContent">
            <ul class="main_content">
                <li v-for="(item,index) in userData.recent_replies" :key="index">
                  <div class="cell clearfix">
                    <div class="cell_left">
                    <a href="#" class="small_avatar">
                    <img :src="userData.avatar_url" alt />
                     </a>
                    <router-link
                       :to="{
                        name: `article_content`,
                        params: {
                          id: item.id,
                          name: item.author.loginname
                        }
                      }"
                        class="topic_title"
                    >{{item.title}}</router-link>
                    </div>
                    <div class="last_reply">{{item.last_reply_at | formatDate}}</div>
                    </div>
                   </li>
            </ul>
        </div>
  </div>
  </div>
   
</template>
<script>
import axios from "axios";
export default{
    name:'User',
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
<style>
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

#userinfo{
  width:1097px;
  background-color:#e1e1e1;
  font-size:14px;
  color: #7780a6;

}

#userinfo .userInfo_left{
  background-color:white;
  margin-bottom:15px;
}
 .userInfo_left .header{
  background-color:#f6f6f6;
  border-bottom: 1px solid #e1e1e1;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-size:14px;
  height:42px;

}
 .userInfo_left .header p{
  padding:10px;
}

 .userInfo_left .header .mainPage .mainPage{
   display:block;

}
 .userInfo_left .header .mainPage .page{
   color:#80bd01;
   display:block;
   padding:10px;
  
}
 .userInfo_left .header .mainPage:hover{
  text-decoration: underline;
}
 .userInfo_left .innerContent ul li{
  padding:4px 10px;
 
}

 .userInfo_left .innerContent .userMessage img{
  width:41px;
  height:42px;
  border-radius:4px;
}
 .userInfo_left .innerContent span{
  vertical-align:top;
}

 .userInfo_left .innerContent ul .score{
  color:#333333;
}
 .userInfo_left .innerContent ul .register_time{
  color:#ababb3;
}
 .userInfo_left .recent_topics{
  color:#333333;
}
 .userInfo_left .innerContent .main_content li{
 border: 0.1px solid #e1e1e1;
 padding:8px 10px;
}

 .userInfo_left .innerContent .main_content li .cell_left{
   float:left;
   vertical-align:middle;
 }
.userInfo_left .innerContent .main_content li .last_reply{
   float:right;
   vertical-align:middle;
 }
.userInfo_left .innerContent .main_content .small_avatar img{
   width:30px;
   height:34px;
   border-radius:4px;
   display:inline-block;
   vertical-align:middle;
 }
 .userInfo_left .innerContent .main_content .topic_title{
   color:#0088cc;
   display:inline-block;
   vertical-align:center;
   margin:0 7px;
 }
   .userInfo_left .innerContent .main_content .topic_title:hover{
    color:lightslategray;
    text-decoration:underline;
  }





</style>