<template>
  <div>
    {{msg}}
  </div>
</template>
<script>
export default {
  name: "SkText",
  props: {
    msg: {
      default: "test",
      type: String
    }
  }
};
</script>
