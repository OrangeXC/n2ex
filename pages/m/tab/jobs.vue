<template>
  <TopicList :topic-list="jobList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicList from '~/components/TopicList'

export default {
  head () {
    return {
      titleTemplate: '%s - 酷工作'
    }
  },
  async asyncData ({ app }) {
    const nodes = ['jobs', 'cv', 'career', 'outsourcing']
    const jobList = await fetchTopicList(app.$axios, nodes)

    return {
      jobList
    }
  },
  layout: 'mobile',
  components: {
    TopicList
  }
}
</script>
