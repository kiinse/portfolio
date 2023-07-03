<template>
  <div>
    <NavigationBase/>
    <slot/>
    <AnnouncementBase/>
  </div>
</template>

<script>
import NavigationBase from "~/components/Base/NavigationBase.vue";
import AnnouncementBase from "~/components/Base/AnnouncementBase.vue";

export default {
  name: "default",
  components: {AnnouncementBase, NavigationBase}
}
</script>

<style scoped>

</style>
