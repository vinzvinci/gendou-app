<template>
  <div class="container">
    <Header />
    <div class="content">
      <div class="result">
        <p class="message">You can claim now</p>
        <p class="prize">100 DEV</p>
        <p class="usd">$100 in USD</p>
      </div>
      <div class="section-border"></div>
      <div class="next">
        <div class="step-wrapper">
          <div class="share">Share to get your DEV</div>
          <div class="arrow-wrapper">
            <img src="/image/arrow01.png" alt="" class="arrow-right" />
          </div>
          <div class="tweet-wrapper">
            <a-button type="default" class="tweet-button">Tweet</a-button>
            <img src="/image/arrow02.png" alt="" class="arrow-bottom" />
          </div>
        </div>
        <div class="form-wrapper">
          <a-input-search
            class="claim-form"
            placeholder="Paste the tweet URL here to confirm"
            size="large"
          >
            <a-button class="claim-button" slot="enterButton">Claim</a-button>
          </a-input-search>
        </div>
        <p class="description">
          Stake your DEV for an OSS project to earn XX%/year<br />
          and support an OSS project by XX USD/year
          <a href="/" class="how-to">How to stake?</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  margin: 0 auto;
  width: 552px;

  .result {
    .message {
      margin-bottom: 15px;
      font-size: 20px;
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
      font-size: 16px;
      text-align: center;
    }
  }

  .section-border {
    margin-bottom: 27px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #0a0a0a;
  }

  .next {
    margin-bottom: 128px;

    .step-wrapper {
      display: flex;
      align-items: start;
      justify-content: space-between;
      margin-bottom: 25px;

      .share {
        font-family: 'Whyte Inktrap', sans-serif;
        font-weight: bold;
        font-size: 32px;
      }

      .arrow-wrapper {
        display: flex;
        align-items: center;
        height: 48px;

        .arrow-right {
          width: 24px;
        }
      }

      .tweet-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .tweet-button {
          margin-bottom: 23px;
          padding: 8px 24px;
          height: initial;
          color: #fff;
          background-color: #0a0a0a;
          font-size: 20px;
          line-height: 32px;
          border-radius: 0;
          border: none;
          cursor: pointer;

          &:hover {
            border: none;
          }
        }

        .arrow-bottom {
          width: 24px;
        }
      }
    }

    .form-wrapper {
      margin-bottom: 60px;

      .claim-button {
        padding: 8px 24px;
        height: initial;
        color: #fff;
        background-color: #999;
        font-size: 20px;
        line-height: 32px;
        border-radius: 0;
        border: none;
        cursor: pointer;

        &:hover {
          border: none;
        }
      }
    }

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
</style>

<style lang="scss">
body {
  background: url('/image/background01.png');
  background-position: center center;
  background-size: auto 100%;
}

.claim-form {
  .ant-input {
    padding: 8px 24px;
    height: initial;
    border: none;
    border-radius: 0;
    font-size: 20px;
    line-height: 32px;
    &:focus {
      box-shadow: none;
    }
  }
}
</style>
