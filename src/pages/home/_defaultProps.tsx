/*
 * @Description:
 * @Version: 2.0
 * @Autor: 王敏
 * @Date: 2021-09-14 11:07:34
 * @LastEditors: 王敏
 * @LastEditTime: 2021-09-14 20:03:05
 */
export default {
  route: {
    path: '/',
    component: '@/pages/home/index',
    routes: [
      {
        path: '/patrol',
        name: '巡检管理',
        img:'./img/patrol.png',
        routes: [
          { path: '/items',name:'问题项管理', component: '@/pages/patrol/items'},
          { path: '/type',name:'问题分类管理', component: '@/pages/patrol/type' },
          { path: '/form',name:'问题表单管理', component: '@/pages/patrol/form' },
          { path: '/plan',name:'巡检计划管理', component: '@/pages/patrol/plan' },
          { path: '/task',name:'宗教巡检任务', component: '@/pages/patrol/task' },
          { path: '/record',name:'宗教巡检记录', component: '@/pages/patrol/record' },
        ],
      },
    ],
  },
}

export const breadcrumbList={
  "/patrol/items":['巡检管理','问题项管理'],
  "/patrol/type":['巡检管理','问题分类管理'],
  "/patrol/form":['巡检管理','问题表单管理'],
  "/patrol/plan":['巡检管理','巡检计划管理'],
  "/patrol/task":['巡检管理','宗教巡检任务'],
  "/patrol/record":['巡检管理','宗教巡检记录'],
}