import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/practice-group-11/',
  title: "我的开源学习笔记",
  description: "编程学习、作业笔记、技术总结",
  ignoreDeadLinks: true, // 新增这一行！忽略不存在页面的链接
  themeConfig: {
    nav: [
      { text: '首页', link: '/' }
    ]
  }
})

