<template>
  <topic-list :topic-list="qnaList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicList from '~/components/TopicList'

export default {
  components: {
    TopicList
  },
  async asyncData ({ app }) {
    const nodes = ['qna']
    const qnaList = await fetchTopicList(app.$axios, nodes)

    return {
      qnaList
    }
  },
  head () {
    return {
      titleTemplate: '%s - 问与答'
    }
  },
  layout: 'mobile'
}
</script>
