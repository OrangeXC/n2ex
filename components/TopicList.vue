<template>
  <section class="container">
    <mu-card v-for="item in topicList" :key="item.id">
      <nuxt-link :to="'/topic/' + item.id">
        <mu-card-header :title="item.title" :subTitle="`by ${item.member.username} • ${ago(item.created)}`">
          <mu-avatar :src="item.member.avatar_normal" slot="avatar"/>
        </mu-card-header>
      </nuxt-link>
      <mu-card-actions>
        <div class="chip-container">
          <mu-chip class="chip" @click="toNode(item.node.name)">
            <mu-avatar :size="32" :src="item.node.avatar_normal | image" />{{ item.node.title }}
          </mu-chip>
          <mu-chip class="chip">
            <mu-avatar :size="32" icon="comment"/>{{ item.replies }}
          </mu-chip>
        </div>
      </mu-card-actions>
    </mu-card>
  </section>
</template>

<script>
import { timeAgo, image } from '~/plugins/filters'

export default {
  props: {
    topicList: {
      type: Array,
      required: true
    }
  },
  methods: {
    toNode (name) {
      this.$router.push(`/node/${name}`)
    },
    ago (time) {
      return timeAgo(time)
    }
  }
}
</script>
