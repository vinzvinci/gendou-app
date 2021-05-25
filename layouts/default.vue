<template>
  <Nuxt />
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
  background-color: transparent;
}

p {
  margin: 0;
}

.content {
  position: relative;
  padding-bottom: 246px;

  .information {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 134px;
    z-index: 1;

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
      margin-top: 140px;

      .message {
        margin-bottom: 20px;
        text-align: center;

        .welcome {
          margin-bottom: 20px;
        }
      }

      .sponsored {
        margin-bottom: 0;

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

  .input-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 6px;
    width: 100%;

    .input {
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
      }
    }
  }

  @media (max-width: 576px) {
    .input-wrapper {
      margin-top: 0;
      padding-top: 30px;

      .input {
        padding: 10px 15px;
        line-height: 100%;
      }
    }
  }
}

.light-blue {
  color: #00d0fd;
}
</style>
