# 代码快速提交工具

```sh
npm install -g speedcommit
```

提供全局命令 cm，一次完成提交三步，第二个参数为 commit 信息，第三个参数为分支名（可不填默认为 test）

如

```sh
cm feat:增加功能
```

将执行 git add . , git commit -m "feat:增加功能", git push origin test

commit 信息应遵循

### 格式

<font color=#c7254e>type: description</font>

1. type 类型
   type 是 commit 的类别，只允许如下几种标识：

- fix: 修复 bug
- feat: 新功能
- docs: 文档改变
- style: 代码格式改变
- perf: 性能优化 or 代码优化
- refactor: 某个已有功能重构
- test: 增加测试
- revert: 撤销上一次的 commit
- build: 构建工具或构建过程等的变动

2. description
   description 是对本次提交的简短描述。

不超过 50 个字符。

推荐以动词开头，如： 设置、修改、增加、删减、撤销等
