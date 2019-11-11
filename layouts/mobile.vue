<template>
  <div>
    <mu-appbar title="N2EX">
      <mu-button
        slot="left"
        @click="toggle()"
        icon
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
          @click="toTab('tech')"
          button
        >
          <mu-list-item-title>技术</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          @click="toTab('play')"
          button
        >
          <mu-list-item-title>好玩</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          @click="toTab('apple')"
          button
        >
          <mu-list-item-title>Apple</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          @click="toTab('jobs')"
          button
        >
          <mu-list-item-title>酷工作</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          @click="toTab('deals')"
          button
        >
          <mu-list-item-title>交易</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          @click="toTab('city')"
          button
        >
          <mu-list-item-title>城市</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          @click="toTab('qna')"
          button
        >
          <mu-list-item-title>问与答</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          @click="toHome()"
          button
        >
          <mu-list-item-title>最热</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          @click="toNew()"
          button
        >
          <mu-list-item-title>最新</mu-list-item-title>
        </mu-list-item>
        <mu-list-item
          @click="toTab('nodes')"
          button
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
