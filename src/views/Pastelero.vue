<template>
  <div class="container2">
    <Header />
    <Ingredientes />
  </div>
</template>

<script>
// @ is an alias to /src
import Ingredientes from "@/components/Ingredientes.vue";
import Header from "@/components/headerPastelero.vue";

export default {
  name: "HomeView",
  components: {
    Ingredientes,
    Header,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap");
.container2 {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50px 25px 1fr 1fr;
}
.enlace {
  display: grid;
  grid-column: 1/-1;
  grid-row: 1 / 1;
}
.enlace-link {
  text-decoration: none;
  color: white;
  font-family: Roboto;
  font-size: 25px;
  padding: 10px;
  background-color: #cf9494;
  border: 2px solid white;
}
.title-pastelero {
  display: grid;
  grid-column: 1/-1;
  background-color: #e4a1a1;
  text-align: center;
  font-family: Roboto;
  font-size: 30px;
  color: white;
  font-weight: bold;
}

h1 {
  display: flex;
  justify-content: center;
  color: #e4a1a1;
  font-family: Roboto;
  font-size: 40px;
}
</style>
