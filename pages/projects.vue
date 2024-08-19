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

<script>
import ProjectCard from "~/components/Projects/ProjectCard.vue";
import * as fs from "node:fs";

export default {
  name: "projects",
  components: {ProjectCard},
  data: function () {
    function getProjects() {
      try {
        let jsons = []
        fs.readdirSync('./content/projects').forEach(file => {
          jsons.push(JSON.parse(fs.readFileSync(`./content/projects/${file}`, 'utf8')))
        })
        return jsons
      } catch (error) {
        console.log('Error: ', error)
        return []
      }
    }
    return {
      items: getProjects()
    }
  }
}
</script>

<style scoped>

</style>
