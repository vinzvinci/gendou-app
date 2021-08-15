<template>
  <div v-if="isConnected">
    <GetRewardUrlButton @onFinish="onFinish" />
  </div>
  <div v-else>
    <a-button
      type="default"
      class="button display-5"
      :disabled="disabled"
      @click="showModal"
    >
      <span>Connect to a wallet</span>
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
    }
  },
  fetch() {
    this.isConnected = Boolean(this.$web3modal.getProvider())
    this.setWalletConnected(this.isConnected)
  },
  fetchOnServer: false,
  methods: {
    async showModal() {
      const provider = await this.$web3modal.connect()
      console.log('show web3modal', provider)
      this.isConnected = true
    },
    ...mapMutations({
      setWalletConnected: 'claim/setWalletConnected',
    }),
    onFinish(v) {
      if (v.error) {
        this.$message.error('fail fetch reward infomation')
        return
      }
      this.$emit('open', true)
    },
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
