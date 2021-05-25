<template>
  <div>
    <a-layout class="layout">
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

.layout {
  padding: 0 8rem;
  background: transparent;
  @media (max-width: 576px) {
    padding: 0 2rem;
  }
}

p {
  margin: 0;
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
      margin-top: 140px;

      .message {
        margin-bottom: 20px;
        text-align: center;

        .welcome {
          margin-bottom: 20px;
        }
      }

      .sponsored {
        margin-bottom: 0;

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

  .input-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 6px;
    width: 100%;

    .input {
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
    .input-wrapper {
      margin-top: 0;
      padding-top: 30px;

      .input {
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
