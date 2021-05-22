<template>
  <div>
    <a-layout-content class="content">
      <YouEarned v-if="prize > 0 && claimUrl !== ''" />
      <ClaimNow v-else-if="prize > 0" />
      <RewardNotFound v-else />
    </a-layout-content>
    <a-layout-footer v-if="prize > 0" class="footer">
      <div class="footer-wrapper">
        <img src="/image/logo01.png" alt="Dev Protocol" class="footer-logo" />
        <div class="sponsored">
          <img src="/image/pic05.png" alt="Sindre" class="photo" />
          <div class="profile-wrapper">
            <p class="by display-6">Sponsored by</p>
            <p class="name display-4">Sindre Sorhus</p>
            <p class="profile-description display-6">
              The program is supported by <br />
              a donation by Sindre Sorhus
            </p>
          </div>
          <img src="/image/pic06.png" alt="heart" class="heart" />
        </div>
      </div>
    </a-layout-footer>
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
