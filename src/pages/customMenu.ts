/*
 * @Description:
 * @Version: 2.0
 * @Autor: 王敏
 * @Date: 2021-09-14 17:56:09
 * @LastEditors: 王敏
 * @LastEditTime: 2021-09-14 18:01:17
 */
export default [
  {
    path: '/',
    name: '巡检管理',
    img:'./img/patrol.png',
    children: [
      { path: '/welcome/items',name:'items', component: '@/pages/patrol/items' },
        { path: '/welcome/type',name:'type', component: '@/pages/patrol/type' },
    ],
  },
  {
    path: '/demo',
    name: 'demo',
  },
];