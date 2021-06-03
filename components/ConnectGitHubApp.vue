<template>
  <a :href="githubAuthUrl">
    <a-button type="default" class="button display-5" :disabled="disabled">
      Connect to GitHub
    </a-button>
  </a>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    githubAuthUrl() {
      const redirectUri =
        process.env.REDIRECT_URI ||
        `${window.location.protocol}//${window.location.host}/auth`
      const clientId = process.env.GITHUB_CLIENT_ID || 'af27125807c57127f1fe'
      return this.requestState
        ? `https://github.com/login/oauth/authorize?client_id=${clientId}&state=${this.requestState}&redirect_uri=${redirectUri}`
        : ''
    },
    ...mapState({
      requestState: (state) => state.github.requestState,
    }),
  },
})
</script>

<style lang="scss" scoped>
@media (max-width: 576px) {
  .button {
    padding: 10px 15px;
    line-height: 100%;
  }
}
</style>
<style>
.ant-btn-loading::before {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
