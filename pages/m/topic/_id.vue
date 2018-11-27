<template>
  <section class="container">
    <MuCard>
      <NuxtLink :to="'/m/member/' + detail.member.username">
        <MuCardHeader
          :title="detail.title"
          :sub-title="detail.member.username"
        >
          <MuAvatar slot="avatar">
            <img
              :src="detail.member.avatar_normal | largeAvatar"
              alt="avatar"
            >
          </MuAvatar>
        </MuCardHeader>
      </NuxtLink>
      <MuCardText>
        <!-- eslint-disable -->
        <article
          class="article"
          v-html="detail.content_rendered"
        />
      </MuCardText>
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
    </MuCard>
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
  components: {
    Comment
  },
  methods: {
    toNode (name) {
      this.$router.push(`/node/${name}`)
    }
  },
  layout: 'mobile'
}
</script>
