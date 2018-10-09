<template>
  <div>
    <div>{{msg}}</div>
    <div>{{emptyText}}</div>
  </div>
</template>
<script>
import Locale from "@src/mixins/locale";

export default {
  name: "SkText",
  mixins: [Locale],
  props: {
    msg: {
      default: "test",
      type: String
    }
  },
  computed: {
    emptyText() {
      return this.t("cr.badge.emptyText");
    }
  }
};
</script>
