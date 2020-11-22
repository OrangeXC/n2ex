<template>
  <topic-list :topic-list="jobList" />
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
    const nodes = ['jobs', 'cv', 'career', 'outsourcing']
    const jobList = await fetchTopicList(app.$axios, nodes)

    return {
      jobList
    }
  },
  head () {
    return {
      titleTemplate: '%s - 酷工作'
    }
  }
}
</script>
