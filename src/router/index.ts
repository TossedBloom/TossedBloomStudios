import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { 
      hideNavbar: true,
      title: 'TossedBloom Studios'
    },
  },
  {
    path: "/projects",
    name: "project",
    meta: { 
      title: 'Projects'
    },
    component: () => import("../views/ProjectsView.vue")
  },
  {
    path: "/potatodex",
    name: "potato-dex",
    meta: { 
      title: 'PotatoDex - Potato Almanac'
    },
    component: () => 
      import("../components/project/tatodex/site/Index.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Check if the route has meta information for the title
  if (to.meta.title) {
    document.title = to.meta.title as string;
  } else {
    // Default to a generic title if not provided
    document.title = 'Your Default Title';
  }
  next();
});

export default router;