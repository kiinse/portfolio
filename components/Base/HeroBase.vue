<template>
  <ClientOnly>
    <div id="hero">
      <b-container>
        <div class="hero">
          <b-row>
            <b-col sm class="hero__content">
              <div class="hero__mobile__image">
                <img
                    id="hero-avatar"
                    :src="this.hero_avatar"
                    alt="kiinse"
                    loading="eager"
                />
              </div>
              <div>
                <h6>{{$t('hero_hey')}}</h6>
                <h1>
                  <span class="hero__content__title">
                    <span class="hero__content__title-first">{{ $t('hero_title_first') }}</span>&nbsp;
                    <span class="hero__content__title-second">{{ $t('hero_title_second') }}</span>
                  </span>
                </h1>
                <h2>
                  <div class="type-writer">
                    <TyperUtil :words="[
                    $t('hero_typer1'),
                    $t('hero_typer2'),
                    $t('hero_typer3'),
                    $t('hero_typer4')
                  ]" />
                  </div>
                </h2>
                <p>{{ $t('hero_spell') }}</p>
                <h6 class="hero__content__social">
                  {{ $t('hero_follow') }}&nbsp;
                  <span class="hero__content__social-icons">
                    <a :href="link.url" v-for="link in hero_socialLinks" :key="link.icon">
                        <icons :icon="'fa-brands fa-'+link.icon" class="social-icon github" />
                    </a>
                  </span>
                </h6>
                <div class="hero__content__main-btns">
                  <a href="mailto:me@kiinse.dev">
                    <b-button :variant="hero_buttons_conf.email_button" size="lg">
                      <icons icon="fas fa-envelope" class="main-btn" />
                      {{ $t('hero_email') }}
                    </b-button>
                  </a>
                  &nbsp;
                  <a href='https://github.com/kiinse' target="_blank" rel="noopener noreferrer" class="hero__content__main-btns-outline">
                    <b-button :variant="hero_buttons_conf.github_button" size="lg">
                      <icons icon="fa-brands fa-github" class="main-btn"/>
                    </b-button>
                  </a>
                </div>
              </div>
            </b-col>
            <b-col sm class="hero__image">
              <img
                  id="hero-avatar"
                  :src="this.hero_avatar"
                  alt="kiinse"
                  loading="eager"
              />
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
  </ClientOnly>
</template>

<script>
import TyperUtil from "~/components/Utils/TyperUtil.vue";
import initialConfig from "~/config/initial.config";
export default {
  name: "HeroBase",
  components: {
    TyperUtil
  },
  data: function () {
    return {
      hero_avatar: initialConfig.hero.avatar_url,
      hero_socialLinks: initialConfig.socialLinks,
      hero_buttons_conf: initialConfig.hero_buttons
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/style/scss/mixins.scss';
@import '@/assets/style/scss/variables.scss';
.hero {
  margin: 5%;
  &__content {
    &__title-second {
      color: $color-primary-1;
    }
    .know-more {
      @include mixins.anchor($color-primary-1);
    }
    &__social-icons {
      margin: auto 1%;
      .social-icon {
        font-size: 1.5rem;
        margin: auto 1%;
      }
      .twitter:hover {
        color: #1da1f2;
      }
      .github:hover,
      .medium:hover {
        color: #6e6e6e;
      }
      .NuxtLinkedin:hover {
        color: #0077b5;
      }
    }
    &__main-btns {
      button {
        color: mixins.$text-color-dark !important;
        margin-top: 5%;
      }
    }
    &__main-btns-outline {
      button {
        color: mixins.$text-color-light !important;
        margin-top: 5%;
      }
    }
    .type-writer {
      height: 100%;
      color: $color-primary-7;
      .Typist .Cursor {
        color: $color-primary-1;
      }
    }
    @media screen and (max-width: $screen-sm) {
      text-align: center;
    }
  }
  &__image {
    img {
      border-radius: 25%;
      margin-top: -20%;
      width: 85%;
      height: auto;
    }
  }
  &__mobile__image {
    display: none;
    img {
      border-radius: 25%;
      margin-top: -15%;
      margin-bottom: 5%;
      width: 45%;
      height: auto;
    }
  }
  @media screen and (max-width: $screen-sm) {
    .hero__image {
      display: none;
    }
    .hero__mobile__image {
      display: block;
    }
  }
}
</style>
