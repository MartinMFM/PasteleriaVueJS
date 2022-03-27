<template>
  <footer>
    <div class="footer-direccion">
      Direccion: <br />
      Misión de San Antonio de Padua 2683, Nueva Galicia, 80295 Culiacán
      Rosales, Sin.<br />
      Telefono: <br />
      6312345678
    </div>
    <div class="footer-horarios">
      Horarios de atención:<br />
      <ul>
        <li>lunes 9:00–20:00</li>
        <li>martes 9:00–20:00</li>
        <li>miércoles 9:00–20:00</li>
        <li>jueves 9:00–20:00</li>
        <li>viernes 9:00–20:00</li>
        <li>sábado 9:00–20:00</li>
        <li>domingo 9:00–20:00</li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  margin-top: 10px;
  padding: 50px;
  display: grid;
  grid-column: 1/-1;
  color: white;
  font-family: Roboto;
  font-size: 15px;
  background-color: #b37a7a;
  grid-template-columns: 1fr 1fr;
  height: 200px;
  margin-top: 100px;
}

.footer-direccion {
  margin: 10px;
}

.footer-horarios {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: end; */
  align-items: end;
}
</style>
