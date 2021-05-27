<template>
  <footer class="container footer">
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
  padding-top: 1rem;
  padding-bottom: 1rem;
  a {
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
    color: black;
    img {
      width: 160px;
    }
  }
}
</style>
