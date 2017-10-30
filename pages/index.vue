<template>
  <topic-list :topicList="hotList" />
</template>

<script>
import TopicList from '~/components/TopicList'

export default {
  async asyncData ({ app }) {
    try {
      const { data } = await app.$axios.get(`topics/hot.json`)

      return {
        hotList: data
      }
    } catch (err) {
      console.error(err)
    }
  },
  components: {
    TopicList
  }
}
</script>
