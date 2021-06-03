<template>
  <a-button
    type="default"
    class="button display-5"
    :loading="loading"
    :disabled="disabled"
    @click="sign"
  >
    Sign
  </a-button>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import Web3 from 'web3'

export default Vue.extend({
  props: {
    message: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState({
      requestState: (state) => state.github.requestState,
    }),
  },
  methods: {
    async sign() {
      try {
        const provider = await this.$web3modal.connect()
        const web3 = new Web3(provider)
        const inputMessage = this.message
        const [account] = await web3.eth.getAccounts()
        const signature = await web3.eth.personal.sign(
          inputMessage,
          account,
          ''
        )
        this.$emit('signed', { signature, message: inputMessage })
      } catch (error) {
        this.$emit('signed', {
          signature: undefined,
          message: undefined,
          error,
        })
      }
    },
  },
})
</script>
