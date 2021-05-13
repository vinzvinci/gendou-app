<template>
  <a-button
    type="default"
    class="button display-5"
    :loading="loading"
    @click="handleConnect"
    >Connect to Github with Torus</a-button
  >
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
  computed: mapState({
    isConnected: (state) => state.isConnected,
    githubUserName: (state) => state.githubUserName,
    loading: (state) => state.buttonLoadingConnect,
  }),
  async mounted() {
    await this.getTorusUserInfo()
  },
  methods: {
    async handleConnect() {
      await this.startLoadingConnectButton()

      try {
        await this.connectTorusWallet()
      } catch (e) {
        await this.stopLoadingConnectButton()
        await this.$torus.cleanUp()
        this.openNotificationWithIcon('error', 'Error', e.message)
        return
      }

      if (this.githubUserName === '') {
        this.$store.commit('setIsConnected', false)
        await this.$torus.cleanUp()
        this.$emit('isConnectTorusWallet', false)
      } else {
        this.$emit('isConnectTorusWallet', true)
      }
    },
    openNotificationWithIcon(type, message, description) {
      this.$notification[type]({
        message,
        description,
        duration: 0,
      })
    },
    ...mapActions([
      'connectTorusWallet',
      'getTorusUserInfo',
      'startLoadingConnectButton',
      'stopLoadingConnectButton',
    ]),
  },
})
</script>
<style lang="scss" scoped>
.button {
  padding: 8px 24px;
  height: initial;
  color: #fff;
  background-color: #0a0a0a;
  line-height: 32px;
  border-radius: 0;
  border: none;
  cursor: pointer;
  &:hover {
    border: none;
  }
}

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
