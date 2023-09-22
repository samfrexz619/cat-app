import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Voting from '../views/voting/index.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: 'empty'
      },
      component: HomeView
    },
    {
      path: '/voting',
      name: 'voting',
      component: Voting,
      meta: {
        layout: 'header'
      },
      children: [
        {
          path: '',
          // name: 'voting',
          component: () => import('../views/voting/VotingView.vue'),
          meta: {
            layout: 'header'
          },
        },
        {
          path: 'like',
          name: 'like',
          component: () => import('@/views/voting/LikeView.vue'),
          meta: {
            layout: 'header'
          },
        },
        {
          path: 'favorite',
          name: 'favorite',
          component: () => import('@/views/voting/FavoriteView.vue'),
          meta: {
            layout: 'header'
          },
        },
        {
          path: 'dislike',
          name: 'dislike',
          component: () => import('@/views/voting/DislikeView.vue'),
          meta: {
            layout: 'header'
          },
        },
      ]
    },
    {
      path: '/breeds',
      name: 'breeds',
      component: () => import('@/views/breeds/BreedsView.vue'),
      meta: {
        layout: 'header'
      },
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('@/views/gallery/GalleryView.vue'),
      meta: {
        layout: 'header'
      },
    },
  ]
})

export default router