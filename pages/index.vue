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
        far. Dev Protocol will reward up to $1,500,000 to the most active GitHub
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
          >AMP</a
        >
      </div>
      <ul class="supporters">
        <li><img src="/image/supporters/sios.png" /></li>
        <li><img src="/image/supporters/hashhub.png" /></li>
        <li><img src="/image/supporters/ms4s.png" /></li>
        <li><img src="/image/supporters/miraise.png" /></li>
        <li><img src="/image/supporters/monex-ventures.png" /></li>
      </ul>
      <ul id="qa" class="qa">
        <li>
          <h3>What is DEV AIRDROP?</h3>
          <p>
            "Dev Protocol", a made-in-Japan DeFi protocol, is launching a
            "GitHub Airdrop" to commemorate its first anniversary of releasing
            "Stakes.social", a sponsor platform, and as appreciation for your
            contribution so far.
          </p>
          <p>
            It's hard for developers to rely on goodwill from patrons if they
            wish to continuously develop OSS as well as grow the community
            itself. We'd like you to use the airdropped DEV tokens to help stake
            other projects, while focusing on OSS development yourself. By using
            our Stakes.social platform, you can help other projects in need and
            have a stream of additional income by doing so.
          </p>
          <dl>
            <dt>Campaign Period</dt>
            <dd>28th May - 24th June (About 1 month)</dd>
            <dt>Details</dt>
            <dd>
              In accordance with your number of commits at GitHub in the last
              one year period, you'll get at most 100 DEV token. We're giving
              out the total amount of 161,000 DEV to the first 13,010
              applicants. As soon as the first 13,010 people have received DEV,
              we'll close the campaign. If you're willing to join, please take
              advantage of the program while you can.
            </dd>
            <dt>Rewards table</dt>
            <dd>
              <table>
                <thead>
                  <tr>
                    <th>Commits &gt;</th>
                    <th># of people</th>
                    <th>Reward</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>5,000</td>
                    <td>3</td>
                    <td>1,000</td>
                  </tr>
                  <tr>
                    <td>2,000</td>
                    <td>200</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>500</td>
                    <td>2,000</td>
                    <td>100</td>
                  </tr>
                </tbody>
              </table>
            </dd>
          </dl>
        </li>
        <li>
          <h3>What are Dev tokens?</h3>
          <p>
            DEV tokens are a proprietary currency that can be used in the Dev
            Protocol. You can support OSS projects by using DEV tokens and help
            developers with sustainable funding of their projects.
          </p>
          <p><LinkToFAQ /></p>
        </li>
        <li>
          <h3>What is Dev Protocol?</h3>
          <p>
            "Dev Protocol" is a technology that realizes sustainability for
            creators' activities. It is mined by creators, and also a reward for
            users supporting creators through a process called staking. Because
            Dev Protocol is completely decentralized and is a middleware
            protocol for on-chain governance, anyone can join the ecosystem by
            developing various applications (Dapps).
          </p>
          <p>
            Under the mission of "creating a society where all innovators are
            valued and can achieve sustainably", Dev Protocol started MVP in
            2018 and began a service for OSS developers to monetize. After the
            release of "Stakes.social", our first Dapp, in June 2020, our
            sustainable incentive scheme that utilizes a blockchain, attracted
            attention from overseas, and its ecosystem continues to grow
            dramatically. In the last one year, the total number of staking
            reached around 6 million USD, and the cumulative total amount of
            reward went up to approximately 2 million USD. (as of April 2021)
          </p>
          <p>*Dev Protocol gets support from Microsoft for Startups.</p>
          <p><LinkToFAQ /></p>
        </li>
        <li>
          <h3>What is Stakes.social?</h3>
          <p>
            Stakes.social is a new sponsor platform where both developers and
            sponsors are rewarded with tokens if they support their favorite
            projects by staking dev tokens. Over 1,600 OSS projects issue tokens
            (utility token with ERC-20 form), and many developers, including
            both individuals and firms, succeed in achieving sustainability
            through fundraising. There is an increasing number of unique
            creators joining Stakes.social, so you can support different
            creators such as OSS developers, VR artists, NFT markets, green
            projects, and Vtubers.
          </p>
        </li>
        <li>
          <h3>What's Staking?</h3>
          <p>
            It is a framework where people contribute to the network by locking
            (temporarily making inaccessible) their crypto assets. In terms of
            Dev, when people stake "DEV token" (ERC20) for to support creator's
            works, they are rewarded with dev tokens for doing so.
          </p>
        </li>
      </ul>
      <div class="heart">
        <img src="/image/heart.png" alt="heart" />
        <img src="/image/heart.png" alt="heart" />
        <img src="/image/heart.png" alt="heart" />
      </div>
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
.active {
  transition: opacity 0.4s ease-out;
  opacity: 0;
}

.main {
  background: transparent;
  display: grid;
  min-height: calc(100vh - 5rem);
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

table {
  width: 100%;
  border: 1px solid #0000001f;
  padding: 1rem;
  border-collapse: separate;
  @media (max-width: 576px) {
    padding: 0.5rem;
  }
  th {
    font-family: sans-serif;
    font-weight: normal;
  }
  td {
    font-family: 'IBM Plan mono', monospace;
  }
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

.qa {
  display: grid;
  gap: 6rem;
  h3,
  h4 {
    font-family: 'IBM Plex Mono', monospace;
  }
  p,
  dl {
    font-family: sans-serif;
  }
  & > li {
    display: grid;
    gap: 1rem;
  }
  dl {
    display: grid;
    gap: 0.5rem;
    dd {
      margin-left: 1rem;
    }
  }
}

.heart {
  text-align: center;

  img {
    animation: cycle 1s linear infinite;
  }
  @keyframes cycle {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
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
    margin-right: 25px;

    img {
      width: 72px;
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
