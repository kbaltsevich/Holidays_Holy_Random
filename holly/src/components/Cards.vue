<template>
  <div v-on:click="shuffle" class="card">
    <span v-if="!msg" v-on:click="shuffle">ВЫБЕРИ МЕНЯ!!</span>
    <h1 v-if="msg">{{ msg }}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Cards",
  data() {
    return {
      arr: [],
      msg: "",
    };
  },
  methods: {
    getArrayHolidays() {
      return axios
        .get("http://127.0.0.1:5000/get-holidays-arr")
        .then((res) => (this.arr = JSON.parse(res.data)));
    },
    async shuffle() {
      await this.getArrayHolidays();
      const item = this.arr[Math.floor(Math.random() * this.arr.length)];
      this.msg = item;
      return;
    },
  },
};
</script>

<style>
.card {
  margin: 50px;
  height: 150px;
  width: 100px;
  border: 1px solid black;
  -webkit-box-shadow: 13px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 13px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 13px 10px 5px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card:hover {
  cursor: pointer;
  transition: all 0.5s ease;
  transform: scale(1.2);
}
</style>
