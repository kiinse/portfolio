<template>
  <div>
    <NavigationBase/>
    <slot/>
    <FooterBase/>
    <AnnouncementBase/>
  </div>
</template>

<script>
import NavigationBase from "~/components/Base/NavigationBase.vue";
import FooterBase from "~/components/Base/FooterBase.vue";
import AnnouncementBase from "~/components/Base/AnnouncementBase.vue";

export default {
  name: "default",
  components: {AnnouncementBase, FooterBase, NavigationBase}
}
</script>

<style scoped>

</style>
