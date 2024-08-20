<template>
  <ClientOnly>
    <b-container>
      <div
          style="min-height: 100vh; margin-bottom: 70px"
          class="all-projects">
        <div class="blog__header">
          <h2 class="header">{{ $t('page_blog') }}</h2>
        </div>
        <div class="blog__container">
          <b-row class="mt-5" sm="4" md="4" v-for="item in items" :key="item.title">
            <BlogCard
                v-bind:title="item.title"
                :text="item.text"
                :date="item.date"
            />
          </b-row>
        </div>
      </div>
    </b-container>
  </ClientOnly>
</template>

<script setup lang="ts">
import BlogCard from "~/components/Blog/BlogCard.vue";

const { data: items } = await useFetch('/api/getBlogPosts')

</script>

<style scoped lang="scss">

@import '@/assets/style/scss/variables.scss';

.blog__header {
  text-align: center;
}

.header {
  color: $color-primary-9;
  font-weight: bold;
}


</style>
