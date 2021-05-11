<template>
  <a-layout class="layout">
    <Header />
    <a-layout-content class="content">
      <div class="information">
        <div class="message">
          <p class="welcome display-3">
            Welcome to<br />
            the sustainable<br />
            world for OSS
          </p>
          <p class="airdrop display-5">
            DEV Airdrop for
            <span class="light-blue"
              >most <br />
              active</span
            >
            GitHub users
          </p>
        </div>
        <div class="sponsored">
          <div class="pic"><img src="/image/pic01.png" alt="sindre" /></div>
          <div class="profile">
            <div class="row-01">
              <p class="display-6">Sponsored by</p>
              <img src="/image/heart.png" alt="heart" />
            </div>
            <div class="row-02 display-4">Sindre Sorhus</div>
            <p class="row-03 display-6">
              The program is supported by<br />
              a donation by Sindre Sorhus
            </p>
          </div>
        </div>
      </div>
      <div class="button-wrapper">
        <a-button type="default" class="button"
          >Connect to Github with Torus</a-button
        >
      </div>
    </a-layout-content>
  </a-layout>
</template>
<style lang="scss">
.layout {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 156px;
  width: 100%;
  max-width: 1440px;
  min-width: 375px;
  background: url('/image/pic02.png') center center;
}

@media (max-width: 576px) {
  .layout {
    padding: 0 25px;
  }
}

.content {
  padding-bottom: 246px;

  .information {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 134px;

    .message {
      .welcome {
        margin-bottom: 60px;
        font-weight: bold;
        font-family: 'Whyte Inktrap', sans-serif;
      }
    }

    .sponsored {
      display: flex;
      .pic {
        margin-right: 25px;

        img {
          width: 72px;
          height: 72px;
        }
      }
      .profile {
        .row-01 {
          display: flex;
          justify-content: space-between;

          img {
            width: 20px;
            height: 24px;
          }
        }
        .row-02 {
          margin-bottom: 8px;
          font-family: 'Whyte Inktrap', sans-serif;
        }
        .row-03 {
          color: #999;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .information {
      flex-direction: column;
      margin-top: 20px;

      .message {
        margin-bottom: 60px;
        text-align: center;

        .welcome {
          margin-bottom: 20px;
        }
      }

      .sponsored {
        margin-bottom: 60px;

        .pic {
          margin-right: 15px;

          img {
            width: 50px;
            height: 50px;
          }
        }
        .profile {
          .row-01 {
            img {
              width: 20px;
              height: 24px;
            }
          }
          .row-02 {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 6px;
    width: 100%;

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
      &:hover {
        border: none;
      }
    }
  }
}

.light-blue {
  color: #00d0fd;
}
</style>
