import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/todo',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
