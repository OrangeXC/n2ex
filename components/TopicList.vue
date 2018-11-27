<template>
  <section class="container">
    <MuCard
      v-for="item in topicList"
      :key="item.id"
    >
      <NuxtLink :to="`/m/topic/${item.id}`">
        <MuCardHeader
          :title="item.title"
          :sub-title="getSubTitle(item)"
        >
          <MuAvatar slot="avatar">
            <img
              :src="item.member.avatar_normal | largeAvatar"
              alt="avatar"
            >
          </MuAvatar>
        </MuCardHeader>
      </NuxtLink>
      <MuCardActions>
        <div class="chip-container">
          <MuChip
            class="chip"
            @click="toNode(item.node.name)"
          >
            <MuAvatar :size="32">
              <img
                :src="item.node.avatar_normal | image"
                alt="avatar"
              >
            </MuAvatar>
            {{ item.node.title }}
          </MuChip>
          <MuChip class="chip">
            <MuAvatar :size="32">
              <MuIcon value="comment" />
            </MuAvatar>
            {{ item.replies }}
          </MuChip>
        </div>
      </MuCardActions>
    </MuCard>
  </section>
</template>

<script>
import { timeAgo } from '../plugins/filters'

export default {
  props: {
    topicList: {
      type: Array,
      required: true
    }
  },
  methods: {
    toNode (name) {
      this.$router.push(`/m/node/${name}`)
    },
    getSubTitle (item) {
      return `by ${item.member.username} • ${timeAgo(item.created)}`
    }
  }
}
</script>
