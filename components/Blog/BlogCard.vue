<template>
  <ClientOnly>
    <div class="project-card">
      <b-container>
        <b-card class="bg-dark">
          <b-card-header>
            <b-row>
              <b-card-title>{{ this.title }}</b-card-title>
            </b-row>
          </b-card-header>
          <b-card-body>
            <b-row>
              <b-card-text style="white-space: pre-line">
                {{ formattedBody }}
                <b-button :variant="'outline-info'" size="sm" @click="showingFullText = !showingFullText">
                  {{ showingFullText ? $t('read_less') : $t('read_more') }}
                </b-button>
              </b-card-text>
            </b-row>
          </b-card-body>
          <b-card-footer>
            <b-row>
              <b-card-text class="date">{{ getDate() }}</b-card-text>
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
const options = { year: 'numeric', month: 'long', day: 'numeric' };

export default {
  name: "ProjectCard",
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
    date: {
      type: Date
    }
  },
  data: function () {
    return {
      showingFullText: false,
      isActive: false,
      mdData: null,
    }
  },
  async fetch() {
    const { data } = await useAsyncData('home', () => queryContent(link).findOne())
    this.mdData = data;
  },
  computed: {
    formattedBody() {
      if (this.showingFullText) {
        return this.text;
      }
      return `${this.text.slice(0, 300).trim()}...`;
    }
  },
  methods: {
    getDate() {
      return new Date(this.date).toLocaleDateString(this.$i18n.locale, options);
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/style/scss/mixins.scss';
@import '@/assets/style/scss/variables.scss';

.project-card {
  .b-card {
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  }
  .b-card-title {
    white-space: nowrap;
  }
  .card-title {
    color: $color-primary-10;
    font-weight: bold;
  }
  .card-text {
    color: $text-color-light !important;
  }
  .date {
    color: $color-secondary-3 !important;
  }
}
</style>
