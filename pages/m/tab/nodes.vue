<template>
  <section class="container">
    <MuTextField
      v-model="searchString"
      hint-text="搜索"
      placeholder="搜索"
    />
    <MuSubHeader>
      已为您找到 {{ nodes.length }} 个节点.
    </MuSubHeader>
    <MuChip
      v-for="node in nodes"
      :key="node.id"
      class="chip"
      @click="toNode(node.name)"
    >
      {{ node.title }}
    </MuChip>
  </section>
</template>

<script>
export default {
  head () {
    return {
      titleTemplate: '%s - 全部节点'
    }
  },
  async asyncData ({ app }) {
    const { data } = await app.$axios.get(`nodes/all.json`)

    return {
      nodeList: data
    }
  },
  data () {
    return {
      searchString: ''
    }
  },
  computed: {
    nodes () {
      if (!this.searchString) return this.nodeList

      let searchString = this.searchString.trim().toLowerCase()

      return this.nodeList.filter(({ title, name }) =>
        title.toLowerCase().indexOf(searchString) !== -1 ||
        name.toLowerCase().indexOf(searchString) !== -1
      )
    }
  },
  methods: {
    toNode (name) {
      this.$router.push(`/node/${name}`)
    }
  },
  layout: 'mobile'
}
</script>

<style lang="scss" scoped>
.mu-input {
  width: 100%;
  margin: 20px 0 0;
  padding: 0 10px;
}
</style>
