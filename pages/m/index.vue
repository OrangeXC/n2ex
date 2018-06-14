<template>
  <topic-list :topicList="hotList" />
</template>

<script>
import TopicList from '~/components/TopicList'

export default {
  head () {
    return {
      titleTemplate: '%s - 最热'
    }
  },
  async asyncData ({ app }) {
    const { data } = await app.$axios.get('topics/hot.json')

    return {
      hotList: data
    }
  },
  layout: 'mobile',
  components: {
    TopicList
  }
}
</script>
