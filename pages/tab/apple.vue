<template>
  <TopicListChalk :topic-list="appleList" />
</template>

<script>
import { fetchTopicList } from '~/utils'
import TopicListChalk from '~/components/TopicListChalk'

export default {
  head () {
    return {
      titleTemplate: '%s - Apple'
    }
  },
  async asyncData ({ app }) {
    const nodes = ['apple', 'macos', 'ios', 'ipad', 'iphone', 'mbp']
    const appleList = await fetchTopicList(app.$axios, nodes)

    return {
      appleList
    }
  },
  components: {
    TopicListChalk
  }
}
</script>
