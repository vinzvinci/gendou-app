<template>
  <footer class="container footer">
    <div class="heart">
      <img src="/image/heart.png" alt="heart" />
      <img src="/image/heart.png" alt="heart" />
      <img src="/image/heart.png" alt="heart" />
    </div>
    <a href="https://devprotocol.xyz">
      <span>Powered by</span>
      <img src="/image/logo.svg" alt="logo" />
    </a>
  </footer>
</template>

<style lang="scss">
.footer {
  display: grid;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: stretch;
  a {
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
    color: black;
    img[alt='logo'] {
      width: 160px;
    }
  }
}
.heart {
  text-align: center;
  margin: 6rem 0;

  img {
    animation: cycle 1s linear infinite;
  }
}
</style>
