# VitePress编程学习笔记静态网站
## 项目介绍
本项目基于VitePress搭建，是一套轻量化编程学习笔记文档站点，用于整理Git、Python、前端相关学习资料。

## 本地项目启动
### 1. 环境依赖
提前安装 Git + Node.js

### 2. 克隆仓库
```bash
git clone https://github.com/BISTU-OSSD/practice-group-11.git
cd practice-group-11


## 线上网站访问地址
线上访问地址：https://bistu-ossd.github.io/practice-group-11/

## 小组分工详情
组长 刘沛桓（liupeihuan）：创建项目仓库、配置 GitHub Actions CI 自动部署流水线
组员 刘紫辉（LiuZiHui772006）：网站 UI 定制、明暗双主题样式开发、页面美化
组员 陈梓橦（ztt-spec）：搭建文档侧边栏目录结构、编写 CONTRIBUTING.md 贡献规范
组员 刘楚钰（lcy111333）：全站功能测试、页面 Bug 收集跟踪、文档优化与完善 README

## 文档文件创建规范
编写文档时请严格按照如下路径创建文件：
1，前端学习记录 → docs/frontend/index.md
2，Git 使用教程 → docs/git/index.md
3，VitePress 搭建文档步骤 → docs/vitepress/index.md
注意：文件夹名称不要修改，每个文件夹内的文档统一命名为 index.md。
文件创建完成后，首页对应目录链接就能正常访问；文件尚未建好时点击链接会显示 404，属于正常现象。

## 开发协作规范
1，所有功能开发在独立分支完成，禁止直接在 main 主干修改代码；
2，开发完成后创建 Pull Request，提交组长进行代码审核；
3，页面出现故障，请在 Issues 创建 bug 工单，并指派对应负责人处理。