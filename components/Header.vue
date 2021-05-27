<template>
  <a-page-header class="header">
    <a href="/">
      <img src="/image/header-logo.png" alt="logo" />
    </a>
    <div class="right-content">
      <a href="/" class="display-4">QA</a>
    </div>
  </a-page-header>
</template>

<style lang="scss">
.header {
  padding: 1rem 8rem;
  @media (max-width: 576px) {
    padding: 1rem 2rem;
  }
}

.ant-page-header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  img {
    width: 116px;
    @media (max-width: 576px) {
      width: 80px;
    }
  }
  .right-content {
    font-weight: 500;
  }
}
</style>
