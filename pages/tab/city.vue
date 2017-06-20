<template>
  <topic-list :topicList="cityList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~components/TopicList'

export default {
  asyncData ({ params, error }) {
    return axios.all([
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=beijing`),
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=shanghai`),
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=shenzhen`),
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=hangzhou`),
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=life`)
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
