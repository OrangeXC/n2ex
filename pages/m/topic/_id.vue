<template>
  <section class="container">
    <mu-card>
      <nuxt-link :to="'/m/member/' + detail.member.username">
        <mu-card-header
          :title="detail.title"
          :sub-title="detail.member.username"
        >
          <mu-avatar slot="avatar">
            <img
              :src="detail.member.avatar_normal | largeAvatar"
              alt="avatar"
            >
          </mu-avatar>
        </mu-card-header>
      </nuxt-link>
      <mu-card-text>
        <!-- eslint-disable -->
        <article
          class="article"
          v-html="detail.content_rendered"
        />
      </mu-card-text>
      <MuCardActions>
        <div class="chip-container">
          <MuChip
            class="chip"
            @click="toNode(detail.node.name)"
          >
            <MuAvatar :size="32">
              <img
                :src="detail.node.avatar_normal | image"
                alt="avatar"
              >
            </MuAvatar>
            {{ detail.node.title }}
          </MuChip>
          <MuChip class="chip">
            <MuAvatar :size="32">
              <MuIcon value="schedule" />
            </MuAvatar>
            {{ detail.created | timeAgo }}
          </MuChip>
          <MuChip class="chip">
            <MuAvatar :size="32">
              <MuIcon value="comment" />
            </MuAvatar>
            {{ detail.replies }}
          </MuChip>
        </div>
      </MuCardActions>
    </mu-card>
    <Comment
      v-if="comments.length"
      :comments="comments"
    />
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
  components: {
    Comment
  },
  async asyncData ({ app, params }) {
    const [detail, comments] = await Promise.all([
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
  layout: 'mobile'
}
</script>
