<template>
  <ClientOnly>
    <div className="announcements" v-if="announcementsConfig.show">
      <Vue3Marquee v-if="isLoaded" pause-on-hover clone :duration="duration">
        <div className="announcements__text" v-for="announcement in $tm('announcements')">
          {{ $rt(announcement) }}
        </div>
      </Vue3Marquee>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import initialConfig from "~/config/initial.config";
const duration = ref(0);
const isLoaded = ref(false);
const announcementsConfig = initialConfig.announcements;
import { onMounted } from 'vue';
import {Vue3Marquee} from "vue3-marquee";
const { isMobile, isDesktop } = useDevice();

onMounted(() => {
  if (isDesktop) {
    duration.value = 8;
    isLoaded.value = true;
  }
  if (isMobile) {
    duration.value = 6;
    isLoaded.value = true;
  }
});
</script>

<style scoped lang="scss">
@import "assets/style/scss/variables";

.announcements {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 50;
  background: -webkit-linear-gradient(0deg, rgb(254, 70, 3) 19%, rgb(237, 2, 254) 100%);

  .announcements__text {
    padding-left: 100px;
    font-weight: bold;
  }

  @media screen and (max-width: $screen-sm) {
    height: 50px;
  }
}
</style>