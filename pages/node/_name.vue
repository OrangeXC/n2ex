<template>
  <section>
    <el-card>
      <img
        class="card-background"
        :src="node.avatar_large"
        alt="background"
      >
      <div
        slot="header"
        class="card card-header"
      >
        <div class="avatar">
          <img
            :src="node.avatar_large | image"
            alt="avatar"
          >
        </div>
        <div class="title">
          {{ node.title || node.title_alternative }}
        </div>
        <p>关注 {{ node.stars }}</p>
      </div>
      <!-- eslint-disable -->
      <div v-html="node.header" />
    </el-card>
    <topic-list-chalk :topic-list="topicList" />
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
  components: {
    TopicListChalk
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
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  position: relative;

  background-color: transparent;
}

.card-background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  filter: blur(150px);
}

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
