<template>
  <main>
    <a-layout class="container main">
      <div class="information">
        <div class="message">
          <p class="welcome">
            Welcome to<br />
            the sustainable<br />
            world for OSS
          </p>
          <p class="airdrop">
            DEV Airdrop for
            <span class="light-blue"
              >most <br />
              active</span
            >
            GitHub users
          </p>
        </div>
        <div class="input-wrapper">
          <InputGitHubId @startCallback="handleStart" />
        </div>
        <div class="sponsored">
          <div class="pic"><img src="/image/pic01.png" alt="sindre" /></div>
          <div class="profile">
            <div class="name">
              <p class="by">
                Sponsored by<br />
                <span>Sindre Sorhus</span>
              </p>
              <img src="/image/heart.png" alt="heart" />
            </div>
            <p class="desc">
              The program is supported by a donation by Sindre Sorhus
            </p>
          </div>
        </div>
      </div>
    </a-layout>

    <a-layout class="container"> </a-layout>
  </main>
</template>

<script>
import Vue from 'vue'
// import { mapActions } from 'vuex'

export default Vue.extend({
  created() {
    this.unsubscribe = this.$store.subscribe((mutation) => {
      if (mutation.type !== 'door/toggle' || mutation.payload !== true) {
        return
      }
      this.$router.push(`/claim`)
    })
  },
  beforeDestroy() {
    this.unsubscribe()
  },
  methods: {
    handleStart() {
      this.$store.dispatch('door/open', true)
    },
  },
})
</script>

<style lang="scss" scoped>
body {
  background: url('/image/pic09.jpg') no-repeat;
  background-size: 100% auto;
}

.active {
  transition: opacity 0.4s ease-out;
  opacity: 0;
}

.main {
  background: transparent;
  height: 100%;
  display: grid;
  align-items: center;
}

p {
  margin: 0;
}

.light-blue {
  color: #00d0fd;
}

.information {
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  @media (max-width: 576px) {
    grid-template-columns: none;
    height: 100%;
    justify-content: space-between;
    align-content: space-between;
    padding: 2rem 0;
  }
}
.message {
  .welcome {
    font-size: 2rem;
    line-height: 2.4rem;
    margin-bottom: 3rem;
    font-weight: bold;
    font-family: 'Whyte Inktrap', sans-serif;
    @media (max-width: 576px) {
      margin-bottom: 1.5rem;
    }
    br {
      @media (max-width: 576px) {
        display: none;
      }
    }
  }
  .airdrop {
    font-size: 1rem;
    line-height: 1.2rem;
    font-family: 'IBM Plex Mono', monospace;
  }
}
.input-wrapper {
  display: flex;
  justify-content: center;
}
.sponsored {
  display: flex;
  .pic {
    margin-right: 25px;

    img {
      width: 72px;
      @media (max-width: 576px) {
        width: 36px;
      }
    }
  }
  .profile {
    display: grid;
    justify-items: baseline;

    .name {
      position: relative;

      p {
        span {
          font-weight: bold;
          font-size: 1.4rem;
          font-family: 'Whyte Inktrap', sans-serif;
          @media (max-width: 576px) {
            font-size: 1.2rem;
          }
        }
      }
      img {
        width: 20px;
        height: 24px;
        position: absolute;
        right: -2rem;
        top: 0;
      }
    }
    .desc {
      color: #999;
      @media (max-width: 576px) {
        line-height: 1.2rem;
      }
    }
  }
}
</style>
