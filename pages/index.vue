<template>
  <div class="container">
    <header>
      <img src="/image/header-logo.png" alt="logo" />
      <div class="right-content">
        <a href="/">QA</a>
      </div>
    </header>
    <div class="content">
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
        <div class="sponsored">
          <div class="pic"><img src="/image/pic01.png" alt="sindre" /></div>
          <div class="profile">
            <div class="row-01">
              <p>Sponsored by</p>
              <img src="/image/heart.png" alt="heart" />
            </div>
            <div class="row-02">Sindre Sorhus</div>
            <p class="row-03">
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
    </div>
  </div>
</template>
<style lang="scss">
.container {
  background: url('/image/pic02.png') center center;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 29px 0;
  width: 100%;

  img {
    width: 116px;
    height: 72px;
  }

  .right-content {
    font-weight: 500;
    font-size: 24px;
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
        font-size: 32px;
        font-weight: bold;
        font-family: 'Whyte Inktrap', sans-serif;
      }
      .airdrop {
        font-size: 20px;
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

          p {
            font-size: 16px;
          }

          img {
            width: 20px;
            height: 24px;
          }
        }
        .row-02 {
          margin-bottom: 8px;
          font-size: 24px;
          font-family: 'Whyte Inktrap', sans-serif;
        }
        .row-03 {
          font-size: 14px;
          color: #999;
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
