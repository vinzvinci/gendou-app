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

    <a-layout class="container details">
      <p>
        Dear all OSS developers, thank you for supporting the OSS ecosystem thus
        far. Dev Protocol will reward up to $2,100,000 to the most active GitHub
        users as a tribute and thank you for all your efforts.
      </p>
      <div class="quote">
        <q
          >For your first experience to monetize on the blockchain. Dev Protocol
          maximizes creators' creativity.
        </q>
        <span>─</span
        ><a
          ref="noopener noreferrer"
          href="//ampmedia.jp/2021/05/14/frame00_dev-protocol/"
          target="_blank"
          >AMP Media ↗</a
        >
      </div>
      <ul class="supporters">
        <li><img src="/image/supporters/sios.png" /></li>
        <li><img src="/image/supporters/hashhub.png" /></li>
        <li><img src="/image/supporters/ms4s.png" /></li>
        <li><img src="/image/supporters/miraise.png" /></li>
        <li><img src="/image/supporters/monex-ventures.png" /></li>
      </ul>
      <FAQ />
    </a-layout>
  </main>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  created() {
    this.unsubscribe = this.$store.subscribe((mutation) => {
      if (mutation.type !== 'door/toggle' || mutation.payload !== true) {
        return
      }
      this.$router.push(`/result`)
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

<style>
.ant-modal-confirm-btns > button {
  display: none;
}
</style>

<style lang="scss" scoped>
.active {
  transition: opacity 0.4s ease-out;
  opacity: 0;
}

.main {
  background: transparent;
  display: grid;
  min-height: calc(42rem - 5rem);
  @media (min-width: 980px) {
    align-content: center;
    min-height: calc(100vw * 0.5625 - 6rem);
  }
}

.details {
  margin: 4rem auto;
  max-width: 980px;
  background: transparent;
  gap: 6rem;
}

.quote {
  margin: auto;
  max-width: 30rem;
  q {
    display: block;
    font-size: 1.4rem;
    quotes: none;
    font-style: italic;
    font-family: 'IBM Plank mono', monospace;
    &::before {
      content: '‘';
    }
    &::after {
      content: '’';
    }
  }
  span {
    margin-right: 1rem;
  }
  a {
    display: inline-block;
    &::after {
      content: '';
      display: block;
      width: 100%;
      border-bottom: 2px dashed;
    }
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.supporters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-evenly;
  }
  img {
    max-width: 120px;
    max-height: 50px;
    filter: grayscale(1);
    mix-blend-mode: multiply;
  }
}

p,
h3,
h4,
dl,
dd {
  margin: 0;
}

.light-blue {
  color: #00d0fd;
}

.information {
  display: grid;
  grid-template-columns: none;
  height: 100%;
  padding: 2rem 0;
  justify-content: center;
  align-content: space-around;

  @media (min-width: 980px) {
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    align-content: space-between;
    gap: 3rem;
  }
}
.message {
  .welcome {
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 3rem;
    font-weight: bold;
    font-family: 'Whyte Inktrap', sans-serif;
    @media (min-width: 1200px) {
      font-size: calc(2.8vw);
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
    margin-right: 1rem;

    img {
      width: 60px;
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
      font-size: 0.8rem;

      @media (max-width: 576px) {
        line-height: 1.2rem;
      }
    }
  }
}
</style>
