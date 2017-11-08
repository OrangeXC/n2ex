<template>
  <section class="container">
    <mu-text-field hintText="搜索" v-model="searchString" icon="search" />
    <mu-sub-header>
      已为您找到 {{ nodes.length }} 个节点.
    </mu-sub-header>
    <mu-content-block>
      <mu-chip class="chip" v-for="node in nodes" :key="node.id" @click="toNode(node.name)">
        {{ node.title }}
      </mu-chip>
    </mu-content-block>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ app }) {
    try {
      const { data } = await app.$axios.get(`nodes/all.json`)

      return {
        nodeList: data
      }
    } catch (err) {
      console.error(err)
    }
  },
  data () {
    return {
      searchString: ''
    }
  },
  methods: {
    toNode (name) {
      this.$router.push(`/node/${name}`)
    }
  },
  computed: {
    nodes: function () {
      if (!this.searchString) return this.nodeList

      let searchString = this.searchString.trim().toLowerCase()

      return this.nodeList.filter(({ title, name }) => title.toLowerCase().indexOf(searchString) !== -1 || name.toLowerCase().indexOf(searchString) !== -1)
    }
  }
}
</script>
