<template>
  <topic-list :topicList="qnaList" />
</template>

<script>
import TopicList from '~/components/TopicList'

export default {
  async asyncData ({ app }) {
    const { data } = await app.$axios.get(`topics/show.json?node_name=qna`)

    return {
      qnaList: data
    }
  },
  components: {
    TopicList
  }
}
</script>
