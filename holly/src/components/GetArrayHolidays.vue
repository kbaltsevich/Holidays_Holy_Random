<template>
  <div>
    {{ arr }}
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "GetArrayHolidays",
  props: ['arr'],
  // data() {
  //   return {
  //     arr: [],
  //   };
  // },
  // methods: {
  //   getArrayHolidays() {
  //     return axios
  //       .get("http://127.0.0.1:5000/get-holidays-arr")
  //       .then((res) => (this.arr = JSON.parse(res.data)));
  //   },
  // },
  // mounted() {
  //   this.getArrayHolidays();
  // },
};
</script>


<style scoped>
</style>
