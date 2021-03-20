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
import { Button, message } from 'ant-design-vue'

export default Vue.extend({
  components: {
    Button,
  },
  computed: mapState({
    isConnected: (state) => state.isConnected,
    githubUserName: (state) => state.githubUserName,
  }),
  async mounted() {
    await this.getTorusUserInfo()
  },
  methods: {
    async connect() {
      await this.connectTorusWallet()
      if (this.githubUserName === '') {
        this.$store.commit('setIsConnected', false)
        await this.$torus.cleanUp()
        message.error('Please connect with your GitHub account')
      }
    },
    ...mapActions(['connectTorusWallet', 'getTorusUserInfo']),
  },
})
</script>
