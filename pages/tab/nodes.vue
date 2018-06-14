<template>
  <section class="container">
    <el-input v-model="searchString" suffix-icon="el-icon-search" placeholder="请输入搜索内容"></el-input>
    <p>已为您找到 {{ nodes.length }} 个节点</p>
    <div class="tags">
      <el-tag v-for="node in nodes" :key="node.id" @click.native="toNode(node.name)">
        {{ node.title }}
      </el-tag>
    </div>
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
    const { data } = await app.$axios.get('nodes/all.json')

    return {
      nodeList: data
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
    nodes () {
      if (!this.searchString) return this.nodeList

      let searchString = this.searchString.trim().toLowerCase()

      return this.nodeList.filter(({ title, name }) =>
        title.toLowerCase().indexOf(searchString) !== -1 ||
        name.toLowerCase().indexOf(searchString) !== -1
      )
    }
  }
}
</script>

<style scoped>
.tags {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: -16px;
}

.el-tag {
  width: 120px;
  margin: 0 16px 16px 0;
  overflow: hidden;
  cursor: pointer;

  text-align: center;
}
</style>
