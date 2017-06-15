<template>
  <section class="container">
    <mu-card class="user-card">
      <mu-card-header :title="user.username" :subTitle="user.tagline">
        <mu-avatar :src="user.avatar_normal" slot="avatar"/>
      </mu-card-header>
      <mu-card-actions>
        <div class="chip-container">
          <mu-chip class="chip" backgroundColor="greenA100" v-if="user.website" @click="toWebsite(user.website)">
            <mu-avatar :size="32" icon="public" backgroundColor="greenA700" />{{ user.website }}
          </mu-chip>
          <mu-chip class="chip" backgroundColor="lightBlue100" v-if="user.twitter">
            <mu-avatar :size="32" src="../../twitter.png" />{{ user.twitter }}
          </mu-chip>
          <mu-chip class="chip" backgroundColor="grey300" v-if="user.github" @click="toGithub(user.github)">
            <mu-avatar :size="32" src="../../github.png" backgroundColor="#fff" />{{ user.github }}
          </mu-chip>
          <mu-chip class="chip" backgroundColor="deepOrange100" v-if="user.location">
            <mu-avatar :size="32" icon="location_city" backgroundColor="deepOrange800" />{{ user.location }}
          </mu-chip>
          <mu-chip class="chip" backgroundColor="blue300">
            <mu-avatar :size="32" icon="schedule" backgroundColor="indigo900" />{{ user.created }}
          </mu-chip>
        </div>
      </mu-card-actions>
    </mu-card>
    <topic-list :topicList="topicList" />
  </section>
</template>

<script>
import axios from 'axios'
import { format } from '~assets/script/utils'
import TopicList from '~components/TopicList'


export default {
  asyncData ({ params, error }) {
    return axios.all([
      axios.get(`https://www.v2ex.com/api/members/show.json?username=${params.name}`),
      axios.get(`https://www.v2ex.com/api/topics/show.json?username=${params.name}`)
    ])
    .then(axios.spread(function (user, topicList) {
      user.data.created = format(user.data.created)

      return {
        user: user.data,
        topicList: topicList.data
      }
    }))
    .catch(error => console.log(error))
  },
  methods: {
    toWebsite (url) {
      window.open(url)
    },
    toGithub (name) {
      window.open(`https://github.com/${name}`)
    },
  },
  components: {
    TopicList
  }
}
</script>

<style lang="scss">
.user-card {
  margin: -10px;
}
</style>

