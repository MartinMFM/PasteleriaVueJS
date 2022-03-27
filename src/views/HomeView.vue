<template>
  <div class="container">
    <Header />
    <div class="title-pastel">
      <h1>Pasteles</h1>
    </div>
    <Cards />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Cards from "@/components/Cards.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Cards,
    Footer,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap");
.container {
  font-family: Roboto;
  margin: 0;
  padding: 0;
}

h1 {
  display: flex;
  justify-content: center;
  color: #e4a1a1;
  font-family: Roboto;
  font-size: 40px;
}

.title-pastel {
  display: grid;
  grid-column: 1 / span 6;
  grid-row: 4 / span 1;
}
</style>
