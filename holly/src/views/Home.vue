<template>
  <div>
    <GetArrayHolidays v-if="!msg" v-bind:arr="arr" />
    <div v-if="!msg" class="forms">
      <span>Введи своё имя:</span>
      <input type="text" v-model="name" />
    </div>
    <div v-on:click="shuffle" v-if="!msg" class="cards">
      <Cards v-for="a in arr" :key="a.id" />
    </div>
    <h1 v-if="msg">{{ msg }}</h1>
  </div>
</template>

<script>
import GetArrayHolidays from "@/components/GetArrayHolidays.vue";
import Cards from "@/components/Cards.vue";
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
      msg: "",
      name: "",
    };
  },
  methods: {
    getArrayHolidays() {
      return axios
        .get("http://127.0.0.1:5000/get-holidays-arr")
        .then((res) => (this.arr = JSON.parse(res.data)));
    },
    async postArrayAndName(arr, name, item) {
      const ob = {
        array: JSON.stringify(arr),
        user: name,
        date: item,
      };
      return await axios.post("http://127.0.0.1:5000/post-holidays-arr", ob);
    },
    async shuffle() {
      await this.getArrayHolidays();
      const item = this.arr[Math.floor(Math.random() * this.arr.length)];
      this.arr = this.arr.filter((it) => it != item);
      this.postArrayAndName(this.arr, this.name, item);
      this.getArrayHolidays();
      this.name = "";
      this.msg = item;
      return;
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
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
}
.cards {
  display: flex;
  flex-wrap: wrap;
}
h1 {
  font-family: "Cristmas";
  font-weight: bold;
}
.forms{
  margin: 20px;
}
@font-face {
  font-family: "Cristmas";
  src: url("~@/assets/fonts/MountainsofChristmas-Bold.ttf");
  font-weight: normal;
  font-style: bold;
}
</style>