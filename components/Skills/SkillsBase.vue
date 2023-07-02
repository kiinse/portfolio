<template>
  <ClientOnly>
    <b-container>
      <b-row>
        <b-col class="mt-5" sm="13" md="9"></b-col>
      </b-row>
      <div class="details">
        <div class="details__techs">
          <h2 class="details__techs__title">
            {{$t('content_techs')}}
          </h2>
          <div class="details__techs__container ">
            <b-row class="justify-content-center">
              <SkillsBaseTooltip v-for="item in tools" :key="item.tool"
                                 :bg="item.bg"
                                 :tool="item.tool"
              />
            </b-row>
          </div>
        </div>
      </div>
    </b-container>
  </ClientOnly>
</template>

<script>
import {toolsConfig} from "~/config/tools.config";

export default {
  name: "SkillsBase",
  data: function () {
    return {
      tools: toolsConfig
    }
  }
}
</script>

<style scoped lang="scss">
@use "@/assets/style/scss/mixins.scss";
@import "@/assets/style/scss/variables.scss";
.content {
  margin: 5%;
&__container {
   background: $color-secondary-2;
   border-radius: $border-radius-5;
   padding: 2rem;
&__image {
img {
  width: 100%;
  height: auto;
}
}
&__details {
   display: flex;
   align-items: center;
h2 {
  color: $color-primary-2;
}
@media screen and (max-width: $screen-xs) {
  text-align: center;
}
}
}
&__recent-projects {
   margin-top: 7%;
h2 {
  color: $color-primary-3;
}
&__header {
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
}
&__strengths {
   margin-top: 7%;
   text-align: center;
&__header {
   color: $color-primary-3;
 }
.strengths {
  margin: 5% 2%;
&__item {
&__image {
img {
  width: 100%;
  height: auto;
  background: $color-secondary-5;
  border-radius: $border-radius-5;
}
}
&__content {
   margin-top: 10%;
h3 {
  color: $color-primary-7;
}
}
}
}
}
}
.details {
&__techs {
&__title {
   color: $color-primary-3;
@media screen and (max-width: $screen-sm) {
  text-align: center;
}
}
&__container {
   max-height: 20rem;
   max-height: 20rem;
   overflow-y: scroll;
   overflow-x: hidden;
   padding: 0 1rem;
   @include mixins.scrollbar($color-primary-2);
 }
}
}
</style>
