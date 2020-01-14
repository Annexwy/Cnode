<template>
 <div id="content_left" class="clearfix">
            <div class="header">
                <ul>
                    <li>
                        <a href="#" :class="{active:currentActive === ''}" @click.prevent="getAllTopics">全部</a>
                    </li>
                    <li>
                        <a href="#" :class="{active:currentActive === 'good'}" @click.prevent="getGoodTopics">精华</a>
                    </li>
                    <li>
                        <a href="#" :class="{active:currentActive === 'share'}" @click.prevent="getShareTopics">分享</a>
                    </li>
                    <li>
                        <a href="#" :class="{active:currentActive === 'ask'}" @click.prevent="getAskTopics">问答</a>
                    </li>
                    <li>
                        <a href="#" :class="{active:currentActive === 'job'}" @click.prevent="getJobTopics">招聘</a>
                    </li>
                    <li>
                        <a href="#">客户端测试</a>
                    </li>
                </ul>
            </div>
             <div class="inner-content">
                <ul class="topic_lists">
                  <li v-for="(list,index) in topicListsData" :key="index" class="cell_wrapper">
                 <div class="cell clearfix">
                <router-link :to="{name: `user_info`,params:{name: list.author.loginname}}">
                  <img :src="list.author.avatar_url" alt />
                </router-link>
                <div class="reply_wrapper">
                  <span class="reply_count">{{list.reply_count}}</span>
                  <span class="seperator">/</span>
                  <span class="visit_count">{{list.visit_count}}</span>
                </div>
                <div class="sortedTopicWrapper">
                  <span
                    class="sortedTopic"
                    :class="{active: list.top===true || list.good === true}"
                  >{{list | sortedTopic}}</span>
                </div>
                <div class="listTitleWrapper">
                  <router-link
                    class="list_title"
                    :to="{
                    name: `article_content`,
                    params:{
                      id: list.id,
                      name: list.author.loginname
                    }
                  }"
                  >{{list.title}}</router-link>
                </div>
                <div class="last-replay-wrapper">
                  <span class="last_reply_at">{{list.last_reply_at | formatDate}}</span>
                </div>
              </div>
              </li> 
              <li>
                 <Pagination @getPageNumber="renderList"></Pagination>
              </li>
              </ul>
            </div>
                
        </div>

</template>
<script>
import axios from "axios";
import Pagination from "./Pagination"
export default {
  name: `TopicLists`,
  components:{
   Pagination
  },
  data() {
    return{
      topicListsData: null,
      listPage: 1,
      sortedTopic: "",
      currentActive: "",     
      };
    
  },
  
  methods: {
     getData() {
      axios
        .get(`https://cnodejs.org/api/v1/topics`, {
          params: {
            page: this.listPage,
            limit: 40,
            tab: this.sortedTopic
          }
        })
        .then(response => {
         
          this.topicListsData = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    renderList(value) {
      this.listPage = value;
      this.getData();
    },
    getAllTopics() {
      this.currentActive = "";
      this.sortedTopic = "";
      this.getData();
    },
    getGoodTopics() {
      this.currentActive = "good";
      this.sortedTopic = "good";
      this.getData();
    },
    getShareTopics() {
      this.currentActive = "share";
      this.sortedTopic = "share";
      this.getData();
    },
    getAskTopics() {
      this.currentActive = "ask";
      this.sortedTopic = "ask";
      this.getData();
    },
    getJobTopics() {
      this.currentActive = "job";
      this.sortedTopic = "job";
      this.getData();
    }
  },
   mounted() {
    this.getData();
  }
  
};
</script>
<style scoped>
.clearfix::after{
  content: '';
  display: block;
  clear: both;
}
 #content_left{
  width: 1095px;
  background-color: white;
}
.header {
  background-color: #f6f6f6;
}
.header ul {
  padding: 10px 0;
  margin: 0 15px;
}
.header ul li {
  display: inline-block;
  margin: 0 5px;
}
.header ul li a {
  display: inline-block;
  font-size: 14px;
  color: #80bd01;
  padding: 3px 6px;
}
.header ul li a.active {
  background-color: #80bd01;
  color: white;
}

.inner-content .topic_lists {
  /* border: 1px solid white; */
  border-top: none;
  
}
.inner-content .topic_lists .cell_wrapper {
  border-bottom: 1px solid #f0f0f0;
  padding: 10px;
  transition: all 0.5s;
}
.inner-content .topic_lists .cell_wrapper:hover {
  background-color: #f6f6f6;
}
.inner-content .topic_lists .cell_wrapper .cell {
  /* display: flex;
  align-items: center; */
  height: 30px;
  line-height: 30px;
}
.inner-content .topic_lists .cell_wrapper .cell a {
  display: block;
  float: left;
}
.inner-content .topic_lists .cell_wrapper .cell a img {
  width: 30px;
  vertical-align: top;
  border-radius:3px;
}
.inner-content .topic_lists .cell_wrapper .cell .reply_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  width: 70px;
}
.inner-content .topic_lists .cell_wrapper .cell .reply_wrapper .reply_count {
  font-size: 14px;
  color: #9e78c0;
}

.inner-content .topic_lists .cell_wrapper .cell .reply_wrapper .seperator {
  font-size: 14px;
  color: #abbde9;
}
.inner-content .topic_lists .cell_wrapper .cell .reply_wrapper .visit_count {
  font-size: 12px;
  color: #b4b4c5;
}
.inner-content .topic_lists .cell_wrapper .cell .sortedTopicWrapper {
  float: left;
}
.inner-content
  .topic_lists
  .cell_wrapper
  .cell
  .sortedTopicWrapper
  .sortedTopic {
  font-size: 12px;
  color: #b4b4c5;
  background-color: #e5e5e5;
  border-radius: 3px;
  padding: 0 4px;
}
.inner-content
  .topic_lists
  .cell_wrapper
  .cell
  .sortedTopicWrapper
  .sortedTopic.active {
  color: #ffffff;
  background-color: #80bd01;
}
.inner-content .topic_lists .cell_wrapper .cell .listTitleWrapper {
  float: left;
  margin: 0 4px;
}
.inner-content .topic_lists .cell_wrapper .cell .listTitleWrapper .list_title {
  font-size:15px;
  color:#333333;
}
.inner-content
  .topic_lists
  .cell_wrapper
  .cell
  .listTitleWrapper
  .list_title:hover {
  text-decoration: underline;
}
.inner-content .topic_lists .cell_wrapper .cell .last-replay-wrapper {
  float: right;
}
.inner-content
  .topic_lists
  .cell_wrapper
  .cell
  .last-replay-wrapper
  .last_reply_at {
  font-size: 12px;
  color: #888888;
}








</style>