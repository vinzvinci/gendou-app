<template>
  <div class="then expanded-container" :transparent="transparent">
    <section class="container">
      <h2 id="earn-more-dev" class="earn">Earn more DEV</h2>

      <div class="stakes-social">
        <img
          width="100%"
          src="//devprotocol.xyz/assets/img/macbook_stakes.png"
        />
        <img width="240px" src="//devprotocol.xyz/assets/img/Stakes.svg" />
        <a
          ref="noopener noreferrer"
          href="//stakes.social/invite/github"
          target="_blank"
        >
          <a-button type="default" class="button display-5">
            Join Stakes.social</a-button
          >
        </a>
        <p>
          You can start sustainable funding by applying for your own OSS
          repositories.
        </p>
      </div>

      <!-- <div class="describe">
      <div class="describe-heading">Join us</div>
      <div class="describe-contents">
        <div class="describe-contents-info">
          <div class="describe-contents-title">Apply your OSS Project!</div>
          <div class="describe-contents-description">
            <p>
              Offer your patrons an additional incentive to support your OSS
              project by allowing them to collect an interest rate on the DEV
              they stake.
            </p>
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
    </div> -->
    </section>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    transparent: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.then:not([transparent]) {
  padding: 3rem 0;
  background: linear-gradient(
    124deg,
    #ffccc4,
    #ffcdcd,
    #fff2c9,
    #f5f7ab,
    #c5ffcf,
    #d3fdff,
    #dcdaff,
    #fde3ff,
    #fac8ff
  );
  background-size: 1800% 1800%;
  animation: rainbow 18s ease infinite;
  @keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
}

.earn {
  margin: 0;
  text-align: center;
  font-family: 'Whyte Inktrap', sans-serif;
  font-weight: bold;
  font-size: 4rem;
  @media (max-width: 576px) {
    font-size: 2rem;
  }
}

.stakes-social {
  display: grid;
  gap: 2rem;
  justify-items: center;
  p {
    margin: 0;
  }
}

// .describe {
//   margin: 0 0 80px 0;
//   &-heading {
//     margin-bottom: 6rem;
//     @media (max-width: 576px) {
//       margin-bottom: 4rem;
//     }
//   }
//   &-contents {
//     &-info {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//       justify-content: space-between;
//       margin-bottom: 2rem;
//       gap: 6rem;
//       @media (max-width: 576px) {
//         grid-template-columns: none;
//         gap: 2rem;
//       }
//     }
//     &-title {
//       font-family: 'IBM Plex Mono', monospace;
//       font-size: 1.4rem;
//     }
//     &-description {
//       &-more {
//         text-align: right;
//       }
//     }
//   }
// }

.button {
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
    color: #fff;
    background-color: #0a0a0a;
  }
}
</style>
