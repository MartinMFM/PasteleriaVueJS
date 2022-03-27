<template>
  <div class="container-ingredientes--adornos">
    <table class="customers">
      <tr>
        <th>Adornos</th>
        <th>Cantidad</th>
      </tr>
      <tr>
        <td>M&M'S</td>
        <td>10kg</td>
      </tr>
      <tr>
        <td>Nuez</td>
        <td>100kg</td>
      </tr>
      <tr>
        <td>Hershey's</td>
        <td>50kg</td>
      </tr>
      <tr>
        <td>Hershey's</td>
        <td>10kg</td>
      </tr>
      <tr>
        <td>Duraznos</td>
        <td>200kg</td>
      </tr>
      <tr>
        <td>Fresas</td>
        <td>100kg</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Adornos",
};
</script>

<style scoped>
.container-ingredientes--adornos {
  width: 90%;
  margin-top: 20px;
  grid-row: 2;
  margin-left: 15px;
}
</style>
