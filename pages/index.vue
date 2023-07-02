<template>
  <ClientOnly>
    <div>
      <HeroBase/>
      <b-container>
        <div class="content">
          <SkillsBase/>
          <ProjectsBase/>
          <GithubStat/>
        </div>
      </b-container>
    </div>
  </ClientOnly>
</template>

<script>
import HeroBase from "~/components/Base/HeroBase.vue";
import GithubStat from "~/components/Static/GithubStat.vue";

export default {
  name: "index",
  components: {GithubStat, HeroBase}
}
</script>

<style scoped lang="scss">
@use "assets/style/scss/mixins";
@import "assets/style/scss/main";

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
      overflow-y: scroll;
      overflow-x: hidden;
      padding: 0 1rem;
      @include mixins.scrollbar($color-primary-2);
    }
  }
}
</style>
