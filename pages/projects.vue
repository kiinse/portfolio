<template>
  <ClientOnly>
    <b-container>
      <div
          style="min-height: 100vh; margin-bottom: 70px"
          class="all-projects">
        <div class="projects__header">
          <h1>{{ $t('page_projects') }}</h1>
        </div>
        <div class="projects__container">
          <b-row>
            <b-col class="mt-5" sm="6" md="6" v-for="item in items" :key="item.title">
              <ProjectCard
                  v-bind:title="item.title"
                  :image-link="item.imageLink"
                  :tech="item.tech"
                  :git-link="item.gitLink"
                  :live-link="item.liveLink"
              />
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
  </ClientOnly>
</template>

<script>
import ProjectCard from "~/components/Projects/ProjectCard.vue";
import {projectsListConfig} from "~/config/projectsList.config";

export default {
  name: "projects",
  components: {ProjectCard},
  data: function () {
    return {
      items: projectsListConfig
    }
  }
}
</script>

<style scoped>

</style>
