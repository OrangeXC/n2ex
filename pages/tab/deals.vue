<template>
  <TopicListChalk :topic-list="dealList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicListChalk from '~/components/TopicListChalk'

export default {
  head () {
    return {
      titleTemplate: '%s - 交易'
    }
  },
  async asyncData ({ app }) {
    const nodes = ['all4all', 'exchange', 'free', 'dn', 'tuan']
    const dealList = await fetchTopicList(app.$axios, nodes)

    return {
      dealList
    }
  },
  components: {
    TopicListChalk
  }
}
</script>
