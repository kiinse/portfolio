<template>
  <ClientOnly>
    <HeroBase/>
  </ClientOnly>
</template>

<script>
import HeroBase from "~/components/Base/HeroBase.vue";

export default {
  name: "index",
  components: {HeroBase}
}
</script>

<style scoped lang="scss">
@use "assets/style/scss/mixins";
@import "assets/style/scss/main";
</style>
