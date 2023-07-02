<template>
  <ClientOnly>
    <nav class="footer">
      <div class="justify-content-center align-content-center">
        <p class="footer__text">
          Made by
          <a href="https://github.com/VannaKarenina" style="color: #ffcc00">
            VannaKarenina
          </a>
          with ♥
        </p>
      </div>
    </nav>
  </ClientOnly>
</template>

<script>
export default {
  name: "FooterBase"
}
</script>

<style scoped lang="scss">
@import "assets/style/scss/variables";
.footer {
  align-self: center;
  align-items: center;

  margin-bottom: 60px;

  @media screen and (max-width: $screen-sm) {
    margin-bottom: 70px;
  }

  &__text {
    align-items: center;
    text-align: center;
    font-size: medium;
  }
}

@media screen and (max-width: $screen-sm) {
  .footer__text {
    font-size: small;
  }
}
</style>
