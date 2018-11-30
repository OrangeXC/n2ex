<template>
  <topic-list-chalk :topic-list="playList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicListChalk from '~/components/TopicListChalk'

export default {
  head () {
    return {
      titleTemplate: '%s - 好玩'
    }
  },
  async asyncData ({ app }) {
    const nodes = ['share', 'bb', 'games', 'travel', 'hardware']
    const playList = await fetchTopicList(app.$axios, nodes)

    return {
      playList
    }
  },
  components: {
    TopicListChalk
  }
}
</script>
