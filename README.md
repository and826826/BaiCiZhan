

# Baicizhan
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## 
用户需求：
用户能够学习英语，备考六级：
1. 用表显示全部单词，能通过单词字母搜索单词。
2. 能单词设置是否为星标单词
3. 采用卡片翻转实现学习单词，能播放单词音频，显示单词意思和例句
4. 响应迅速，性能稳定，界面简洁美观

##
需求分析：
根据用户的需求，现作出如下分析：
1. 无用户角色，即不设置权限，所有用户均能进行操作
2. 响应迅速，性能稳定前端由angular支持，后台由Node和MongoDB支持（采用合成看框架Deploy）
3. 界面简洁美观由angular material保证

## wordservice
wordservice服务具有添加单词，通过id号删除单词，更新词库，通过单词字母查找单词。

## 页面效果

### 首页

![首页]("./src/assets/1.png")

### 查看所有单词

![所有单词]("./src/assets/2.png")

### 查看所有星标单词
用户可以通过点击单词卡片上的爱心实现收藏与取消收藏

![所有单词]("./src/assets/3.png")

### 复习单词

卡片正面上都只有单词本身，在鼠标滑过单词卡片时卡片翻转，显示单词的详细信息
![所有单词]("./src/assets/4.png")












## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
