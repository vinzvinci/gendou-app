<template>
  <a-layout class="layout">
    <Header />
    <a-layout-content class="content">
      <div class="result">
        <p class="message">You can claim now</p>
        <p class="prize">100 DEV</p>
        <p class="usd">$100 in USD</p>
      </div>
      <div class="section-border"></div>
      <div class="next">
        <p class="description">
          Stake your DEV for an OSS project to earn XX%/year<br />
          and support an OSS project by XX USD/year
          <a href="/" class="how-to">How to stake?</a>
        </p>
      </div>
    </a-layout-content>
  </a-layout>
</template>

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

.content {
  padding: 0 200px;

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
</style>
