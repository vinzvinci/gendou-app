<template>
  <div>
    <lottie
      class="lottie"
      :options="defaultOptions"
      :start="animationStart"
      :width="0"
      @complete="handleComplete"
    />
    <a-layout class="layout">
      <Header />
      <a-layout-content class="content" :class="{ active: animationStart }">
        <div class="information">
          <div class="message">
            <p class="welcome display-3">
              Welcome to<br />
              the sustainable<br />
              world for OSS
            </p>
            <p class="airdrop display-5">
              DEV Airdrop for
              <span class="light-blue"
                >most <br />
                active</span
              >
              GitHub users
            </p>
          </div>
          <div class="sponsored">
            <div class="pic"><img src="/image/pic01.png" alt="sindre" /></div>
            <div class="profile">
              <div class="row-01">
                <p class="display-6">Sponsored by</p>
                <img src="/image/heart.png" alt="heart" />
              </div>
              <div class="row-02 display-4">Sindre Sorhus</div>
              <p class="row-03 display-6">
                The program is supported by<br />
                a donation by Sindre Sorhus
              </p>
            </div>
          </div>
        </div>
        <div class="button-wrapper">
          <Connect @isConnectTorusWallet="handleConnectTorusWallet" />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import Lottie from '~/components/Lottie'

import * as animationData from '~/assets/animationTest.json'

export default {
  computed: mapState({
    isConnected: (state) => state.isConnected,
    githubUserName: (state) => state.githubUserName,
  }),
  components: {
    Lottie,
  },
  data() {
    return {
      defaultOptions: { animationData },
      animationSpeed: 1,
      animationStart: false,
    }
  },
  methods: {
    async handleConnectTorusWallet(res) {
      if (res === false) {
        await this.stopLoadingConnectButton()
        this.infoGithubAccount()
        return
      }

      try {
        await this.getPrizeInfo()
        this.animationStart = true
      } catch (e) {
        await this.stopLoadingConnectButton()

        this.openNotificationWithIcon(
          'error',
          'An error has occurred',
          'Please try again after a while'
        )
        console.error(e.message)
      }

      await this.stopLoadingConnectButton()
    },
    handleAnimationStart() {
      this.animationStart = true
    },
    async handleComplete() {
      if (await this.isGotPrize()) {
        this.$router.push('/result01')
      } else {
        this.$router.push('/result02')
      }
    },
    openNotificationWithIcon(type, message, description) {
      this.$notification[type]({
        message,
        description,
        duration: 0,
      })
    },
    infoGithubAccount() {
      this.$info({
        title: 'Github account connect error',
        content: (
          <div>
            <p>
              Click "More Options" to select Github.
              <br />
              <br />
              <img src="/image/pic07.png" style="width: 100%" />
              <br />
              <br />
              Then click the Github icon from the newly added icons
              <br />
              <br />
              <img src="/image/pic08.png" style="width: 100%" />
            </p>
          </div>
        ),
      })
    },
    ...mapActions(['getPrizeInfo', 'isGotPrize', 'stopLoadingConnectButton']),
  },
}
</script>
<style lang="scss">
body {
  background: url('/images/Animation_Test_001_0001.jpg') no-repeat;
  background-size: 100% auto;
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

.lottie {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

@media (max-width: 576px) {
  .lottie {
    position: absolute;
    top: 100px;
    left: 0;
    z-index: 0;
  }
}

.active {
  transition: opacity 0.4s ease-out;
  opacity: 0;
}

.content {
  position: relative;
  padding-bottom: 246px;

  .information {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 134px;
    z-index: 1;

    .message {
      .welcome {
        margin-bottom: 60px;
        font-weight: bold;
        font-family: 'Whyte Inktrap', sans-serif;
      }
    }

    .sponsored {
      display: flex;
      .pic {
        margin-right: 25px;

        img {
          width: 72px;
          height: 72px;
        }
      }
      .profile {
        .row-01 {
          display: flex;
          justify-content: space-between;

          img {
            width: 20px;
            height: 24px;
          }
        }
        .row-02 {
          margin-bottom: 8px;
          font-family: 'Whyte Inktrap', sans-serif;
        }
        .row-03 {
          color: #999;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .information {
      flex-direction: column;
      margin-top: 20px;

      .message {
        margin-bottom: 60px;
        text-align: center;

        .welcome {
          margin-bottom: 20px;
        }
      }

      .sponsored {
        margin-bottom: 40px;

        .pic {
          margin-right: 15px;

          img {
            width: 50px;
            height: 50px;
          }
        }
        .profile {
          .row-01 {
            img {
              width: 20px;
              height: 24px;
            }
          }
          .row-02 {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 6px;
    width: 100%;

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
  }

  @media (max-width: 576px) {
    .button-wrapper {
      margin-top: 0;
      padding-top: 100px;

      .button {
        padding: 10px 15px;
        line-height: 100%;
      }
    }
  }
}

.light-blue {
  color: #00d0fd;
}
</style>
