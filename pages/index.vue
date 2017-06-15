<template>
  <topic-list :topicList="hotList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~components/TopicList'

export default {
  asyncData ({ params, error }) {
    return axios.get(`https://www.v2ex.com/api/topics/hot.json`).then((res) => {
      return {
        hotList: res.data
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
