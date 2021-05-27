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

    <div class="claim-url">
      <a ref="noopener noreferrer" :href="claimUrl" target="_blank">
        <a-button type="default" class="button display-5">
          Claim with Iroiro <a-icon type="link" />
        </a-button>
      </a>
    </div>

    <div class="about-apy">
      <p class="description display-6">
        Stake your DEV for an OSS project to earn
        <a-icon v-if="stakersAPY === 0" type="loading" />
        <span v-else>{{ stakersAPY }}</span> %/year<br />
        and support an OSS project by
        <a-icon v-if="creatorsAPY === 0" type="loading" />
        <span v-else>{{ creatorsAPY }}</span> %/year
      </p>
    </div>
    <div class="next">
      <div class="next-heading">Next?</div>
      <div class="about-stakessocial">
        <img
          width="100%"
          src="https://devprotocol.xyz/assets/img/macbook_stakes.png"
        />
        <p class="display-5">Explore the 1,600+ OSS projects on</p>
        <img
          width="240px"
          src="https://devprotocol.xyz/assets/img/Stakes.svg"
        />
        <div class="ss-explore-button">
          <a href="https://stakes.social/">
            <a-button type="default" class="button display-5">
              Explore
            </a-button>
          </a>
        </div>
      </div>
    </div>
    <a-divider />
    <div class="joinus">
      <div class="joinus-heading">join us</div>
      <div class="apply-oss">
        <div class="apply-oss-info">
          <div class="apply-oss-title display-5">Apply your OSS Project!</div>
          <div class="apply-oss-description">
            <p>
              Offer your patrons an additional incentive to support your OSS
              project by allowing them to collect an interest rate on the DEV
              they stake.
            </p>
            <div class="apply-oss-description-more">Learn more</div>
          </div>
        </div>
        <div>
          <a href="https://stakes.social/create">
            <a-button type="default" class="button display-5">Apply</a-button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
  layout: 'claim',
  async fetch() {
    await this.initDevInfo()
  },
  computed: {
    ...mapState({
      prize: (state) => state.reward,
      prizeUSD: (state) => state.rewardUSD,
      creatorsAPY: (state) => state.creatorsAPY,
      stakersAPY: (state) => state.stakersAPY,
      claimUrl: (state) => state.claimUrl,
    }),
  },
  methods: {
    ...mapActions({
      initDevInfo: 'fetchDevInfo',
    }),
  },
})
</script>

<style lang="scss">
@media (max-width: 576px) {
  .layout {
    padding: 0 25px;
  }
}

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
    color: #fff;
    background-color: #0a0a0a;
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

  .claim-url {
    margin: 130px auto;
    height: initial;
    color: #fff;
    text-align: center;
    background-color: #0a0a0a;
    line-height: 32px;
    border-radius: 0;
    border: none;
    cursor: pointer;
    width: 280px;
  }

  .about-apy {
    margin-bottom: 128px;

    .description {
      position: relative;
      font-size: 16px;
      line-height: 28px;
      text-align: center;

      .how-to {
        border-bottom: 3px solid;
      }
    }
  }

  .next {
    margin-top: 120px;
    text-align: center;
    &-heading {
      padding-top: 120px;
      font-family: 'Whyte Inktrap', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 104px;
      line-height: 85px;
      text-align: center;
    }
    .about-stakessocial {
      width: 100%;
    }
    .ss-explore-button {
      margin: 40px 0 80px 0;
    }
  }

  .joinus {
    margin: 0 0 80px 0;
    .apply-oss {
      display: flex;
      flex-direction: column;
      align-items: center;
      &-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }
      &-title {
        width: 35%;
        margin-right: 10px;
      }
      &-description {
        width: 65%;
        &-more {
          text-align: right;
        }
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
      }
    }
  }
}
</style>
