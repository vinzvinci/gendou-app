<template>
  <footer class="footer">
    <a href="https://devprotocol.xyz">
      <span>Powered by</span>
      <img src="/image/logo.svg" alt="logo" />
    </a>
  </footer>
</template>

<style lang="scss">
.footer {
  display: grid;
  justify-content: space-between;
  padding: 1rem 8rem;
  a {
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
    img {
      width: 160px;
    }
  }
}
</style>
