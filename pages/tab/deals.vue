<template>
  <topic-list-chalk :topic-list="dealList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicListChalk from '~/components/TopicListChalk'

export default {
  components: {
    TopicListChalk
  },
  async asyncData ({ app }) {
    const nodes = ['all4all', 'exchange', 'free', 'dn', 'tuan']
    const dealList = await fetchTopicList(app.$axios, nodes)

    return {
      dealList
    }
  },
  head () {
    return {
      titleTemplate: '%s - 交易'
    }
  }
}
</script>
