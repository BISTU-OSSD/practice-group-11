# 小组开发协作规范
## 1. 项目环境初始化
git clone https://github.com/BISTU-xxx/practice-group-11.git
cd practice-group-11
npm install

## 2. 分支管理规则
禁止直接在main分支开发，每人新建独立功能分支：
- CI部署：feature/ci-deploy
- 页面美化：feature/theme-ui
- 文档规范：feature/doc-standard
- 内容编写：feature/doc-content
创建分支命令：git checkout -b 你的分支名

## 3. 提交注释规范
格式：分类：修改内容
示例：
ci：修复GitHub Actions部署权限报错
docs：完善README项目说明

## 4. 合并流程
1. 在个人分支完成开发后推送远程
2. 发起Pull Request合并到main
3. 组长审核通过后合并
4. 所有人执行 git pull origin main 同步最新代码
