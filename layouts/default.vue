<template>
  <div>
    <mu-appbar title="N2EX">
      <mu-icon-button icon="menu" @click="toggle(true)" slot="left" />
      <mu-icon-button href="https://github.com/OrangeXC/n2ex" slot="right">
        <i class="muidocs-icon-custom-github"></i>
      </mu-icon-button>
    </mu-appbar>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-appbar title="Tabs"/>
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="技术" @click="toTab('tech')" />
        <mu-list-item title="创意" @click="toTab('creative')" />
        <mu-list-item title="好玩" @click="toTab('play')" />
        <mu-list-item title="Apple" @click="toTab('apple')" />
        <mu-list-item title="酷工作" @click="toTab('jobs')" />
        <mu-list-item title="交易" @click="toTab('deals')" />
        <mu-list-item title="城市" @click="toTab('city')" />
        <mu-list-item title="问与答" @click="toTab('qna')" />
        <mu-list-item title="最热" @click="toHome()" />
        <mu-list-item title="全部" @click="toNew()" />
        <mu-list-item title="节点" @click="toTab('nodes')" />
      </mu-list>
    </mu-drawer>
    <nuxt/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      docked: true
    }
  },
  methods: {
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    },
    toHome () {
      this.$router.push('/')
    },
    toNew () {
      this.$router.push('/new')
    },
    toNode (name) {
      this.$router.push(`/node/${name}`)
    },
    toTab (name) {
      this.$router.push(`/tab/${name}`)
    }
  }
}
</script>
