<template>
  <div class="comment">
    <MuCard>
      <MuList>
        <MuSubHeader>全部评论</MuSubHeader>
        <div
          v-for="(item, index) in comments"
          :key="index"
        >
          <MuListItem>
            <MuListItemAction>
              <MuAvatar @click="toMember(item.member.username)">
                <img
                  :src="item.member.avatar_normal | largeAvatar"
                  alt="avatar"
                >
              </MuAvatar>
            </MuListItemAction>
            <MuListItemContent>
              <MuListItemTitle>{{ item.member.username }}</MuListItemTitle>
              <!-- eslint-disable -->
              <div
                class="article"
                v-html="item.content_rendered"
              />
            </MuListItemContent>
          </MuListItem>
          <MuDivider inset />
        </div>
      </MuList>
    </MuCard>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  methods: {
    toMember (name) {
      this.$router.push(`/member/${name}`)
    }
  }
}
</script>
