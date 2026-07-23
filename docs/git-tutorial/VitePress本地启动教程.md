VitePress本地启动教程
一、环境准备
提前安装Node.js，终端输入node -v，能正常输出版本号即为安装成功。
二、项目本地运行步骤
1. 终端切换到项目根目录（和package.json同级）
2. 安装依赖：
npm install
3. 启动本地预览：
npm run docs:dev
4. 复制终端给出的本地地址（一般为http://localhost:5173/），在浏览器打开查看文档效果
三、常见问题排查
1. 侧边文章打不开：核对文件夹名、md文件名、config.mjs里link路径三者完全一致
2. 启动报错：重新执行npm install补全依赖
3. 修改内容不生效：保存文件后页面会自动热更新，等待几秒刷新即可
四、打包部署
文档全部定稿后执行npm run docs:build，将分支代码推送远程，合并至main分支后，GitHub Actions会自动部署线上站点。