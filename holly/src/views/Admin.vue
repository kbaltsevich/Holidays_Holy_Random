<template>
  <div class="data">
    <GetArrayHolidays v-bind:arr="arr" />
    <h2>Введите даты через запятые:</h2>
    <input type="text" v-model="datas" />
    <h2>Введите количество человек:</h2>
    <input type="number" v-model="numbers" />
    <span v-on:click="changeDays">Change</span>
    <HolyListFile/>
  </div>
</template>

<script>
import GetArrayHolidays from "@/components/GetArrayHolidays.vue";
import HolyListFile from '@/components/HolyListFile'
import axios from "axios";
export default {
  name: "AdminPage",
  components: {
    GetArrayHolidays,
    HolyListFile
  },
  data() {
    return {
      arr: [],
      datas: "",
      numbers: "",
    };
  },
  methods: {
    getArrayHolidays() {
      return axios
        .get("http://127.0.0.1:5000/get-holidays-arr")
        .then((res) => (this.arr = JSON.parse(res.data)));
    },
    async postArrayDats(days, numb) {
    let count = 0;
      const arrDays = days.split(",");
      while (arrDays.length < +numb) {
        arrDays.push(`Lucky ${count}`);
        count++
      }
      const ob = {
        array: JSON.stringify(arrDays),
      };
      return await axios.post("http://127.0.0.1:5000/put-array", ob);
    },
    async changeDays() {
      const post = await this.postArrayDats(this.datas, this.numbers);
      console.log(post)
      this.arr = JSON.parse(post.data)
    },
  },
  mounted() {
    this.getArrayHolidays();
  },
};
</script>
<style scoped>
.data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
span {
  margin: 10px;
  height: 40px;
  width: 100px;
  border: 1px solid black;
  transition: all 0.5s ease;
  line-height: 40px;
}
span:hover {
  cursor: pointer;
  transform: scale(1.1);
  color: white;
  background-color: black;
  transition: all 0.5s ease;
}
</style>
