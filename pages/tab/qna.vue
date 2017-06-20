<template>
  <topic-list :topicList="qnaList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~components/TopicList'

export default {
  async asyncData () {
    try {
      const { data } = await axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=qna`)

      return {
        qnaList: data
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
