<template>
  <ClientOnly>
    <b-container>
      <div
          style="min-height: 100vh; margin-bottom: 70px"
          class="all-projects">
        <div class="projects__header">
          <h2 class="header">{{ $t('page_projects') }}</h2>
        </div>
        <div class="projects__container">
          <b-row>
            <b-col class="mt-5" sm="4" md="4" v-for="item in items" :key="item.title">
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

<script setup lang="ts">
import ProjectCard from "~/components/Projects/ProjectCard.vue";

const { data: items } = await useFetch('/api/getProjectsData')

</script>

<style scoped lang="scss">

@import '@/assets/style/scss/variables.scss';

.projects__header {
  text-align: center;
}

.header {
  color: $color-primary-9;
  font-weight: bold;
}


</style>
