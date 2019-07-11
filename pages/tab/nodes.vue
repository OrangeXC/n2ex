<template>
  <section class="container">
    <el-input
      v-model="searchString"
      suffix-icon="el-icon-search"
      placeholder="请输入搜索内容"
    />
    <p>已为您找到 {{ nodes.length }} 个节点</p>
    <div class="tags">
      <el-tag
        v-for="node in nodes"
        :key="node.id"
        @click.native="toNode(node.name)"
      >
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
  data () {
    return {
      searchString: ''
    }
  },
  computed: {
    nodes () {
      if (!this.searchString) return this.nodeList

      const searchString = this.searchString.trim().toLowerCase()

      return this.nodeList.filter(({ title, name }) =>
        title.toLowerCase().indexOf(searchString) !== -1 ||
        name.toLowerCase().indexOf(searchString) !== -1
      )
    }
  },
  async asyncData ({ app }) {
    const { data } = await app.$axios.get('nodes/all.json')

    return {
      nodeList: data
    }
  },
  methods: {
    toNode (name) {
      this.$router.push(`/node/${name}`)
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
