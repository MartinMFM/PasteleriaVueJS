<template>
  <div class="container-pedidos">
    <h1 class="title-pedidos">Pedidos</h1>
    <table class="tabla-pedidos">
      <tr>
        <th class="colum-pedidos">Nombre</th>
        <th class="colum-pedidos">Teléfono</th>
        <th class="colum-pedidos">Correo Electrónico</th>
        <th class="colum-pedidos">Descripción</th>
        <th class="colum-pedidos">Sabores</th>
        <th class="colum-pedidos">Adornos</th>
        <th class="colum-pedidos">Nota</th>
      </tr>
      <tr>
        <td>Carlos</td>
        <td>6673409230</td>
        <td>Carlos@mail.com</td>
        <td>Pastel de chocolate</td>
        <td>Chocolate</td>
        <td>M&M'S</td>
        <td>Con mucho chocolate</td>
      </tr>
      <tr>
        <td>David</td>
        <td>5553439339</td>
        <td>David@mail.com</td>
        <td>Pastel de cajeta</td>
        <td>Vainilla</td>
        <td>Nuez</td>
        <td>Con poca cajeta</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Pedidos",
};
</script>

<style scoped>
.title-pedidos {
  font-size: 30px;
  grid-column: 1/-1;
  margin-top: 60px;
}
.container-pedidos {
  grid-column: 1/-1;
  padding: 20px;
}

.colum-pedidos {
  width: 5%;
}
</style>
