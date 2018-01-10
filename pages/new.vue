<template>
  <topic-list :topicList="newList" />
</template>

<script>
import TopicList from '~/components/TopicList'

export default {
  async asyncData ({ app }) {
    const { data } = await app.$axios.get(`topics/latest.json`)

    return {
      newList: data
    }
  },
  components: {
    TopicList
  }
}
</script>
