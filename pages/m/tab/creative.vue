<template>
  <topic-list :topic-list="creativeList" />
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
    const nodes = ['create', 'design', 'ideas']
    const creativeList = await fetchTopicList(app.$axios, nodes)

    return {
      creativeList
    }
  },
  head () {
    return {
      titleTemplate: '%s - 创意'
    }
  }
}
</script>
