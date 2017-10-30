<template>
  <topic-list :topicList="dealList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~/components/TopicList'

export default {
  asyncData ({ app, params, error }) {
    return axios.all([
      app.$axios.get(`topics/show.json?node_name=all4all`),
      app.$axios.get(`topics/show.json?node_name=exchange`),
      app.$axios.get(`topics/show.json?node_name=free`),
      app.$axios.get(`topics/show.json?node_name=dn`),
      app.$axios.get(`topics/show.json?node_name=tuan`)
    ])
    .then(axios.spread(function (all4all, exchange, free, dn, tuan) {
      let sortlist = all4all.data.concat(exchange.data, free.data, dn.data, tuan.data).sort(function(a, b) {
        return parseInt(a.created) < parseInt(b.created) ? 1 : parseInt(a.created) === parseInt(b.created) ? 0 : -1
      })

      return {
        dealList: sortlist
      }
    }))
    .catch(error => console.log(error))
  },
  components: {
    TopicList
  }
}
</script>
