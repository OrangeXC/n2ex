<template>
  <topic-list :topicList="newList" />
</template>

<script>
import TopicList from '~/components/TopicList'

export default {
  async asyncData ({ app }) {
    try {
      const { data } = await app.$axios.get(`topics/latest.json`)

      return {
        newList: data
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
