<template>
  <div class="container-ingredientes--sabores">
    <table class="customers">
      <tr>
        <th>Sabor</th>
        <th>Cantidad</th>
      </tr>
      <tr>
        <td>Chocolate</td>
        <td>100 Litros</td>
      </tr>
      <tr>
        <td>Cajeta</td>
        <td>200 Litros</td>
      </tr>
      <tr>
        <td>Vainilla</td>
        <td>300 Litros</td>
      </tr>
      <tr>
        <td>Queso</td>
        <td>50 Litros</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Sabores",
};
</script>

<style>
.container-ingredientes--sabores {
  width: 90%;
  margin-top: 20px;
  margin-left: 40px;
  grid-row: 2;
}
</style>
