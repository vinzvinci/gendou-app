<template>
  <a-layout class="layout">
    <Header />
    <a-layout-content class="content">
      <div class="result">
        <p class="message display-5">You can claim now</p>
        <p class="prize">100 DEV</p>
        <p class="usd display-6">$100 in USD</p>
      </div>
      <div class="section-border"></div>
      <div class="next">
        <p class="description display-6">
          Stake your DEV for an OSS project to earn XX%/year<br />
          and support an OSS project by XX USD/year
          <a href="/" class="how-to">How to stake?</a>
        </p>
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
    padding: 0 25px;

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
