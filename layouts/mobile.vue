<template>
  <div>
    <mu-appbar title="N2EX">
      <mu-button
        slot="left"
        icon
        @click="toggle()"
      >
        <mu-icon value="menu" />
      </mu-button>
      <mu-button
        slot="right"
        icon
        href="https://github.com/OrangeXC/n2ex"
      >
        <i class="muidocs-icon-custom-github" />
      </mu-button>
    </mu-appbar>
    <mu-drawer
      :open.sync="open"
      :docked="docked"
    >
      <mu-appbar title="Tabs" />
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item
          button
          @click="toTab('tech')"
        >
          <mu-list-item-title>技术</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          button
          @click="toTab('play')"
        >
          <mu-list-item-title>好玩</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          button
          @click="toTab('apple')"
        >
          <mu-list-item-title>Apple</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          button
          @click="toTab('jobs')"
        >
          <mu-list-item-title>酷工作</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          button
          @click="toTab('deals')"
        >
          <mu-list-item-title>交易</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          button
          @click="toTab('city')"
        >
          <mu-list-item-title>城市</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          button
          @click="toTab('qna')"
        >
          <mu-list-item-title>问与答</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          button
          @click="toHome()"
        >
          <mu-list-item-title>最热</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          button
          @click="toNew()"
        >
          <mu-list-item-title>最新</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          button
          @click="toTab('nodes')"
        >
          <mu-list-item-title>节点</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
    <nuxt keep-alive />
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      docked: false
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    toHome () {
      this.$router.push('/m')
      this.toggle()
    },
    toNew () {
      this.$router.push('/m/new')
      this.toggle()
    },
    toNode (name) {
      this.$router.push(`/m/node/${name}`)
      this.toggle()
    },
    toTab (name) {
      this.$router.push(`/m/tab/${name}`)
      this.toggle()
    }
  }
}
</script>
