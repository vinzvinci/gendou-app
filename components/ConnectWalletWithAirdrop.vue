<template>
  <div v-if="isConnected && showRewardButton" style="text-align: center">
    <GetRewardUrlButton @onFinish="onFinish" />
  </div>
  <div v-else-if="!isConnected" style="text-align: center">
    <a-button
      type="default"
      class="button display-5"
      :loading="loading"
      :disabled="disabled"
      @click="showModal"
    >
      Connect to a wallet
    </a-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isConnected: false,
      loading: false,
      showRewardButton: true,
    }
  },
  fetch() {
    this.isConnected = Boolean(this.$web3modal.getProvider())
    this.setWalletConnected(this.isConnected)
  },
  fetchOnServer: false,
  methods: {
    async showModal() {
      this.loading = true

      const provider = await this.$web3modal.connect()
      console.log('show web3modal', provider)
      this.isConnected = true

      this.loading = false
    },
    ...mapMutations({
      setWalletConnected: 'claim/setWalletConnected',
    }),
    onFinish(v) {
      if (v.error) {
        this.$message.error('fail fetch reward infomation')
        return
      }
      this.showRewardButton = false
      this.$emit('open', true)
    },
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
  &:hover,
  &:focus {
    border: none;
    color: #fff;
    background-color: #0a0a0a;
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
