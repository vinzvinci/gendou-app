<template>
  <div class="NuxtConnect">
    <Button @click="connect">Connect Torus Wallet</Button>
    <div v-if="isConnected && githubUserName">
      <p>connected this github account: {{ githubUserName }}</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import { Button } from 'ant-design-vue'

const GET_GITHUB_USER_API_URL = 'https://api.github.com/user/'

export default Vue.extend({
  components: {
    Button,
  },
  computed: mapState({
    isConnected: (state) => state.isConnected,
    githubUserName: (state) => state.githubUserName,
  }),
  methods: {
    async connect() {
      await this.connectTorusWallet()
      const verifierId = this.$store.state.userInfo.verifierId
      const githubUserId = verifierId.split('github|')[1]
      const url = GET_GITHUB_USER_API_URL + githubUserId
      const res = await this.$axios.get(url)
      this.$store.commit('setGitHubUserName', res.data.login)
    },
    ...mapActions(['connectTorusWallet']),
  },
})
</script>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}
</style>
