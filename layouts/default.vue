<template>
  <div>
    <mu-appbar>
      <mu-icon-button icon="menu" @click="toggle(true)" slot="left" />
      <mu-flat-button label="最热主题" @click="toHome()" slot="left" />
      <mu-flat-button label="最新主题" @click="toNew()" slot="left" />
      <mu-icon-button href="https://github.com/OrangeXC/n2ex" slot="right">
        <i class="muidocs-icon-custom-github"></i>
      </mu-icon-button>
    </mu-appbar>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="前端" @click="toNode('fe')" />
        <mu-list-item title="GitHub" @click="toNode('github')" />
        <mu-list-item title="创意" @click="toNode('ideas')" />
        <mu-list-item title="好玩" @click="toNode('share')"/>
        <mu-list-item title="Apple" @click="toNode('apple')" />
        <mu-list-item title="酷工作" @click="toNode('jobs')" />
        <mu-list-item title="交易" @click="toNode('deals')"/>
        <mu-list-item title="问与答" @click="toNode('qna')" />
      </mu-list>
    </mu-drawer>
    <nuxt/>
  </div>
</template>

<script>
import MyFooter from '~components/Footer.vue'

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
    }
  },
  components: {
    MyFooter
  }
}
</script>
