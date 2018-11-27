<template>
  <TopicList :topic-list="dealList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicList from '~/components/TopicList'

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
  layout: 'mobile',
  components: {
    TopicList
  }
}
</script>
