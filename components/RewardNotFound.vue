<template>
  <div>
    <div class="result">
      <p class="message display-5">Oops...</p>
      <img src="/image/pic03.png" alt="" class="heart-black" />
      <p class="message display-5">Reward not found</p>
    </div>

    <div class="section-border"></div>

    <div class="next">
      <p class="description display-5">
        Sorry you weren't on this Airdrop audience list.
      </p>
      <p class="description">
        Why?:
        <a
          ref="noopener noreferrer"
          target="_blank"
          href="//community.devprotocol.xyz/t/feedback-needed-a-new-formula-for-airdrop-and-some-updates/174"
          >A new formula for airdrop and some updates</a
        >
      </p>

      <div class="button-wrapper">
        <a
          ref="noopener noreferrer"
          href="//app.uniswap.org/#/swap?outputCurrency=0x5caf454ba92e6f2c929df14667ee360ed9fd5b26&use=V2"
          target="_blank"
        >
          <a-button type="default" class="button display-5"
            >Buy Dev</a-button
          ></a
        >
        <a
          ref="noopener noreferrer"
          target="_blank"
          href="//stakes.social/invite/github"
        >
          <a-button type="default" class="button display-5"
            >Earn DEV</a-button
          ></a
        >
      </div>
    </div>

    <CtoA :transparent="true" class="ctoa" />
  </div>
</template>

<style lang="scss" scoded>
@media (max-width: 576px) {
  .layout {
    padding: 0 25px;
  }
}

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
    a {
      text-decoration: underline;
    }
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

      &:hover,
      &:focus {
        border: none;
      }
    }
  }
}

.ctoa {
  margin-top: 6rem;
}

@media (max-width: 576px) {
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
</style>
