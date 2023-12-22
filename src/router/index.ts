import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Voting from '../views/voting/index.vue'



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
      component: () => import('../views/voting/VotingView.vue'),
      meta: {
        layout: 'header'
      },
    },
    {
      path: '/like',
      name: 'like',
      component: () => import('@/views/like/LikeView.vue'),
      meta: {
        layout: 'header'
      },
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('@/views/favorite/FavoriteView.vue'),
      meta: {
        layout: 'header'
      },
    },
    {
      path: '/dislike',
      name: 'dislike',
      component: () => import('@/views/dislike/DislikeView.vue'),
      meta: {
        layout: 'header'
      },
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
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/views/DemoView.vue'),
      meta: {
        layout: 'empty'
      }
    }
  ]
})

export default router