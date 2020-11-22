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
      <mu-card-actions>
        <div class="chip-container">
          <mu-chip
            class="chip"
            @click="toNode(detail.node.name)"
          >
            <mu-avatar :size="32">
              <img
                :src="detail.node.avatar_normal | image"
                alt="avatar"
              >
            </mu-avatar>
            {{ detail.node.title }}
          </mu-chip>
          <mu-chip class="chip">
            <mu-avatar :size="32">
              <mu-icon value="schedule" />
            </mu-avatar>
            {{ detail.created | timeAgo }}
          </mu-chip>
          <mu-chip class="chip">
            <mu-avatar :size="32">
              <mu-icon value="comment" />
            </mu-avatar>
            {{ detail.replies }}
          </mu-chip>
        </div>
      </mu-card-actions>
    </mu-card>
    <comment
      v-if="comments.length"
      :comments="comments"
    />
  </section>
</template>

<script>
import Comment from '~/components/Comment'

export default {
  components: {
    Comment
  },
  layout: 'mobile',
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData ({ app, params }) {
    const [detail, comments] = await Promise.all([
      app.$axios.get(`/api/topics/show.json?id=${params.id}`).then(res => res.data[0]),
      app.$axios.get(`/api/replies/show.json?topic_id=${params.id}`).then(res => res.data)
    ])

    return {
      detail,
      comments
    }
  },
  head () {
    return {
      titleTemplate: '%s - 话题详情'
    }
  },
  methods: {
    toNode (name) {
      this.$router.push(`/node/${name}`)
    }
  }
}
</script>
