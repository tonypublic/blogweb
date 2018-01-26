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
          path: 'v',
          components: {
            lBodyHead: VideoBox,
            lBodyLeft: SubjectGroup
          }
        },
        {
          path: 'm',
          components: {
            lBodyLeft: MemberInfo
          }
        },
        {
          path: 'c',
          components: {
            lBodyLeft: SubjectList,
          }
        },
        {
          path: 'a',
          components: {
            lBodyLeft: SubjectAdd
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
