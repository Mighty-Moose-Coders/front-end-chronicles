<template>
  <!-- <img src="images/fec.jpg" /> -->
  <div class="iframe-container">
    <h1><span class="black">Front-End </span>Chronicles</h1>
    <iframe
      allow="autoplay *; encrypted-media *; fullscreen *"
      frameborder="0"
      height="450"
      style="
        width: 75%;
        max-width: 1920px;
        overflow: hidden;
        background: transparent;
      "
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src="https://embed.podcasts.apple.com/fr/podcast/front-end-chronicles/id1553915862"
    ></iframe>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 25%;
  text-align: center;
}

h1 {
  font-family: "Bebas Neue", cursive;
  font-size: 70px;
  .black {
    color: black;
  }
}

.iframe-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}
</style>
<script lang="ts" setup>
import "./assets/tailwind.scss";
</script>
