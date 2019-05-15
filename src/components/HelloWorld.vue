<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="action in actions" v-bind:key="action.time">{{ action.type }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    actions: [
      { type: "lock", time: 1557945949433, status: "COMPLETE" },
      { type: "unlock", time: 1557945991480, status: "PENDING" }
    ]
  }),
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

li {
  list-style: none;
}
</style>
