# practice-group-11 VitePress 文档站点
## 环境依赖
Node.js >= 20

## 本地运行项目
1. 拉取代码
git clone https://github.com/BISTU-xxx/practice-group-11.git
cd practice-group-11
2. 安装依赖
npm install
3. 本地预览网站
npm run docs:dev
4. 打包生产静态文件
npm run docs:build

## 自动化部署说明
推送代码至main分支后，GitHub Actions自动执行打包+部署，线上网站实时更新。

## 小组分工
1. CI自动化部署：组长
2. 网站主题、页面样式美化
3. 项目文档规范编写
4. 文档正文内容填充与全流程测试
