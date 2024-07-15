import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
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
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
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
  history: createWebHistory(process.env.BASE_URL),
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