<template>
  <ClientOnly>
    <div class="project-card">
      <b-container>
        <b-card class="bg-dark" :img-src="getImageUrl(imageLink)">
          <b-card-body>
            <b-row>
              <b-col>
                <b-card-title>{{ this.title }}</b-card-title>
              </b-col>
              <b-col>
                <div class="project-card__details__tech-stack">
                  <icons v-for="item in tech" :key="item.title" :id="item.icon" :title="item.tooltip" :icon="item.icon"></icons>
                </div>
              </b-col>
            </b-row>
          </b-card-body>
          <b-card-footer>
            <b-row class="project-card__links">
              <b-col class="text-center">
                <a
                    :href="gitLink"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <icons icon="fab fa-github"/>
                  {{$t('content_details')}}
                </a>
              </b-col>
              <b-col class="text-center">
                <a
                    :href="liveLink"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <icons icon="fas fa-eye"/>
                  {{$t('content_prew')}}
                </a>
              </b-col>
            </b-row>
          </b-card-footer>
        </b-card>
      </b-container>
    </div>
    <b-modal v-model="isActive" :id="title">
      <ContentRenderer :value="mdData"/>
    </b-modal>
  </ClientOnly>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: {
      type: String
    },
    tech: {
      type: Array,
      required: false
    },
    imageLink: {
      type: String
    },
    gitLink: {
      type: String
    },
    liveLink: {
      type: String
    }
  },
  data: function () {
    return {
      isActive: false,
      mdData: null,
    }
  },
  async fetch() {
    const { data } = await useAsyncData('home', () => queryContent(link).findOne())
    this.mdData = data;
  },
  methods: {
    getImageUrl(path) {
      return new URL(`../../images/`+path, import.meta.url).href
    },
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/scss/variables.scss';

.project-card {
  .b-card {
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  }
  .card-img {
    width: 75%;
    height: auto;
  }
  .b-card-title {
    white-space: nowrap;
  }
  .card-title {
    color: white;
  }
  &__image {
    .placeholder {
      height: 15rem;
      border-radius: $border-radius-1;
      @media (max-width: $screen-sm) {
        height: 10rem;
      }
      @media (max-width: $screen-xs) {
        height: 20rem;
      }
      @media (max-width: $screen-xss) {
        height: 15rem;
      }
    }
  }
  &__details {
    &__tech-stack {
      display: flex;
      justify-content: space-evenly;
      padding: 0.5rem 0.2rem;
      border-radius: $border-radius-2;
      background: $color-primary-8;
      svg {
        width: 10%;
        height: auto;
        color: $text-color-dark !important;
        &:hover {
          box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
        }
        @media screen and (max-width: $screen-sm) {
          width: 20%;
        }
      }
    }
  }
  &__links {
    .col {
      white-space: nowrap;
    }
    a {
      text-decoration: none;
      color: $text-color-light;
      &:hover {
        color: darken($text-color-light, 20%);
      }
    }
  }
}
</style>
