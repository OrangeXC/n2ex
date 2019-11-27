<template>
  <topic-list-chalk :topic-list="playList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicListChalk from '~/components/TopicListChalk'

export default {
  components: {
    TopicListChalk
  },
  async asyncData ({ app }) {
    const nodes = ['share', 'bb', 'games', 'travel', 'hardware']
    const playList = await fetchTopicList(app.$axios, nodes)

    return {
      playList
    }
  },
  head () {
    return {
      titleTemplate: '%s - 好玩'
    }
  }
}
</script>
