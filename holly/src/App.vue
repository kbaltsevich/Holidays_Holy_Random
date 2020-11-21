<template>
  <div id="app">
    <GetArrayHolidays v-bind:arr="arr" />
    <div class="cards">
      <Cards v-for="a in arr" :key="a.id" />
    </div>
  </div>
</template>

<script>
import GetArrayHolidays from "./components/GetArrayHolidays.vue";
import Cards from "./components/Cards.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    GetArrayHolidays,
    Cards,
  },
  data() {
    return {
      arr: [],
    };
  },
  methods: {
    getArrayHolidays() {
      return axios
        .get("http://127.0.0.1:5000/get-holidays-arr")
        .then((res) => (this.arr = JSON.parse(res.data)));
    },
  },
  mounted() {
    this.getArrayHolidays();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 1024px;
  width: 100%;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
