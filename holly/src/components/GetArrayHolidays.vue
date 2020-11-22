<template>
  <div>
    <div>
      <h1>В лотерее участвуют:</h1>
    </div>
    <span v-for="a in arr" :key="a.id">{{ a }}</span>
  </div>
</template>

<script>
export default {
  name: "GetArrayHolidays",
  props: ["arr"],
};
</script>

<style scoped>
span {
  margin: 5px;
  font-family: 'Cristmas';
  font-weight: bold;
  font-size: 20px;
}
@font-face {
  font-family: "Cristmas";
  src: url("~@/assets/fonts/MountainsofChristmas-Bold.ttf");
  font-weight: normal;
  font-style: bold;
}
</style>
