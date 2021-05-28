<template>
  <footer class="container footer">
    <a href="https://devprotocol.xyz">
      <span>Powered by</span>
      <img src="/image/logo.svg" alt="logo" />
    </a>
    <div class="heart">
      <img src="/image/heart.png" alt="heart" />
      <img src="/image/heart.png" alt="heart" />
      <img src="/image/heart.png" alt="heart" />
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  display: grid;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: space-between;
  grid-auto-flow: column;
  align-items: center;
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

  img {
    animation: cycle 1s linear infinite;
  }
  @keyframes cycle {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
}
</style>
