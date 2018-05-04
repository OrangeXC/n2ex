<template>
  <section>
    <el-card>
      <div slot="header" class="card card-header">
        <div class="avatar">
          <img :src="node.avatar_large | image" alt="avatar">
        </div>
        <div class="title">{{ node.title }}</div>
        <p>关注 {{ node.stars }} • 创建于 {{ node.created | format }}</p>
      </div>
      <div v-html="node.header"></div>
    </el-card>
    <topic-list-chalk :topicList="topicList"></topic-list-chalk>
  </section>
</template>

<script>
import TopicListChalk from '~/components/TopicListChalk'

export default {
  head () {
    return {
      titleTemplate: '%s - 节点详情'
    }
  },
  async asyncData ({ app, params, error }) {
    const [node, topicList] = await Promise.all([
      app.$axios.get(`nodes/show.json?name=${params.name}`)
        .then(res => res.data)
        .catch(() => error({ statusCode: 404, message: 'Node not found' })),
      app.$axios.get(`topics/show.json?node_name=${params.name}`)
        .then(res => res.data)
        .catch(() => error({ statusCode: 404, message: 'Node not found' }))
    ])

    return {
      node,
      topicList
    }
  },
  components: {
    TopicListChalk
  }
}
</script>

<style lang="scss" scoped>
.card-header {
  line-height: 1;

  text-align: center;
}

.title {
  margin-top: 10px;
  font-size: 20px;
}

.avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
