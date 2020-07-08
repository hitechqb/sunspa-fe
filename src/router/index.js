import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from 'src/layouts/MainLayout'
import PageIndex from 'src/pages/Index'
import PageInOut from 'src/pages/PageInOut'
import PageSetting from 'src/pages/PageSetting'
import Error404 from 'src/pages/Error404'

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

const BASE_PATH = '/';
export const  RouterName = {
  HOME:'home',
  INOUT:'in-out',
  SETTING:'setting',
};


export default function (/* { store, ssrContext } */) {
  return new VueRouter({
    scrollBehavior: () => ({x: 0, y: 0}),
    base: BASE_PATH,
    publicPath: '/sunspa/',
    mode: 'history',
    routes: [
      {
        path: '',
        component: Main,
        children: [
          {
            path: '',
            name: RouterName.HOME,
            component: PageIndex
          },
          {
            path: BASE_PATH+RouterName.INOUT,
            name: RouterName.INOUT,
            component: PageInOut
          },
          {
            path: BASE_PATH+RouterName.SETTING,
            name: RouterName.SETTING,
            component: PageSetting
          },
        ],
      },
      {
        path: '*',
        component: Error404,
      }
    ]

    // routes,
    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    // mode: process.env.VUE_ROUTER_MODE,
    // base: process.env.VUE_ROUTER_BASE
  })
}
