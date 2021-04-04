<template>
  <li class="my-4 leading-none" :class="classes">
    <span>{{ item.label }}</span>

    <ul v-if="item.list && item.list.length > 0" class="list-disc list-inside my-4">
      <li v-for="listItem in item.list" :key="listItem">
        {{ listItem }}
      </li>
    </ul>

    <ol v-if="item.subItems && item.subItems.length > 0">
      <RuleItem v-for="subItem in item.subItems" :key="subItem.label" :item="subItem" :level="itemLevel" />
    </ol>
  </li>
</template>

<script>
export default {
  props: ["item", "level"],
  computed: {
    itemLevel() {
      return this.level + 1;
    },
    classes() {
      return {
        "text-2xl lg:text-3xl font-bold": this.level === 0,
        "text-xl font-bold": this.level === 1,
        "text-lg md:text-xl font-normal text-gray-500": this.level >= 2 || this.item.notHeader,
      };
    },
  },
};
</script>

<style scoped>
ol {
  counter-reset: item;
}

ol > li {
  display: table;
  counter-increment: item;
}

ol > li:before {
  content: counters(item, ".") ". ";
  @apply table-cell font-bold text-primary text-xl pr-3;
}

li ol > li:before {
  content: counters(item, ".") " ";
}
</style>
