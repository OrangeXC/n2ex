<template>
  <topic-list :topicList="hotList" />
</template>

<script>
import TopicList from '~/components/TopicList'

export default {
  async asyncData ({ app }) {
    const { data } = await app.$axios.get(`topics/hot.json`)

    return {
      hotList: data
    }
  },
  components: {
    TopicList
  }
}
</script>
