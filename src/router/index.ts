import { createRouter, createWebHistory } from 'vue-router';
import PostsView from '@/views/PostsView.vue'
import CreateView from '@/views/CreateView.vue'
import EditView from '@/views/EditView.vue';
import NotFoundView from '@/views/NotFoundView.vue';


const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'posts',
      component: PostsView,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditView,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundView,
    },
  ],
  history: createWebHistory(),
});

export default router
