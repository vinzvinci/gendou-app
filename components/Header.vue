<template>
  <header>
    <img src="/image/header-logo.png" alt="logo" />
    <div class="right-content">
      <a href="/">QA</a>
    </div>
  </header>
</template>

<style scoped lang="scss">
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
</style>
