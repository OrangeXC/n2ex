<template>
  <topic-list-chalk :topic-list="qnaList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicListChalk from '~/components/TopicListChalk'

export default {
  components: {
    TopicListChalk
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
  }
}
</script>
