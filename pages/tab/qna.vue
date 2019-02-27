<template>
  <topic-list-chalk :topic-list="qnaList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicListChalk from '~/components/TopicListChalk'

export default {
  head () {
    return {
      titleTemplate: '%s - 问与答'
    }
  },
  components: {
    TopicListChalk
  },
  async asyncData ({ app }) {
    const nodes = ['qna']
    const qnaList = await fetchTopicList(app.$axios, nodes)

    return {
      qnaList
    }
  }
}
</script>
