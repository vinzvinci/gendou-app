<template>
  <div class="container">
    <Header />
    <div class="content">
      <div class="result">
        <p class="message">Oops...</p>
        <img src="/image/pic03.png" alt="" class="heart-black" />
        <p class="message">Reward not found</p>
      </div>

      <div class="section-border"></div>

      <div class="next">
        <p class="description">
          Why so? Lorem ipsum dolor sit amet, consectetur<br />
          adipiscing elit, sed do eiusmod tempor incididunt ut<br />
          labore et dolore magna aliqua.
        </p>

        <div class="button-wrapper">
          <a-button type="default" class="button">Buy Dev</a-button>
          <a-button type="default" class="button">App</a-button>
        </div>
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
      margin-bottom: 24px;
      font-size: 20px;
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
      font-size: 16px;
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
