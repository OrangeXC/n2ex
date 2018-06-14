<template>
  <topic-list :topicList="jobList" />
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
    const jobList =  await fetchTopicList(app.$axios, 'jobs', 'cv', 'career', 'outsourcing')

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
