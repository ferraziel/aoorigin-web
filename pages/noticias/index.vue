<template>
  <div class="container">
    <div v-if="$fetchState.pending" class="text-center">
      <LoadingSpinner />
    </div>

    <section v-else-if="news.results.length" class="max-w-screen-md mx-auto">
      <article
        v-for="curNews in news.results"
        :key="curNews.uid"
        :id="curNews.uid"
        class="news bg-gray-900 border-2 border-gr border-gr-primary p-4 md:p-12 mb-6 md:mb-12"
      >
        <header class="pb-3 border-b border-gr border-gr-silver">
          <h1 class="text-4xl md:text-5xl text-primary mb-3 md:mb-6">{{ $prismic.asText(curNews.data.title) }}</h1>

          <div class="flex items-center text-lg md:text-xl">
            <time :datetime="curNews.data.date" :title="curNews.data.date">
              <span v-if="$dayjs(curNews.data.date).year() != $dayjs().year()">{{
                $dayjs(curNews.data.date).format("DD [de] MMMM, YYYY")
              }}</span>
              <span v-else>{{ $dayjs(curNews.data.date).format("DD [de] MMMM") }}</span>
            </time>

            <span class="mx-2">-</span>

            <span>{{ $dayjs(curNews.data.date).format("HH:mm") }}</span>

            <span class="mx-2">-</span>

            <p>por {{ $prismic.asText(curNews.data.editor.data.name) }}</p>
          </div>
        </header>

        <prismic-rich-text :field="curNews.data.body" class="news_body mt-8 md:mt-12" />
        <!-- <pre>{{ curNews }}</pre> -->
      </article>
      <!-- <pre>{{ news }}</pre> -->
    </section>

    <section v-else class="text-center">
      <p class="text-2xl">Aún no hay noticias.</p>
    </section>
  </div>
</template>

<script>
export default {
  async fetch() {
    const graphQuery = `
    {
      news {
        title
        body
        date
        editor {
          name
        }
      }
    }`;

    this.news = await this.$prismic.api.query(this.$prismic.predicates.at("document.type", "news"), {
      graphQuery,
      orderings: "[my.news.date desc]",
    });
  },
  head() {
    return {
      title: "Noticias",
    };
  },
  data() {
    return {
      news: [],
    };
  },
};
</script>

<style>
.news_body {
  @apply text-gray-200;
}

.news_body h1,
.news_body h2,
.news_body h3,
.news_body h4,
.news_body h5,
.news_body h6 {
  @apply mb-4 mt-6 md:mb-8 md:mt-12;
}

.news_body h1,
.news_body h2,
.news_body h3 {
  @apply border-b border-gray-800;
}

.news_body h4,
.news_body h5,
.news_body h6 {
  @apply text-xl mb-2 mt-6 md:mb-4 md:mt-8;
}

.news_body h1 {
  @apply text-3xl md:text-4xl pb-4 border-b border-gray-800;
}

.news_body h2 {
  @apply text-2xl md:text-3xl pb-3 border-b border-gray-800;
}

.news_body h3 {
  @apply text-xl md:text-2xl pb-3 border-b border-gray-800;
}

.news_body p {
  @apply my-2 md:my-3;
}

.news_body a {
  @apply text-primary underline;
}

.news ul {
  list-style-type: disc;
}

.news ol {
  list-style-type: decimal;
}

.news ul,
.news ol {
  @apply my-6 pl-4;
}

.news ul > li,
.news ol > li {
  @apply pl-1;
}

.news ul > li::marker,
.news ol > li::marker {
  @apply text-gray-500;
}
</style>
