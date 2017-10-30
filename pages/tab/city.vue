<template>
  <topic-list :topicList="cityList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~/components/TopicList'

export default {
  asyncData ({ app, params, error }) {
    return axios.all([
      app.$axios.get(`topics/show.json?node_name=beijing`),
      app.$axios.get(`topics/show.json?node_name=shanghai`),
      app.$axios.get(`topics/show.json?node_name=shenzhen`),
      app.$axios.get(`topics/show.json?node_name=hangzhou`),
      app.$axios.get(`topics/show.json?node_name=life`)
    ])
    .then(axios.spread(function (beijing, shanghai, shenzhen, hangzhou, life) {
      let sortlist = beijing.data.concat(shanghai.data, shenzhen.data, hangzhou.data, life.data).sort(function(a, b) {
        return parseInt(a.created) < parseInt(b.created) ? 1 : parseInt(a.created) === parseInt(b.created) ? 0 : -1
      })

      return {
        cityList: sortlist
      }
    }))
    .catch(error => console.log(error))
  },
  components: {
    TopicList
  }
}
</script>
