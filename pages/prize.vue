<template>
  <div class="container">
    <Header />
    <div class="content">
      <section class="your-prize">
        <div class="result">
          <p class="message">You can claim now</p>
          <p class="prize">100 DEV</p>
          <p class="usd">$100 in USD</p>
        </div>
        <div class="patron-wrapper">
          <p class="title">Become an OSS Patron!</p>
          <p class="description">
            When you support an OSS project by staking DEV tokens,<br />
            you earn XX% more DEV per year.
          </p>
        </div>
      </section>

      <section class="stakes-social">
        <div class="card-wrapper">
          <div class="card">
            <div class="card-header">
              <p class="title">Sigma</p>
              <img src="/image/icon01.png" alt="Sigma" class="oss-logo" />
            </div>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <p class="owner">Happer</p>
            <p class="roll">Creator</p>
            <div class="status-wrapper">
              <div class="funding">
                <p class="number">900,276 DEV</p>
                <p class="description">Project's funding</p>
              </div>
              <div class="staked">
                <p class="number">24 DEV</p>
                <p class="description">Total staked</p>
              </div>
            </div>
            <div class="button-wrapper">
              <a-button type="default" class="button">Stake</a-button>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <p class="title">Sigma</p>
              <img src="/image/icon01.png" alt="Sigma" class="oss-logo" />
            </div>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <p class="owner">Happer</p>
            <p class="roll">Creator</p>
            <div class="status-wrapper">
              <div class="funding">
                <p class="number">900,276 DEV</p>
                <p class="description">Project's funding</p>
              </div>
              <div class="staked">
                <p class="number">24 DEV</p>
                <p class="description">Total staked</p>
              </div>
            </div>
            <div class="button-wrapper">
              <a-button type="default" class="button">Stake</a-button>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <p class="title">Sigma</p>
              <img src="/image/icon01.png" alt="Sigma" class="oss-logo" />
            </div>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <p class="owner">Happer</p>
            <p class="roll">Creator</p>
            <div class="status-wrapper">
              <div class="funding">
                <p class="number">900,276 DEV</p>
                <p class="description">Project's funding</p>
              </div>
              <div class="staked">
                <p class="number">24 DEV</p>
                <p class="description">Total staked</p>
              </div>
            </div>
            <div class="button-wrapper">
              <a-button type="default" class="button">Stake</a-button>
            </div>
          </div>
        </div>
        <p class="sub-title">Explore the 1,600 OSS projects on</p>
        <img src="/image/pic04.png" alt="stakes social" class="logo" />
        <div class="explore-button-wrapper">
          <a-button type="default" class="explore-button">Explore</a-button>
        </div>
      </section>

      <div class="section-border"></div>

      <section class="join-us">
        <p class="section-title">Join us</p>
        <div class="join-us-wrapper">
          <p class="join-us-title">Apply your OSS Project!</p>
          <div class="description-wrapper">
            <p class="join-us-description">
              Offer your patrons an additional incentive to support your OSS<br />
              project by allowing them to collect an interest rate on the DEV
              they stake.
            </p>
            <a href="/" class="more">Learn more</a>
          </div>
        </div>
        <div class="join-us-button-wrapper foo">
          <a-button type="default" class="join-us-button">Apply</a-button>
        </div>
      </section>

      <div class="section-border"></div>

      <section class="learn">
        <p class="section-title">Learn</p>
        <div class="card-wrapper">
          <div class="card">
            <div>
              <div class="card-header">
                <p class="title">Dev Protocol</p>
              </div>
              <p class="learn-description">
                Offer your patrons an additional incentive to support your OSS
                project by allowing them to collect an interest rate on the DEV
                they stake.
              </p>
            </div>
            <a href="/" class="link">devprotocol.xyz</a>
          </div>
          <div class="card">
            <div>
              <div class="card-header">
                <p class="title">Protocol</p>
              </div>
              <p class="learn-description">
                Dev Protocol is designed as a protocol, unlike a web service or
                platform. To learn more about it, read this blog post.
              </p>
            </div>
            <a href="/" class="link">Learn more</a>
          </div>
          <div class="card">
            <div>
              <div class="card-header">
                <p class="title">Ethereum</p>
              </div>
              <p class="learn-description">
                Visit Ethereum’s official documentation to learn more about
                Ethereum.
              </p>
            </div>
            <a href="/" class="link">Ethereum Whitepaper</a>
          </div>
        </div>
      </section>

      <div class="section-border"></div>
    </div>
    <footer>
      <div class="footer-wrapper">
        <img src="/image/logo01.png" alt="Dev Protocol" class="footer-logo" />
        <div class="sponsored">
          <img src="/image/pic05.png" alt="Sindre" class="photo" />
          <div class="profile-wrapper">
            <p class="by">Sponsored by</p>
            <p class="name">Sindre Sorhus</p>
            <p class="profile-description">
              The program is supported by <br />
              a donation by Sindre Sorhus
            </p>
          </div>
          <img src="/image/pic06.png" alt="heart" class="heart" />
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.content {
  margin: 0 auto;

  .your-prize {
    height: 669px;

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

    .patron-wrapper {
      display: flex;
      justify-content: space-between;

      .title {
        font-family: 'Whyte Inktrap', sans-serif;
        font-weight: bold;
        font-size: 32px;
      }

      .description {
        font-size: 16px;
      }
    }
  }

  .stakes-social {
    position: relative;
    top: -224px;

    .card-wrapper {
      display: flex;
      margin-bottom: 64px;

      .card {
        margin-right: 24px;
        padding: 32px 24px;
        width: 360px;
        background: #fff;
        box-shadow: 0 0 8px rgba(10, 10, 10, 0.2);
        border-radius: 16px;

        .card-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 18px;

          .title {
            font-family: 'Whyte Inktrap', sans-serif;
            font-size: 20px;
          }

          .oss-logo {
            width: 64px;
            height: 64px;
          }
        }

        .description {
          margin-bottom: 42px;
          font-size: 14px;
        }

        .owner {
          font-size: 20px;
          line-height: 32px;
          color: #ff3815;
        }

        .roll {
          margin-bottom: 20px;
          font-size: 12px;
          line-height: 20px;
          color: #bdbdbd;
        }

        .status-wrapper {
          display: flex;
          justify-content: space-between;

          .funding,
          .staked {
            width: 50%;

            .number {
              font-size: 20px;
              line-height: 32px;
              color: #333;
            }

            .description {
              font-size: 12px;
              line-height: 20px;
              color: #bdbdbd;
            }
          }
        }

        .button-wrapper {
          display: flex;
          justify-content: center;

          .button {
            padding: 8px 24px;
            height: initial;
            color: #fff;
            background-color: #0a0a0a;
            font-size: 20px;
            line-height: 32px;
            border-radius: 0;
            border: none;
            cursor: pointer;
          }
        }
      }
    }

    .sub-title {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: center;
    }

    .logo {
      display: block;
      margin: 0 auto 56px;
      width: 304px;
      height: 40px;
    }

    .explore-button-wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: -104px;

      .explore-button {
        padding: 8px 24px;
        height: initial;
        color: #fff;
        background-color: #0a0a0a;
        font-size: 20px;
        line-height: 32px;
        border-radius: 0;
        border: none;
        cursor: pointer;
      }
    }
  }

  .learn,
  .join-us {
    .section-title {
      margin-bottom: 68px;
      font-family: 'Whyte Inktrap', sans-serif;
      font-size: 16px;
      line-height: 28px;
    }
  }

  .join-us {
    padding: 24px 0 96px;

    .join-us-wrapper {
      display: flex;
      justify-content: space-between;

      .join-us-title {
        font-size: 24px;
      }

      .description-wrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;

        .join-us-description {
          font-size: 16px;
          line-height: 32px;
        }

        .more {
          font-size: 16px;
          text-align: right;
        }
      }
    }

    .join-us-button-wrapper {
      display: flex;
      justify-content: center;

      .join-us-button {
        padding: 8px 24px;
        height: initial;
        color: #fff;
        background-color: #0a0a0a;
        font-size: 20px;
        line-height: 32px;
        border-radius: 0;
        border: none;
        cursor: pointer;
      }
    }
  }

  .learn {
    padding: 24px 0 120px;

    .card-wrapper {
      display: flex;

      .card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 24px;
        padding: 0 24px;
        width: 360px;
        background: #fff;
        text-align: center;

        .card-header {
          margin-bottom: 59px;

          .title {
            font-family: 'Whyte Inktrap', sans-serif;
            font-size: 24px;
            text-align: center;
          }
        }

        .learn-description {
          margin-bottom: 24px;
          font-size: 16px;
          text-align: center;
        }

        .link {
          font-size: 16px;
          text-decoration: #0a0a0a underline;
        }
      }
    }
  }

  .section-border {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #ccc;
  }
}

footer {
  padding: 96px 0 142px;

  .footer-wrapper {
    display: flex;
    justify-content: space-between;

    .footer-logo {
      width: 168px;
      height: 112px;
    }

    .sponsored {
      display: flex;
      justify-content: space-between;

      .photo {
        margin-right: 25px;
        width: 72px;
        height: 72px;
      }

      .profile-wrapper {
        display: flex;
        flex-direction: column;
        .by {
          font-size: 16px;
          line-height: 28px;
        }
        .name {
          font-family: 'Whyte Inktrap', sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 40px;
        }
        .profile-description {
          font-size: 14px;
          line-height: 24px;
          color: #999;
        }
      }

      .heart {
        position: relative;
        right: 20px;
        width: 20px;
        height: 24px;
      }
    }
  }
}
</style>

<style lang="scss">
body {
  background: url('/image/background01.png');
  background-position: center top;
  background-size: auto 799px;
  background-repeat: repeat-x;
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
