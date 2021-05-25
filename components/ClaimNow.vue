<template>
  <div>
    <div class="result">
      <p class="message display-5">You can claim now</p>
      <p class="prize">{{ prize }} DEV</p>
      <p class="usd display-6">
        <a-icon v-if="prizeUSD === 0" type="loading" />
        <span v-else>${{ prizeUSD }}</span> in USD
      </p>
    </div>

    <a-divider class="divider" />

    <div class="connect-github-app">
      <ConnectGitHubApp />
    </div>

    <div class="next">
      <p class="description display-6">
        Stake your DEV for an OSS project to earn
        <a-icon v-if="stakersAPY === 0" type="loading" />
        <span v-else>{{ stakersAPY }}</span> %/year<br />
        and support an OSS project by
        <a-icon v-if="creatorsAPY === 0" type="loading" />
        <span v-else>{{ creatorsAPY }}</span> %/year
        <a href="/" class="how-to">How to stake?</a>
      </p>
    </div>
  </div>
</template>

<script>
import BigNumber from 'bignumber.js'
import Web3 from 'web3'
import { mapActions, mapState } from 'vuex'
import { getStats, getAPY } from '~/utils/devkit'
import { HTTP_PROVIDER_URL } from '~/utils/web3'

export default {
  data() {
    return {
      prizeUSD: 0,
      creatorsAPY: 0, // NOTE: not use, now
      stakersAPY: 0,
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
      const { devPrice } = await getStats()

      this.prizeUSD = new BigNumber(this.prize)
        .multipliedBy(new BigNumber(devPrice))
        .dp(0)
        .toNumber()

      const web3 = new Web3(HTTP_PROVIDER_URL)
      const { apy, creators } = await getAPY(web3)
      this.creatorsAPY = creators.toFixed(2)
      this.stakersAPY = apy.toFixed(2)
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    linkToOtherWindow() {
      window.open(this.claimUrl, '_blank')
      this.$router.push('/claim')
    },
    ...mapActions(['getClaimInfo']),
  },
}
</script>

<style lang="scss">
@media (max-width: 576px) {
  .layout {
    padding: 0 25px;
  }
}

.content {
  .result {
    .message {
      margin-bottom: 15px;
      text-align: center;
    }

    .prize {
      margin-bottom: 15px;
      font-family: 'Whyte Inktrap', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 104px;
      line-height: 85px;
      text-align: center;
    }

    .usd {
      margin-bottom: 45px;
      font-family: 'Whyte Inktrap', sans-serif;
      text-align: center;
    }
  }

  .connect-github-app {
    margin-bottom: 27px;
    height: initial;
    color: #fff;
    text-align: center;
    background-color: #0a0a0a;
    line-height: 32px;
    border-radius: 0;
    border: none;
    cursor: pointer;
  }

  .next {
    margin-bottom: 128px;

    .description {
      position: relative;
      font-size: 16px;
      line-height: 28px;
      text-align: center;

      .how-to {
        position: absolute;
        top: 0;
        right: -148px;
        transform: translateX(100%);
        font-size: 16px;
        line-height: 28px;
        text-decoration: underline;
      }
    }
  }
}

@media (max-width: 576px) {
  .content {
    .result {
      .message {
        margin-bottom: 10px;
      }

      .prize {
        margin-bottom: 10px;
        font-size: 60px;
        line-height: 100%;
      }

      .usd {
        margin-bottom: 15px;
      }
    }

    .next {
      margin-bottom: 0;

      .description {
        line-height: 20px;

        .how-to {
          display: block;
          position: unset;
          transform: unset;
          padding-top: 20px;
        }
      }
    }
  }
}

.divider {
  margin: 4.6rem 0;
}
</style>
