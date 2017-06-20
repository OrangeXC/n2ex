<template>
  <topic-list :topicList="techList" />
</template>

<script>
import axios from 'axios'
import TopicList from '~components/TopicList'

export default {
  asyncData ({ params, error }) {
    return axios.all([
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=programmer`),
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=fe`),
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=js`),
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=nodejs`),
      axios.get(`https://proxy-uuptfgaypk.now.sh/topics/show.json?node_name=vue`)
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
