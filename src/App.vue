<template>
  <div class="app">
    <h2>Actions</h2>
    <ul>
      <li v-for="action in actions" v-bind:key="action.time">
        <div class="column">{{ action.type }}</div>
        <div class="column">{{ formatDate(action.time) }}</div>
        <div class="column">{{ action.status }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import getActions from "./actionsClient";
import moment from "moment";

export default {
  name: "app",
  data() {
    return { actions: [] };
  },
  mounted() {
    this.actions = getActions();
  },
  methods: {
    formatDate(time) {
      return moment(time).calendar();
    }
  }
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
  display: flex;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.column {
  flex: 1;
}

li:last-child {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
</style>
