import { defineConfig } from 'vitepress'

export default defineConfig({
<<<<<<< HEAD
  ignoreDeadLinks: true,
=======
  base: '/practice-group-11/',
>>>>>>> 9d87e7adb853b8954bd5652fd7edac9718db5412
  title: "我的开源学习笔记",
  description: "编程学习、作业笔记、技术总结",
  ignoreDeadLinks: true, // 新增这一行！忽略不存在页面的链接
  themeConfig: {
    nav: [
      { text: '首页', link: '/' }
    ],
    sidebar: [
      {
        text: 'Git教程',
        items: [
          { text: 'Git分支与PR协作流程', link: '/git-tutorial/Git分支与PR协作流程' },
          { text: 'VitePress本地启动教程', link: '/git-tutorial/VitePress本地启动教程' }
        ]
      },
      {
        text: 'Python基础',
        items: []
      },
      {
        text: '前端入门',
        items: []
      }
    ]
  }
})

