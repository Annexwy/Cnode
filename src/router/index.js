import Vue from 'vue'
import Router from 'vue-router'
import TopicLists from '../components/TopicLists'
import SideBar from '../components/SideBar'
import UserInfo from '../components/UserInfo'
import UserSideBar from '../components/UserSideBar'
import Article from '../components/Article'
import ArticleSideBar from '../components/ArticleSideBar'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        main_content:TopicLists,
        sidebar:SideBar,
      }
    },
    {
      path:'/user/:name',
      name:'user_info',
      components:{
        main_content:UserInfo,
        sidebar:UserSideBar,
      }

    },
    {
      path:'/topic/:id&:name',
      name:'article_content',
      components:{
        main_content:Article,
        sidebar:ArticleSideBar,

      }
    }
  ]
   
})
