/*
 * @Description:
 * @Version: 2.0
 * @Autor: 王敏
 * @Date: 2021-09-13 15:33:01
 * @LastEditors: 王敏
 * @LastEditTime: 2021-09-13 17:59:25
 */
export default [
  { path: '/index', component: '@/pages/index' },
  {
    path: '/',
    component: '@/pages/home/index',
    routes: [
      { path: '/items', component: '@/pages/patrol/items' },
      { path: '/type', component: '@/pages/patrol/type' },
    ],
  },
]