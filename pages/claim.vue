<template>
  <div>
    <a-layout-content class="content">
      <ShowClaimUrl v-if="prize > 0 && claimUrl !== ''" />
      <ClaimNow v-else-if="prize > 0" />
      <RewardNotFound v-else />
    </a-layout-content>
  </div>
</template>

<script>
import Web3 from 'web3'
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import { getAPY } from '~/utils/devkit'
import { HTTP_PROVIDER_URL } from '~/utils/web3'

export default Vue.extend({
  layout: 'claim',
  data() {
    return {
      creatorsAPY: '-', // NOTE: not use, now
      stakersAPY: '-',
    }
  },
  fetch() {
    if (process.client) {
      this.generateReuqestState()
    }
  },
  computed: {
    ...mapState({
      prize: (state) => state.reward,
      claimUrl: (state) => state.claimUrl,
    }),
  },
  async mounted() {
    try {
      const web3 = new Web3(HTTP_PROVIDER_URL)
      const { apy, creators } = await getAPY(web3)
      this.creatorsAPY = creators.toFixed(2)
      this.stakersAPY = apy.toFixed(2)
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    ...mapActions({
      generateReuqestState: 'github/generateReuqestState',
    }),
  },
})
</script>

<style lang="scss" scoped>
.content {
  padding: 0 200px;
}

@media (max-width: 576px) {
  .content {
    padding: 0 25px;
  }
}
</style>
