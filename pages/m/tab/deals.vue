<template>
  <topic-list :topic-list="dealList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicList from '~/components/TopicList'

export default {
  components: {
    TopicList
  },
  layout: 'mobile',
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
