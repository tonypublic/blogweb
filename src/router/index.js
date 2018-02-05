import Vue from 'vue'
import Router from 'vue-router'

import LayoutBody from '@/components/LayoutBody'
import Login from '@/components/Login'
import ArticleList from '@/components/ArticleList'
import SubjectList from '@/components/SubjectList'
import SubjectGroup from '@/components/SubjectGroup'
import VideoBox from '@/components/VideoBox'
import SubjectAdd from '@/components/SubjectAdd'
import MemberInfo from '@/components/MemberInfo'
import MessageList from '@/components/MessageList'
import SiderBar from '@/components/SiderBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        body: LayoutBody,
      },
      children: [
        {
          path: '',
          components: {
            lBodyLeft: ArticleList,
            siderBar: SiderBar
          }
        },
        {
          path: 'p/:id',
          components: {
            lBodyLeft: SubjectGroup,
            siderBar: SiderBar
          }
        },
        {
          path: 'v/:id',
          components: {
            lBodyHead: VideoBox,
            lBodyLeft: SubjectGroup,
            siderBar: SiderBar
          }
        },
        {
          path: 'm',
          components: {
            lBodyLeft: MemberInfo,
            siderBar: SiderBar
          }
        },
        {
          path: 'c/:category',
          components: {
            lBodyLeft: SubjectList,
            siderBar: SiderBar
          }
        },
        {
          path: 'a',
          components: {
            lBodyLeft: SubjectAdd,
            siderBar: SiderBar
          }
        },
        {
          path: '/pm',
          components: {
            lBodyLeft: MessageList
          }
        }
      ]
    },
    {
      path: '/login',
      components: {
        body: Login
      }
    }
  ]
})
