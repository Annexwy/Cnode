<template>
        <div id="article" class="clearfix" v-if="articlesData">
            <div class="head">
            <h3>{{articlesData.title}}</h3>
            <p>
                发布于<span class="time">{{articlesData.create_at|formatDate}}</span>作者
                <router-link :to="{
                    name:'user_info',
                    params:{
                        name:articlesData.author.loginname   
                   }
                }" class="loginname">{{articlesData.author.loginname}}</router-link>
                <span class="view_times">{{articlesData.visit_count}}</span>次浏览
                <span class="from"></span><span>{{articlesData|sortedTopic}}</span>
            </p>
        </div>
        <div class="inner-content markdown-body" v-html="articlesData.content"></div>
        <div class="empty"></div>
        <div class="reply">
            <div class="reply_head">
                <p>回复</p>
            </div>
            <div class="reply_content">
                <ul>
                    <li v-for="(item,index) in articlesData.replies" :key="index">
                        <div class="author_message">
                            <img :src="item.author.avatar_url" alt="">
                            <div class="author_loginname">
                                {{item.author.loginname}}
                            </div>
                            <div class="floor">
                              <span class="lou">{{index+1}}楼</span>
                              <span class="dot"></span>
                              <span  class="time">{{item.create_at|formatDate}}</span>
                            </div>
                            <div class="admire">
                              <span v-if="item.ups.length"><span>👍 </span><span>{{item.ups.length}}</span></span>
                              <span v-else></span>
                            </div>
                            <div class="reply_text">
                                <p class="markdown-body" v-html="item.content"></p>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>

        </div>
    </div>


</template>
<script>
import axios from 'axios'
export default {
  name: `Article`,
  data() {
    return {
      articlesData: null,
    }
  },
  methods: {
    getData() {
         axios
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(response => {
          this.articlesData = response.data.data;
          
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {
    '$route' (to,from) {
      this.getData()
    }
  }
};
</script>
<style>
.clearfix::after{
    content:'';
    display:block;
    clear:both;
}

#article{
   width:1097px;
   background-color:white;
   font-size:14px; 
  
  
}
#article .head{
    padding:15px;
    border-bottom:1px solid #e1e1e1;
}
 #article .head h3{
    color:black;
    font-size:24px;
    margin-bottom:15px;
}
 #article .content .head p{
    color:#7780a6;
    font-size:13px;
}
 #article .inner-content{
    padding:15px;
}

#article  .empty{
    height:10px;
    background-color:#e1e1e1;
}
#article  .reply {
    font-size:14px;
}
 #article  .reply .reply_head{
  background-color:#f6f6f6;
  padding:10px;
}
 #article  .reply .reply_head p{
  color:#333333;
}
#article .reply .reply_content ul li{
  border:1px solid #f6f6f6;
  padding:15px;
}
#article  .reply .reply_content .author_message img{
  width:32px;
  height:33px;
  display:inline-block;
  border-radius:4px;
  vertical-align:middle;
}
 #article  .reply .reply_content .author_message  .author_loginname{
  color:dimgray;
  display:inline-block;
  vertical-align:middle;
  margin:0 6px;
}
#article  .reply .reply_content .author_message  .floor{
  display:inline-block;
  color:steelblue;
  vertical-align:middle;
  font-size:12px;
}
#article  .reply .reply_content .author_message  .floor .lou{
  float:left;
  display:block;
}
 #article  .reply .reply_content .author_message  .floor .dot{
  float:left;
  display:list-item; list-style-type:disc;margin-left:1.5em;
}

 #article .reply .reply_content .author_message  .floor .time{
  float:left;
}
#article  .reply .reply_content .author_message  .floor:hover{
  text-decoration:underline;
}

 #article .reply .reply_content .author_message .admire{
  vertical-align:middle;
  float:right;

}
 #article  .reply .reply_content .author_message .reply_text{
  margin-left:55px;
}
 




</style>