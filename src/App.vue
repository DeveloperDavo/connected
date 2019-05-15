<template>
  <div id="app">
    <ul>
      <li v-for="action in actions" v-bind:key="action.time">{{ action.type }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    actions: [
      { type: "lock", time: 1557945949433, status: "COMPLETE" },
      { type: "unlock", time: 1557945991480, status: "PENDING" }
    ]
  })
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

li {
  list-style: none;
}
</style>
