# 目的

一步步教大家发布自己的 NPM 项目

## 构建项目

## 构建测试

## 高级项目操作

[查看流程](./step_by_step.md)

## 发布流程

下面的流程就是一步步将自己的 Coding 发布到 NPM 供大家下载使用

1. 登陆 NPM

> npm login

这里需要注意的是，有可能平时设置了自己的镜像源是阿里的，这里要提前修改为官方的源，需要自备梯子

> npm config set registry=https://registry.npmjs.org/

下面按照提示一步步输入用户名，密码，邮箱就可以了
也可以使用，这里需要注意的是，需要去自己的邮箱激活的操作

> npm who am i

进行验证，登陆成功后就可以进行下面的发布操作了

2. 发布

> npm publish

3. 迭代

> npm version

## QA

创建此项目是为了帮助大家理解如何通过使用 **npm** 分发自己的代码，分享自己的想法

本项目会一步步的教大家，从无到有的创建一个自己的 **npm** 分发包

1. 为什么创建本项目?

2. 这个项目解决了什么?

3. 这个项目是如何解决问题的?

4. 示例

## TODO

+ 自动化构架项目
+ 支持不同的框架 React/Vue3
+ 支持 Pinia
