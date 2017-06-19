<template>
  <topic-list :topicList="newList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~components/TopicList'

export default {
  asyncData ({ params, error }) {
    return axios.get(`https://proxy-uuptfgaypk.now.sh/topics/latest.json`).then((res) => {
      return {
        newList: res.data
      }
    }).catch((e) => {
      error({ statusCode: 404, message: 'Post not found' })
    })
  },
  components: {
    TopicList
  }
}
</script>
