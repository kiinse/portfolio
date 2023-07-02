<template>
  <div class="tech-card">
    <img
        :style="{background: $props.bg}"
        :src="icons[$props.tool]"
        :alt="$props.tool"
    />
    <h6 class="mt-2">{{ $props.tool }}</h6>
  </div>
</template>

<script>
import {techIcons} from "assets/additions/techIcons.addition";

export default {
  name: "SkillsBaseTooltip",
  props: ['tool', 'bg'],
  data: function () {
    return {
      icons: techIcons
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/scss/variables.scss";
.tech-card {
  max-width: 6rem;
  max-height: 7rem;
  min-width: 7rem;
  min-height: 7rem;
  padding: 1.5rem;
  margin: 2%;
  text-align: center;
  background: lighten($color-secondary-6, 7%);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
  border-radius: $border-radius-1;
  img {
    width: 80%;
    height: auto;
  }
  h6 {
    font-size: 0.7rem;
  }
}
</style>
