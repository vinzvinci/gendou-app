<template>
  <section class="then">
    <div class="stakes-social">
      <img
        width="100%"
        src="https://devprotocol.xyz/assets/img/macbook_stakes.png"
      />
      <p class="display-5">Explore the 1,600+ OSS projects on</p>
      <img width="240px" src="https://devprotocol.xyz/assets/img/Stakes.svg" />
      <div class="ss-explore-button">
        <a ref="noopener noreferrer" href="//stakes.social/" target="_blank">
          <a-button type="default" class="button display-5"> Explore </a-button>
        </a>
      </div>
    </div>

    <a-divider />

    <div class="joinus">
      <div class="joinus-heading">Join us</div>
      <div class="apply-oss">
        <div class="apply-oss-info">
          <div class="apply-oss-title display-5">Apply your OSS Project!</div>
          <div class="apply-oss-description">
            <p>
              Offer your patrons an additional incentive to support your OSS
              project by allowing them to collect an interest rate on the DEV
              they stake.
            </p>
            <div class="apply-oss-description-more">Learn more</div>
          </div>
        </div>
        <div>
          <a
            ref="noopener noreferrer"
            href="https://stakes.social/create"
            target="_blank"
          >
            <a-button type="default" class="button display-5">Apply</a-button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.button {
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
    color: #fff;
    background-color: #0a0a0a;
  }
}

.stakes-social {
  text-align: center;
  .ss-explore-button {
    margin-top: 4rem;
  }
}

.joinus {
  margin: 0 0 80px 0;
  &-heading {
    margin-bottom: 6rem;
    @media (max-width: 576px) {
      margin-bottom: 4rem;
    }
  }
  .apply-oss {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-info {
      display: grid;
      grid-template-columns: auto 1fr;
      justify-content: space-between;
      margin-bottom: 2rem;
      gap: 6rem;
      @media (max-width: 576px) {
        grid-template-columns: none;
        gap: 2rem;
      }
    }
    &-title {
      font-family: 'IBM Plex Mono', monospace;
    }
    &-description {
      &-more {
        text-align: right;
      }
    }
  }
}

.divider {
  margin: 4.6rem 0;
  @media (max-width: 576px) {
    margin: 4rem 0;
  }
}
</style>
