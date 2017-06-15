<template>
  <section class="container">
    <mu-card>
      <div @click="toUser(detail.member.username)">
        <mu-card-header :title="detail.title" :subTitle="detail.member.username">
          <mu-avatar :src="detail.member.avatar_normal" slot="avatar"/>
        </mu-card-header>
      </div>
      <div class="mu-card-text" v-html="detail.content_rendered"></div>
      <mu-card-actions>
        <div class="chip-container">
          <mu-chip class="chip" @click="toNode(detail.node.name)">
            <mu-avatar :size="32" :src="detail.node.avatar_normal"/>{{ detail.node.title }}
          </mu-chip>
          <mu-chip class="chip">
            <mu-avatar :size="32" icon="schedule"/>{{ detail.created }}
          </mu-chip>
          <mu-chip class="chip">
            <mu-avatar :size="32" icon="comment"/>{{ detail.replies }}
          </mu-chip>
        </div>
      </mu-card-actions>
    </mu-card>
    <comment :comments="comments" />
  </section>
</template>

<script>
import axios from 'axios'
import { format } from '~assets/script/utils'
import Comment from '~components/Comment'


export default {
  asyncData ({ params, error }) {
    return axios.all([
      axios.get(`https://www.v2ex.com/api/topics/show.json?id=${params.id}`),
      axios.get(`https://www.v2ex.com/api/replies/show.json?topic_id=${params.id}`)
    ])
    .then(axios.spread(function (detail, comments) {
      detail.data[0].created = format(detail.data[0].created)

      return {
        detail: detail.data[0],
        comments: comments.data
      }
    }))
    .catch(error => console.log(error))
  },
  methods: {
    toUser (name) {
      this.$router.push(`/member/${name}`)
    },
    toNode (name) {
      this.$router.push(`/node/${name}`)
    }
  },
  components: {
    Comment
  }
}
</script>
