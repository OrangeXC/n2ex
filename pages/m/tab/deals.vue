<template>
  <topic-list :topicList="dealList" />
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
    const dealList =  await fetchTopicList(app.$axios, 'all4all', 'exchange', 'free', 'dn', 'tuan')

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
