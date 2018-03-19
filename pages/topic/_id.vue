<template>
  <section class="container">
    <mu-card>
      <nuxt-link :to="'/member/' + detail.member.username">
        <mu-card-header :title="detail.title" :subTitle="detail.member.username">
          <mu-avatar :src="detail.member.avatar_normal" slot="avatar"/>
        </mu-card-header>
      </nuxt-link>
      <div class="mu-card-text" v-html="detail.content_rendered"></div>
      <mu-card-actions>
        <div class="chip-container">
          <mu-chip class="chip" @click="toNode(detail.node.name)">
            <mu-avatar :size="32" :src="detail.node.avatar_normal | image"/>{{ detail.node.title }}
          </mu-chip>
          <mu-chip class="chip">
            <mu-avatar :size="32" icon="schedule"/>{{ detail.created | timeAgo }}
          </mu-chip>
          <mu-chip class="chip">
            <mu-avatar :size="32" icon="comment"/>{{ detail.replies }}
          </mu-chip>
        </div>
      </mu-card-actions>
    </mu-card>
    <comment :comments="comments" v-if="comments.length" />
  </section>
</template>

<script>
import Comment from '~/components/Comment'

export default {
  head () {
    return {
      titleTemplate: '%s - 话题详情'
    }
  },
  async asyncData ({ app, params }) {
    const [ detail, comments ] = await Promise.all([
      app.$axios.get(`topics/show.json?id=${params.id}`).then(res => res.data[0]),
      app.$axios.get(`replies/show.json?topic_id=${params.id}`).then(res => res.data)
    ])

    return {
      detail,
      comments
    }
  },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  methods: {
    toNode (name) {
      this.$router.push(`/node/${name}`)
    }
  },
  components: {
    Comment
  }
}
</script>
