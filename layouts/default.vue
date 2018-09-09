<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        router
      >
        <el-menu-item index="/">最热</el-menu-item>
        <el-menu-item index="/new">最新</el-menu-item>
        <el-menu-item index="/tab/tech">技术</el-menu-item>
        <el-menu-item index="/tab/creative">创意</el-menu-item>
        <el-menu-item index="/tab/play">好玩</el-menu-item>
        <el-menu-item index="/tab/apple">Apple</el-menu-item>
        <el-menu-item index="/tab/jobs">酷工作</el-menu-item>
        <el-menu-item index="/tab/deals">交易</el-menu-item>
        <el-menu-item index="/tab/city">城市</el-menu-item>
        <el-menu-item index="/tab/qna">问与答</el-menu-item>
        <el-menu-item index="/tab/nodes">节点</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <nuxt keep-alive />
    </el-main>
    <el-footer>
      <span>
        Copyright © 2016-2018 Orange
      </span>
      <a class="github" href="https://github.com/OrangeXC/n2ex" target="_blank">
        <i class="muidocs-icon-custom-github"></i>
      </a>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/'
    }
  },
  created () {
    this.activeIndex = this.$route.path
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  min-width: 960px;
}

.el-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #f7fbfd;
  line-height: 60px;
}

.github {
  height: 36px;
  font-size: 36px;
  color: #c8d6e8;

  line-height: 36px;

  &:hover {
    transform: scale(1.2);
    color: #8d99ab;
  }
}
</style>
