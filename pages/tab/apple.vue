<template>
  <topic-list :topicList="appleList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~/components/TopicList'

export default {
  asyncData ({ app, params, error }) {
    return axios.all([
      app.$axios.get(`topics/show.json?node_name=apple`),
      app.$axios.get(`topics/show.json?node_name=macos`),
      app.$axios.get(`topics/show.json?node_name=ios`),
      app.$axios.get(`topics/show.json?node_name=ipad`),
      app.$axios.get(`topics/show.json?node_name=iphone`),
      app.$axios.get(`topics/show.json?node_name=mbp`)
    ])
    .then(axios.spread(function (apple, macos, ios, ipad, iphone, mbp) {
      let sortlist = apple.data.concat(macos.data, ios.data, ipad.data, iphone.data, mbp.data).sort(function(a, b) {
        return parseInt(a.created) < parseInt(b.created) ? 1 : parseInt(a.created) === parseInt(b.created) ? 0 : -1
      })

      return {
        appleList: sortlist
      }
    }))
    .catch(error => console.log(error))
  },
  components: {
    TopicList
  }
}
</script>
