<template>
  <div>
    <section class="container">
      <mu-card class="node-card">
        <img
          :src="node.avatar_normal"
          class="card-background"
          alt="background"
        >
        <mu-card-header
          :title="node.title"
          :sub-title="node.header"
        >
          <mu-avatar slot="avatar">
            <img
              :src="node.avatar_normal | image"
              alt="avatar"
            >
          </mu-avatar>
        </mu-card-header>
        <mu-card-actions>
          <div class="chip-container">
            <mu-chip
              class="chip"
              color="amberA100"
            >
              <mu-avatar
                :size="32"
                color="orangeA400"
              >
                <mu-icon value="star" />
              </mu-avatar>
              {{ node.stars }}
            </mu-chip>
          </div>
        </mu-card-actions>
      </mu-card>
    </section>
    <topic-list :topic-list="topicList" />
  </div>
</template>

<script>
import TopicList from '~/components/TopicList'

export default {
  components: {
    TopicList
  },
  layout: 'mobile',
  async asyncData ({ app, params, error }) {
    const [node, topicList] = await Promise.all([
      app.$axios.get(`/api/nodes/show.json?name=${params.name}`)
        .then(res => res.data)
        .catch(() => error({ statusCode: 404, message: 'Node not found' })),
      app.$axios.get(`/api/topics/show.json?node_name=${params.name}`)
        .then(res => res.data)
        .catch(() => error({ statusCode: 404, message: 'Node not found' }))
    ])

    return {
      node,
      topicList
    }
  },
  head () {
    return {
      titleTemplate: '%s - 节点详情'
    }
  }
}
</script>

<style lang="scss">
.node-card {
  position: relative;
  overflow: hidden;

  background-color: transparent;
}

.card-background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  filter: blur(100px);
}
</style>
