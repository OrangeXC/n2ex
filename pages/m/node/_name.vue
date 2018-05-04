<template>
  <div>
    <section class="container">
      <mu-card class="node-card">
        <img class="card-background" :src="node.avatar_normal" alt="background">
        <mu-card-header :title="node.title" :subTitle="node.header">
          <mu-avatar :src="node.avatar_normal | image" slot="avatar"/>
        </mu-card-header>
        <mu-card-actions>
          <div class="chip-container">
            <mu-chip class="chip" backgroundColor="amberA100">
              <mu-avatar :size="32" icon="star" backgroundColor="orangeA400" />{{ node.stars }}
            </mu-chip>
            <mu-chip class="chip" backgroundColor="blue300">
              <mu-avatar :size="32" icon="schedule" backgroundColor="indigo900" />{{ node.created | format }}
            </mu-chip>
          </div>
        </mu-card-actions>
      </mu-card>
    </section>
    <topic-list :topicList="topicList" />
  </div>
</template>

<script>
import TopicList from '~/components/TopicList'

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
  layout: 'mobile',
  components: {
    TopicList
  }
}
</script>

<style lang="scss">
.node-card {
  position: relative;
  margin: -10px -10px -20px -10px;
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
