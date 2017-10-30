<template>
  <topic-list :topicList="techList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~/components/TopicList'

export default {
  asyncData ({ app, params, error }) {
    return axios.all([
      app.$axios.get(`topics/show.json?node_name=programmer`),
      app.$axios.get(`topics/show.json?node_name=fe`),
      app.$axios.get(`topics/show.json?node_name=js`),
      app.$axios.get(`topics/show.json?node_name=nodejs`),
      app.$axios.get(`topics/show.json?node_name=vue`)
    ])
    .then(axios.spread(function (programmer, fe, js, nodejs, vue) {
      let sortlist = programmer.data.concat(fe.data, js.data, nodejs.data, vue.data).sort(function(a, b) {
        return parseInt(a.created) < parseInt(b.created) ? 1 : parseInt(a.created) === parseInt(b.created) ? 0 : -1
      })

      return {
        techList: sortlist
      }
    }))
    .catch(error => console.log(error))
  },
  components: {
    TopicList
  }
}
</script>
