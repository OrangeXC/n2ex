<template>
  <div>
    <section class="container">
      <MuCard class="node-card">
        <img
          class="card-background"
          :src="node.avatar_normal"
          alt="background"
        >
        <MuCardHeader
          :title="node.title"
          :sub-title="node.header"
        >
          <MuAvatar slot="avatar">
            <img
              :src="node.avatar_normal | image"
              alt="avatar"
            >
          </MuAvatar>
        </MuCardHeader>
        <MuCardActions>
          <div class="chip-container">
            <MuChip
              class="chip"
              color="amberA100"
            >
              <MuAvatar
                :size="32"
                color="orangeA400"
              >
                <MuIcon value="star" />
              </MuAvatar>
              {{ node.stars }}
            </MuChip>
            <MuChip
              class="chip"
              color="blue300"
            >
              <MuAvatar
                :size="32"
                color="indigo900"
              >
                <MuIcon value="schedule" />
              </MuAvatar>
              {{ node.created | format }}
            </MuChip>
          </div>
        </MuCardActions>
      </MuCard>
    </section>
    <TopicList :topic-list="topicList" />
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
