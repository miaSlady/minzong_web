/*
 * @Description:
 * @Version: 2.0
 * @Autor: 王敏
 * @Date: 2021-09-13 15:33:01
 * @LastEditors: 王敏
 * @LastEditTime: 2021-09-14 20:04:42
 */
export default [
  {
    path: '/',
    component: '@/pages/home/index',
    routes: [
      {
        path: '/patrol',
        name: '巡检管理',
        routes: [
          { path: '/patrol/items',name:'问题项管理', component: '@/pages/patrol/items' },
          { path: '/patrol/type',name:'问题分类管理', component: '@/pages/patrol/type' },
          { path: '/patrol/form',name:'问题表单管理', component: '@/pages/patrol/form' },
          { path: '/patrol/plan',name:'巡检计划管理', component: '@/pages/patrol/plan' },
          { path: '/patrol/task',name:'宗教巡检任务', component: '@/pages/patrol/task' },
          { path: '/patrol/record',name:'宗教巡检记录', component: '@/pages/patrol/record' },
        ],
      },
    ],
  },

]