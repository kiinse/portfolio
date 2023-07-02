<template>
  <ClientOnly>
    <b-container>
      <div class="content__recent-projects">
        <div class="content__recent-projects__header">
          <h2>{{$t('content_projects')}}</h2>
          <NuxtLink to="/projects">
            <b-button variant="warning" size="lg">
              {{$t('content_more')}}
            </b-button>
          </NuxtLink>
        </div>
        <b-row class="align-items-center justify-content-center">
          <b-col class="mt-5 align-items-center justify-content-center" sm="12" md="6" v-for ="item in projects.slice(-2)" :key="item.title">
            <ProjectCard
                v-bind:title="item.title"
                :image-link="item.imageLink"
                :tech="item.tech"
                :readme-link="item.readmePath"
                :live-link="item.liveLink"
            />
          </b-col>
        </b-row>
      </div>
    </b-container>
  </ClientOnly>
</template>

<script>
import {projectsListConfig} from "~/config/projectsList.config";
import ProjectCard from "~/components/Projects/ProjectCard.vue";

export default {
  name: "ProjectsBase",
  components: {ProjectCard},
  data: function () {
    return {
      projects: projectsListConfig
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
