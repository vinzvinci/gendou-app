<template>
  <a-button
    type="default"
    class="button display-5"
    :loading="loading"
    :disabled="disabled"
    @click="sign"
  >
    Check Airdrop Reward
  </a-button>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'
import Web3 from 'web3'

export default Vue.extend({
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions({
      fetchAirdropRewardInfo: 'claim/fetchAirdropRewardInfo',
    }),
    async sign() {
      try {
        const provider = await this.$web3modal.connect()
        const web3 = new Web3(provider)
        const [account] = await web3.eth.getAccounts()
        const inputMessage = 'verify account: ' + account
        const signature = await web3.eth.personal.sign(
          inputMessage,
          account,
          ''
        )
        await this.fetchAirdropRewardInfo({ address: account, sign: signature })

        this.$emit('onFinish', { error: undefined })
      } catch (error) {
        this.$emit('onFinish', {
          error,
        })
      }
    },
  },
})
</script>
