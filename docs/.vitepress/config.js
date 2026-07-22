import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "开源学习笔记",
  appearance: true,
  themeConfig: {
    logo: "https://cdn.jsdelivr.net/npm/vitepress/dist/logo.svg",
    nav: [
      { text: '首页', link: '/' },
      { text: 'Git教程', link: '/git/' },
      { text: 'Python基础', link: '/python/' },
      { text: '前端入门', link: '/frontend/' }
    ]
  }
})