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
      <a-layout-content class="content">
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
        <div class="input-wrapper">
          <InputGitHubId @startCallback="handleStart" />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import Vue from 'vue'
import Lottie from '~/components/Lottie'

import * as animationData from '~/assets/animationTest.json'

export default Vue.extend({
  components: {
    Lottie,
  },
  data() {
    return {
      animationStart: false,
      defaultOptions: { animationData },
    }
  },
  methods: {
    handleStart() {
      this.animationStart = true
    },
    handleComplete() {
      this.$router.push(`/claim`)
    },
  },
})
</script>

<style lang="scss" scoped>
body {
  background: url('/image/pic09.jpg') no-repeat;
  background-size: 100% auto;
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
    top: 0;
    left: 0;
    z-index: 0;
  }
}

.active {
  transition: opacity 0.4s ease-out;
  opacity: 0;
}
</style>
