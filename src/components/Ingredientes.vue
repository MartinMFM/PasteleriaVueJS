<template>
  <div class="container-ingredientes">
    <h1 class="title-ingredientes">Ingredientes</h1>
    <Sabores />
    <Adornos />
    <Pedidos />
  </div>
</template>

<script>
import Sabores from "@/components/saboresPastelero.vue";
import Adornos from "@/components/adornosPastelero.vue";
import Pedidos from "@/components/pedidosPastelero.vue";
export default {
  name: "Ingredientes",
  components: {
    Sabores,
    Adornos,
    Pedidos,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container-ingredientes {
  display: grid;
  grid-column: 1/-1;
  grid-row: 2 / span 3;
  grid-template-columns: 1fr 1fr;
  font-family: Roboto;
  color: white;
}
td {
  margin: 0;
  background-color: #b38989;
  border: none;
  padding: 8px;
}

th {
  padding: 20px;
  background-color: #f0aeae;
  width: 50%;
}
.customers {
  width: 100%;
  text-align: center;
}
.title-ingredientes {
  font-size: 30px;
  grid-column: 1/-1;
  margin-top: 60px;
  margin-bottom: -10px;
}
</style>
