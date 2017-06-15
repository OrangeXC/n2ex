# n2ex

> v2ex ssr app ，use nuxt && muse-ui && v2ex API && axios

## Chinese

### 项目描述

nuxt 版 [v2ex](https://www.v2ex.com/)

基于 vue 服务端渲染框架 [nuxt](https://github.com/nuxt/nuxt.js)， 使用 [v2ex API](https://www.v2ex.com/p/7v9TEc53) 作为接口，使用 [muse-ui](https://github.com/museui/muse-ui) UI 组件库。

### 功能

* 首页-最热话题列表
* 最新话题列表
* 话题详情
* 话题评论
* 菜单导航-部分节点列表
* 节点详情（包含话题列表）
* 用户详情（包含话题列表）

> 注意：在线网站请看顶部链接，路由跳转时接口会报错，因为接口请求跨域问题，建议安装 chrome 插件 [Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)以解决跨域问题。

## English

## Description

The v2ex base nuxt

### Function

* Hot Topic List
* New Topic List
* Topic Detail
* Topic comment
* (header menu) some node of topic
* node detail
* user detail

> Note: the website plese to page top, when open the website, router changes will be error, because CORS, you can install chrome component [Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi).

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install*[see note below]

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

*
