<template>
  <a-layout class="layout">
    <Header />
    <a-layout-content class="content">
      <ClaimNow v-if="prize > 0 && !isGotPrize" />
      <RewardNotFound v-else-if="!isGotPrize" />
      <YouEarned v-else-if="prize > 0 && isGotPrize" />
      <a-spin v-else />
    </a-layout-content>
    <a-layout-footer v-if="prize > 0 && isGotPrize" class="footer">
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
  </a-layout>
</template>

<script>
import Web3 from 'web3'
import { mapActions, mapState } from 'vuex'
import { getAPY } from '~/utils/devkit'
import { HTTP_PROVIDER_URL } from '~/utils/web3'

export default {
  data() {
    return {
      prize: 0,
      creatorsAPY: '-', // NOTE: not use, now
      stakersAPY: '-',
    }
  },
  computed: {
    ...mapState({
      isGotPrize: (state) => state.reward > 0,
      isConnected: (state) => state.isConnected,
    }),
  },
  async created() {
    if ((await this.isConnected) === false) this.$router.push('/')
  },
  async mounted() {
    try {
      const prize = await this.getPrize()
      this.prize = prize

      const web3 = new Web3(HTTP_PROVIDER_URL)
      const { apy, creators } = await getAPY(web3)
      this.creatorsAPY = creators.toFixed(2)
      this.stakersAPY = apy.toFixed(2)
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    ...mapActions(['getPrize']),
  },
}
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
<style lang="scss">
body {
  background: url('/image/background01.png');
  background-position: center center;
  background-size: auto 100%;
}

.layout {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 156px;
  width: 100%;
  max-width: 1440px;
  min-width: 375px;
  background-color: transparent;
}

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

  .section-border {
    margin-bottom: 27px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #fff;
  }

  .claim-button {
    margin-bottom: 27px;
    height: initial;
    color: #fff;
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

    .section-border {
      margin-bottom: 15px;
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
</style>
