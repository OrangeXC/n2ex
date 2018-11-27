<template>
  <ElContainer>
    <ElHeader>
      <ElMenu
        :default-active="activeIndex"
        mode="horizontal"
        router
      >
        <ElMenuItem index="/">
          最热
        </ElMenuItem>
        <ElMenuItem index="/new">
          最新
        </ElMenuItem>
        <ElMenuItem index="/tab/tech">
          技术
        </ElMenuItem>
        <ElMenuItem index="/tab/creative">
          创意
        </ElMenuItem>
        <ElMenuItem index="/tab/play">
          好玩
        </ElMenuItem>
        <ElMenuItem index="/tab/apple">
          Apple
        </ElMenuItem>
        <ElMenuItem index="/tab/jobs">
          酷工作
        </ElMenuItem>
        <ElMenuItem index="/tab/deals">
          交易
        </ElMenuItem>
        <ElMenuItem index="/tab/city">
          城市
        </ElMenuItem>
        <ElMenuItem index="/tab/qna">
          问与答
        </ElMenuItem>
        <ElMenuItem index="/tab/nodes">
          节点
        </ElMenuItem>
      </ElMenu>
    </ElHeader>
    <ElMain>
      <Nuxt keep-alive />
    </ElMain>
    <ElFooter>
      <span>
        Copyright © 2016-2018 Orange
      </span>
      <a
        class="github"
        href="https://github.com/OrangeXC/n2ex"
        target="_blank"
      >
        <i class="muidocs-icon-custom-github" />
      </a>
    </ElFooter>
  </ElContainer>
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
