<template>
  <div class="app">
    <h2>Actions</h2>
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
.app {
  padding: 1rem;
}

ul {
  padding: 0;
}

li:first-child {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

li {
  list-style: none;
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

li:last-child {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
</style>
