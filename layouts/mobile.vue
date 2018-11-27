<template>
  <div>
    <MuAppbar title="N2EX">
      <MuButton
        slot="left"
        icon
        @click="toggle()"
      >
        <MuIcon value="menu" />
      </MuButton>
      <MuButton
        slot="right"
        icon
        href="https://github.com/OrangeXC/n2ex"
      >
        <i class="muidocs-icon-custom-github" />
      </MuButton>
    </MuAppbar>
    <MuDrawer
      :open.sync="open"
      :docked="docked"
    >
      <MuAppbar title="Tabs" />
      <MuList @itemClick="docked ? '' : toggle()">
        <MuListItem
          button
          @click="toTab('tech')"
        >
          <MuListItemTitle>技术</MuListItemTitle>
        </MuListItem>
        <MuListItem
          button
          @click="toTab('play')"
        >
          <MuListItemTitle>好玩</MuListItemTitle>
        </MuListItem>
        <MuListItem
          button
          @click="toTab('apple')"
        >
          <MuListItemTitle>Apple</MuListItemTitle>
        </MuListItem>
        <MuListItem
          button
          @click="toTab('jobs')"
        >
          <MuListItemTitle>酷工作</MuListItemTitle>
        </MuListItem>
        <MuListItem
          button
          @click="toTab('deals')"
        >
          <MuListItemTitle>交易</MuListItemTitle>
        </MuListItem>
        <MuListItem
          button
          @click="toTab('city')"
        >
          <MuListItemTitle>城市</MuListItemTitle>
        </MuListItem>
        <MuListItem
          button
          @click="toTab('qna')"
        >
          <MuListItemTitle>问与答</MuListItemTitle>
        </MuListItem>
        <MuListItem
          button
          @click="toHome()"
        >
          <MuListItemTitle>最热</MuListItemTitle>
        </MuListItem>
        <MuListItem
          button
          @click="toNew()"
        >
          <MuListItemTitle>最新</MuListItemTitle>
        </MuListItem>
        <MuListItem
          button
          @click="toTab('nodes')"
        >
          <MuListItemTitle>节点</MuListItemTitle>
        </MuListItem>
      </MuList>
    </MuDrawer>
    <Nuxt keep-alive />
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
