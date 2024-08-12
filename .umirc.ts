import { defineConfig } from '@umijs/max';
const logo ='https://s.cn.bing.net/th?id=OJ.WNm0NiYXMw3UXA&qlt=80&o=6&dpr=1.8&pid=SANGAM';
export default defineConfig({
  antd: {
    // compact: true,紧凑主题
    configProvider: {}
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  favicons: [logo],

  /**
   * @name 开启 hash 模式
   * @description 让 build 之后的产物包含 hash 后缀。通常用于增量发布和避免浏览器加载缓存。
   * @doc https://umijs.org/docs/api/config#hash
   */
  hash: true,
  layout: {
    title: '农产品溯源管理系统',
    locale: false, // 默认开启，如无需菜单国际化可关闭
  },
  alias: {
    '@': './src',
  },
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      name: '登录',
      path: '/login',
      component: './Login',
      layout: false,
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
      access:'super'
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: ' 商品管理',
      path: '/goods',
      component: './Goods',
      routes: [
        {
         
          path: '/goods/all',
          component: './Goods/AllGoods',
          hideInMenu: true,
        },
        {
          name: '全部商品',
          path: '/goods/addGoods',
          component: './Goods/AddGoods',
        },
        {
          name: '溯源商品',
          path: '/goods/address',
          component: './Goods/Map',
        },
      ],
    },
    {
      name: '用户管理',
      path: '/user',
      component: './Users',
    },
    {
      name: '404',
      path: '/*',
      component: './404',
      layout:false
    },
  ],
  npmClient: 'pnpm',
});
