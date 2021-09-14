/*
 * @Description:全局配置文件
 * @Version: 2.0
 * @Autor: 王敏
 * @Date: 2021-09-13 15:23:51
 * @LastEditors: 王敏
 * @LastEditTime: 2021-09-14 15:51:42
 */
import routes from './routes';

export default {
  routes,// 配置式路由
  title: '民宗项目',
  mfsu: { production: { output: '.mfsu-production' } },
};
