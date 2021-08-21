<template>
  <div class="container max-w-screen-lg">
    <article class="news">
      <header class="pb-3 border-b border-gr border-gr-silver">
        <h1 class="mb-3 text-4xl md:text-5xl text-primary md:mb-6">{{ $prismic.asText(news.data.title) }}</h1>
        <div class="flex items-center text-lg md:text-xl">
          <time :datetime="news.data.date">
            <span v-if="$dayjs(news.data.date).year() != $dayjs().year()">{{
              $dayjs(news.data.date).format("DD [de] MMMM [de] YYYY [a las] HH:mm")
            }}</span>
            <span v-else>{{ $dayjs(news.data.date).format("DD [de] MMMM [a las] HH:mm") }}</span>
          </time>
          <span class="mx-2">-</span>
          <p>por {{ $prismic.asText(news.data.editor.data.name) }}</p>
        </div>
      </header>

      <main class="mt-8 news_body md:mt-12">
        <prismic-rich-text v-if="news.data.body" :field="news.data.body" />
        <div v-if="news.data.body_md" v-html="$md.render($prismic.asText(news.data.body_md))"></div>
      </main>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, params, error }) {
    const graphQuery = `
      {
        news {
          title
          date
          body
          body_md
          editor {
            name
          }
        }
      }`;

    const news = await $prismic.api.getByUID("news", params.uid, {
      graphQuery,
    });

    if (!news) {
      return error({
        statusCode: 404,
      });
    }

    return { news };
  },
  head() {
    return {
      title: this.$prismic.asText(this.news.data.title),
    };
  },
};
</script>
