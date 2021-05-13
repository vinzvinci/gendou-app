<template>
  <a-layout class="layout">
    <Header />
    <a-layout-content class="content">
      <section class="your-prize">
        <div class="result">
          <p class="message display-5">You can claim now</p>
          <p class="prize">100 DEV</p>
          <p class="usd display-6">$100 in USD</p>
        </div>
        <div class="patron-wrapper">
          <p class="title display-3">Become an OSS Patron!</p>
          <p class="description display-6">
            When you support an OSS project by staking DEV tokens,<br />
            you earn XX% more DEV per year.
          </p>
        </div>
      </section>

      <section class="stakes-social">
        <div class="card-wrapper">
          <a-row
            :gutter="[
              { xs: 0, sm: 0, md: 24, lg: 24 },
              { xs: 24, sm: 24, md: 0, lg: 0 },
            ]"
          >
            <a-col :sm="24" :md="8">
              <a-card class="card">
                <div class="card-header">
                  <p class="title display-5">Sigma</p>
                  <img src="/image/icon01.png" alt="Sigma" class="oss-logo" />
                </div>
                <p class="description display-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua...
                </p>
                <p class="owner display-5">Happer</p>
                <p class="roll display-6">Creator</p>
                <div class="status-wrapper">
                  <div class="funding">
                    <p class="description display-6">Project's funding</p>
                    <p class="number display-5">90,027 DEV</p>
                  </div>
                  <div class="staked">
                    <p class="description display-6">Total staked</p>
                    <p class="number display-5">24 DEV</p>
                  </div>
                </div>
                <div class="button-wrapper">
                  <a-button type="default" class="button display-5"
                    >Stake
                  </a-button>
                </div>
              </a-card>
            </a-col>
            <a-col :sm="24" :md="8">
              <a-card class="card">
                <div class="card-header">
                  <p class="title display-5">Sigma</p>
                  <img src="/image/icon01.png" alt="Sigma" class="oss-logo" />
                </div>
                <p class="description display-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua...
                </p>
                <p class="owner display-5">Happer</p>
                <p class="roll display-6">Creator</p>
                <div class="status-wrapper">
                  <div class="funding">
                    <p class="description display-6">Project's funding</p>
                    <p class="number display-5">90,027 DEV</p>
                  </div>
                  <div class="staked">
                    <p class="description display-6">Total staked</p>
                    <p class="number display-5">24 DEV</p>
                  </div>
                </div>
                <div class="button-wrapper">
                  <a-button type="default" class="button display-5"
                    >Stake
                  </a-button>
                </div>
              </a-card>
            </a-col>
            <a-col :sm="24" :md="8">
              <a-card class="card">
                <div class="card-header">
                  <p class="title display-5">Sigma</p>
                  <img src="/image/icon01.png" alt="Sigma" class="oss-logo" />
                </div>
                <p class="description display-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua...
                </p>
                <p class="owner display-5">Happer</p>
                <p class="roll display-6">Creator</p>
                <div class="status-wrapper">
                  <div class="funding">
                    <p class="description display-6">Project's funding</p>
                    <p class="number display-5">90,027 DEV</p>
                  </div>
                  <div class="staked">
                    <p class="description display-6">Total staked</p>
                    <p class="number display-5">24 DEV</p>
                  </div>
                </div>
                <div class="button-wrapper">
                  <a-button type="default" class="button display-5"
                    >Stake
                  </a-button>
                </div>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <p class="sub-title display-5">Explore the 1,600 OSS projects on</p>
        <img src="/image/pic04.png" alt="stakes social" class="logo" />
        <div class="explore-button-wrapper">
          <a-button type="default" class="explore-button display-5"
            >Explore</a-button
          >
        </div>
      </section>

      <div class="section-border"></div>

      <section class="join-us">
        <p class="section-title display-6">Join us</p>
        <div class="join-us-wrapper">
          <p class="display-4">Apply your OSS Project!</p>
          <div class="description-wrapper">
            <p class="join-us-description display-6">
              Offer your patrons an additional incentive to support your OSS<br />
              project by allowing them to collect an interest rate on the DEV
              they stake.
            </p>
            <a href="/" class="more display-6">Learn more</a>
          </div>
        </div>
        <div class="join-us-button-wrapper foo">
          <a-button type="default" class="join-us-button display-5"
            >Apply</a-button
          >
        </div>
      </section>

      <div class="section-border"></div>

      <section class="learn">
        <p class="section-title">Learn</p>
        <div class="card-wrapper">
          <a-row
            :gutter="[
              { xs: 0, sm: 0, md: 24, lg: 24 },
              { xs: 24, sm: 24, md: 0, lg: 0 },
            ]"
          >
            <a-col :sm="24" :md="8">
              <div class="card">
                <div>
                  <div class="card-header">
                    <p class="title display-4">Dev Protocol</p>
                  </div>
                  <p class="learn-description display-6">
                    Offer your patrons an additional incentive to support your
                    OSS project by allowing them to collect an interest rate on
                    the DEV they stake.
                  </p>
                </div>
                <a href="/" class="link display-6">devprotocol.xyz</a>
              </div>
            </a-col>
            <a-col :sm="24" :md="8">
              <div class="card">
                <div>
                  <div class="card-header">
                    <p class="title display-4">Protocol</p>
                  </div>
                  <p class="learn-description display-6">
                    Dev Protocol is designed as a protocol, unlike a web service
                    or platform. To learn more about it, read this blog post.
                  </p>
                </div>
                <a href="/" class="link display-6">Learn more</a>
              </div>
            </a-col>
            <a-col :sm="24" :md="8">
              <div class="card">
                <div>
                  <div class="card-header">
                    <p class="title display-4">Ethereum</p>
                  </div>
                  <p class="learn-description display-6">
                    Visit Ethereum’s official documentation to learn more about
                    Ethereum.
                  </p>
                </div>
                <a href="/" class="link display-6">Ethereum Whitepaper</a>
              </div>
            </a-col>
          </a-row>
        </div>
      </section>

      <div class="section-border"></div>
    </a-layout-content>
    <a-layout-footer class="footer">
      <div class="footer-wrapper">
        <img src="/image/logo01.png" alt="Dev Protocol" class="footer-logo" />
        <div class="sponsored">
          <img src="/image/pic05.png" alt="Sindre" class="photo" />
          <div class="profile-wrapper">
            <p class="by display-6">Sponsored by</p>
            <p class="name display-4">Sindre Sorhus</p>
            <p class="profile-description display-6">
              The program is supported by <br />
              a donation by Sindre Sorhus
            </p>
          </div>
          <img src="/image/pic06.png" alt="heart" class="heart" />
        </div>
      </div>
    </a-layout-footer>
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
  background-position: center top;
  background-size: auto 799px;
  background-repeat: repeat-x;
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
  width: 100%;

  .your-prize {
    height: 669px;

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
      }
    }
  }

  .stakes-social {
    position: relative;
    top: -224px;

    .card-wrapper {
      margin-bottom: 64px;

      .card {
        background: #fff;
        box-shadow: 0 0 8px rgba(10, 10, 10, 0.2);
        border-radius: 16px;

        .card-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 18px;

          .title {
            font-family: 'Whyte Inktrap', sans-serif;
          }

          .oss-logo {
            width: 64px;
            height: 64px;
          }
        }

        .description {
          margin-bottom: 42px;
        }

        .owner {
          margin-bottom: 5px;
          line-height: 100%;
          color: #ff3815;
        }

        .roll {
          margin-bottom: 20px;
          line-height: 20px;
          color: #bdbdbd;
        }

        .status-wrapper {
          margin-bottom: 50px;

          .funding,
          .staked {
            margin-bottom: 10px;

            &:last-child {
              margin-bottom: 0;
            }

            .number {
              line-height: 32px;
              color: #333;
              text-align: right;
            }

            .description {
              margin-bottom: 5px;
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
      text-align: center;
    }

    .logo {
      display: block;
      margin: 0 auto 56px;
      width: 304px;
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
      line-height: 28px;
    }
  }

  .join-us {
    padding: 24px 0 96px;

    .join-us-wrapper {
      display: flex;
      justify-content: space-between;

      .description-wrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;

        .join-us-description {
          line-height: 32px;
        }

        .more {
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

@media (max-width: 576px) {
  .content {
    .your-prize {
      margin-bottom: 50px;
      height: auto;

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
          margin-bottom: 20px;
        }
      }

      .patron-wrapper {
        flex-direction: column;
        text-align: center;

        .title {
          margin-bottom: 5px;
        }
      }
    }

    .stakes-social {
      top: unset;
      margin-bottom: 50px;

      .card-wrapper {
        margin-bottom: 50px;

        .card {
          .card-header {
            .oss-logo {
              width: 64px;
              height: 64px;
            }
          }

          .description {
            margin-bottom: 15px;
          }

          .owner {
            line-height: 100%;
          }

          .roll {
            margin-bottom: 15px;
            font-size: 12px;
            line-height: 20px;
            color: #bdbdbd;
          }

          .status-wrapper {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;

            .funding,
            .staked {
              .number {
                line-height: 100%;
                color: #333;
              }

              .description {
                line-height: 100%;
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
        margin-bottom: 15px;
      }

      .logo {
        margin: 0 auto 30px;
        width: 250px;
      }

      .explore-button-wrapper {
        margin-bottom: 0;

        .explore-button {
          padding: 15px 20px;
          line-height: 100%;
        }
      }
    }

    .learn,
    .join-us {
      .section-title {
        margin-bottom: 15px;
        line-height: 100%;
      }
    }

    .join-us {
      margin-bottom: 50px;
      padding: 20px 0 0;

      .join-us-wrapper {
        flex-direction: column;
        text-align: center;

        .description-wrapper {
          margin-bottom: 20px;

          .join-us-description {
            margin-top: 10px;
            line-height: 20px;
          }

          .more {
            margin-top: 15px;
            text-align: center;
          }
        }
      }

      .join-us-button-wrapper {
        .join-us-button {
          padding: 15px 20px;
          line-height: 100%;
        }
      }
    }

    .learn {
      padding: 20px 0 30px;

      .card-wrapper {
        display: unset;
        .card {
          margin-bottom: 20px;
          margin-right: 0;
          padding: 0 10px;
          width: 100%;

          .card-header {
            margin-bottom: 20px;
          }

          .learn-description {
            margin-bottom: 15px;
          }

          .link {
            text-decoration: #0a0a0a underline !important;
          }
        }
      }
    }
  }
}

.footer {
  padding: 96px 0 142px;
  background-color: transparent;

  .footer-wrapper {
    display: flex;
    justify-content: space-between;

    .footer-logo {
      width: 168px;
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

@media (max-width: 576px) {
  .footer {
    padding: 30px 0 50px;

    .footer-wrapper {
      flex-direction: column;
      align-items: center;

      .footer-logo {
        margin-bottom: 50px;
        width: 130px;
      }

      .sponsored {
        flex-direction: column;
        align-items: center;

        .photo {
          margin-bottom: 10px;
          margin-right: 0;
          width: 50px;
          height: 50px;
        }

        .profile-wrapper {
          text-align: center;

          .by {
            margin-bottom: 5px;
            line-height: 100%;
          }

          .name {
            margin-bottom: 5px;
            line-height: 100%;
          }

          .profile-description {
            line-height: 130%;
          }
        }

        .heart {
          top: -90px;
          right: -90px;
        }
      }
    }
  }
}
</style>
