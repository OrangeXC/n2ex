<template>
  <section class="container">
    <mu-text-field
      v-model="searchString"
      hint-text="搜索"
      placeholder="搜索"
    />
    <mu-sub-header>
      已为您找到 {{ nodes.length }} 个节点.
    </mu-sub-header>
    <mu-chip
      v-for="node in nodes"
      :key="node.id"
      class="chip"
      @click="toNode(node.name)"
    >
      {{ node.title }}
    </mu-chip>
  </section>
</template>

<script>
export default {
  layout: 'mobile',
  async asyncData ({ app }) {
    const { data } = await app.$axios.get('/api/nodes/all.json')

    return {
      nodeList: data
    }
  },
  data () {
    return {
      searchString: ''
    }
  },
  head () {
    return {
      titleTemplate: '%s - 全部节点'
    }
  },
  computed: {
    nodes () {
      if (!this.searchString) {
        return this.nodeList
      }

      const searchString = this.searchString.trim().toLowerCase()

      return this.nodeList.filter(({ title, name }) =>
        title.toLowerCase().includes(searchString) ||
        name.toLowerCase().includes(searchString)
      )
    }
  },
  methods: {
    toNode (name) {
      this.$router.push(`/node/${name}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.mu-input {
  width: 100%;
  margin: 20px 0 0;
  padding: 0 10px;
}
</style>
