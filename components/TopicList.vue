<template>
  <section class="container">
    <mu-card v-for="item in topicList" :key="item.id">
      <nuxt-link :to="`/m/topic/${item.id}`">
        <mu-card-header :title="item.title" :subTitle="getSubTitle(item)">
          <mu-avatar :src="item.member.avatar_normal" slot="avatar">
            <img :src="item.member.avatar_normal" alt="avatar">
          </mu-avatar>
        </mu-card-header>
      </nuxt-link>
      <mu-card-actions>
        <div class="chip-container">
          <mu-chip class="chip" @click="toNode(item.node.name)">
            <mu-avatar :size="32">
              <img :src="item.node.avatar_normal | image" alt="avatar">
            </mu-avatar>
            {{ item.node.title }}
          </mu-chip>
          <mu-chip class="chip">
            <mu-avatar :size="32">
              <mu-icon value="comment"></mu-icon>
            </mu-avatar>
            {{ item.replies }}
          </mu-chip>
        </div>
      </mu-card-actions>
    </mu-card>
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
