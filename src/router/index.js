import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Goodlist from './../views/Goodlist'
import Title from '@/views/Title'
import Cart from './../views/Cart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },

    {
        path:'/good',
        name: 'good',
        component:Goodlist,
        children:[
            {
                path:'title',
                name:'title',
                component:Title
            }
        ]
    },
    {
        path:'/cart',
        name: 'cart',
        component:Cart,
    },

  ]
})
