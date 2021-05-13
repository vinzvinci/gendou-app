<template>
  <a-layout class="layout">
    <Header />
    <a-layout-content class="content">
      <div class="result">
        <p class="message display-5">Oops...</p>
        <img src="/image/pic03.png" alt="" class="heart-black" />
        <p class="message display-5">Reward not found</p>
      </div>

      <div class="section-border"></div>

      <div class="next">
        <p class="description display-5">
          Why so? Lorem ipsum dolor sit amet, consectetur<br />
          adipiscing elit, sed do eiusmod tempor incididunt ut<br />
          labore et dolore magna aliqua.
        </p>

        <div class="button-wrapper">
          <a-button type="default" class="button display-5">Buy Dev</a-button>
          <a-button type="default" class="button display-5">App</a-button>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  async created() {
    if ((await this.isConnected()) === false) this.$router.push('/')
  },
  methods: {
    ...mapActions(['isConnected']),
  },
}
</script>
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
  padding: 0 200px;

  .result {
    .message {
      margin-bottom: 24px;
      text-align: center;
    }

    .heart-black {
      display: block;
      margin: 0 auto 24px;
      width: 60px;
      height: 72px;

      & > .message {
        margin-bottom: 44px;
      }
    }
  }

  .section-border {
    margin-bottom: 27px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #fff;
  }

  .next {
    margin-bottom: 224px;

    .description {
      margin-bottom: 60px;
      line-height: 28px;
      text-align: center;
    }

    .button-wrapper {
      display: flex;
      justify-content: space-between;

      .button {
        margin-bottom: 23px;
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
  }
}

@media (max-width: 576px) {
  .content {
    padding: 0 25px;

    .result {
      .message {
        margin-bottom: 15px;
      }

      .heart-black {
        margin: 0 auto 15px;
        width: 40px;
        height: auto;

        & > .message {
          margin-bottom: 30px;
        }
      }
    }

    .section-border {
      margin-bottom: 15px;
    }

    .next {
      margin-bottom: 0;

      .description {
        margin-bottom: 40px;
        line-height: 20px;
      }

      .button-wrapper {
        .button {
          margin-bottom: 0;
          padding: 5px 15px;
          line-height: 25px;
        }
      }
    }
  }
}
</style>
