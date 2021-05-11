<template>
  <a-page-header class="header">
    <img src="/image/header-logo.png" alt="logo" />
    <div class="right-content">
      <a href="/" class="display-4">QA</a>
    </div>
  </a-page-header>
</template>

<style lang="scss">
.header {
  padding-left: 0;
  padding-right: 0;
  background-color: transparent;

  .ant-page-header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;

    img {
      width: 116px;
    }

    .right-content {
      font-weight: 500;
    }
  }
}

@media (max-width: 576px) {
  .header {
    .ant-page-header-content {
      img {
        width: 80px;
      }
    }
  }
}
</style>
