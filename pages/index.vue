<template>
  <topic-list :topicList="hotList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~components/TopicList'

export default {
  async asyncData () {
    try {
      const { data } = await axios.get(`https://proxy-uuptfgaypk.now.sh/topics/hot.json`)

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
