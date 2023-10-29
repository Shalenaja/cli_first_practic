import { createRouter, createWebHistory } from 'vue-router';

import IndexComponent from '@/views/IndexComponent.vue';
import BlogComponent from '@/views/BlogComponent.vue';
import BlogDetailsComponent from '@/views/BlogDetailsComponent.vue';
import ProjectComponent from '@/views/ProjectComponent.vue';
import ProjectDetailsComponent from '@/views/ProjectDetailsComponent.vue';
import NotFoundComponent from '@/views/NotFoundComponent'

const routes = [
    { path: '/',
      name: 'IndexComponent',
      component: IndexComponent
    },
    { path: '/BlogComponent/:pageNumber?',
      name: 'BlogComponent',
      component: BlogComponent
    },
    { path: '/BlogDetailsComponent',
      name: 'BlogDetailsComponent',
      component: BlogDetailsComponent
    },
    { path: '/ProjectComponent/:pageNumber?',
      name: 'ProjectComponent',      
      component: ProjectComponent     
    },
    { path: '/ProjectDetailsComponent',
      name: 'ProjectDetailsComponent',
      component: ProjectDetailsComponent
    },
    { path: '/:CatchAll(.*)',
      name: 'NotFoundComponent',
      component: NotFoundComponent
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

 export default router