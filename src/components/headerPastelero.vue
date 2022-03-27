<template>
  <header class="header">
    <nav class="header-title">
      Pastelero
      <div class="enlace">
        <router-link class="enlace-link" to="/">Inicio</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.enlace {
  margin-left: 67%;
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

.header {
  background-color: #e4a1a1;
  grid-column: 1 / span 6;
  grid-row: 1 / span 2;
  box-sizing: border-box;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100vh);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100vh);
}
.header-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Roboto;
  font-size: 30px;
  color: white;
  padding: 10px;
}
.header-image {
  display: flex;
  height: 75%;
  width: 100%;
}
</style>
