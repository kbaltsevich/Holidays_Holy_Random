<template>
  <div class="card">
    <span>ВЫБЕРИ МЕНЯ!!</span>
  </div>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      arr: [],
    };
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
