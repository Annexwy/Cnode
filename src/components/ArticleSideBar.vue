<template>
  <div class="sideBar">
     <div class="panel login">
      <div class="inner">
        <h4>CNode：Node.js专业中文社区</h4>
        <p>
          您可以<a href="#">登录</a>或<a href="#">注册</a>,也可以
        </p>
        <button>
          <a href="#">通过 GitHub 登录</a>
        </button>
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
    
    <div class="panel recent_topics">
    <div class="head">
        <h4>
            作者最近创建的话题
        </h4>
    </div>
    <div class="inner_content" v-if="recentFiveTopics.length">
        <ul>
            <li v-for="(item,index) in recentFiveTopics" :key="index">

                <router-link :to="{
                    name:'article_content',
                    params:{
                        id:item.id,
                        name:item.author.loginname
                    }
                }">{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</div>
<div class="panel recent_replies">
    <div class="head">
        <h4>
            作者最近参与的话题
        </h4>
    </div>
    <div class="inner_content" v-if="recentFiveReplies.length">
        <ul>
        <li v-for="(item,index) in recentFiveReplies" :key="index">
            <router-link :to="{
                    name:'article_content',
                    params:{
                        id:item.id,
                        name:item.author.loginname
                    }
                }">{{item.title}}</router-link>

        </li>
        </ul>
    </div>
</div>
</div>
</template>
<script>
import axios from 'axios'
export default{
    name:'ArticleSideBar',
    data(){
        return{
            authorData:{},
            recentFiveTopics:{},
            recentFiveReplies:{},
        }
    },
    methods:{
        getData(){
            axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
            .then((response)=>{
                this.authorData = response.data.data
                this.recentFiveTopics = response.data.data.recent_topics.slice(0,5)
                this.recentFiveReplies = response.data.data.recent_replies.slice(0,5)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    },
    mounted(){
        this.getData()
    },
    watch:{
        '$route'(to,from){
            this.getData()
        }
    }
}

</script>
<style scoped>

 .sideBar  .panel{
  background-color: white;
  margin-bottom: 15px;
  border-radius: 4px;
   width: 290px;
}

.sideBar  .panel .head{
    background-color:#f6f6f6;
    padding:10px;
    color: #333;
    font-size: 14px;
}

 .sideBar  .panel .inner h4{
  font-size: 14px;
  color: #333;
  font-weight: 400;
  padding: 6px 0 14px 10px;
  
}
.sideBar   .login .inner p{
  font-size: 13px;
  padding: 6px 0 6px 10px;
}
 .sideBar   .login .inner p a{
  color: #778087;
  margin: 0 6px;
}
.sideBar   .login .inner button{
  background-color: #5bc0de;
  border: none;
  padding: 8px 12px ;
  margin-left:10px;
  margin-bottom:10px;
  border-radius: 4px;
}
.sideBar   .login button a{
  color: white;
  font-size: 14px;
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
 .sideBar .panel .inner_content{
     padding:10px;
     line-height:25px;
     color:#333; 
 }
 












</style>