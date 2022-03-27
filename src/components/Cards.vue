<template>
  <div class="containerCard">
    <div class="card">
      <div class="card-list">
        <img
          class="card-list-img"
          src="https://cdn7.kiwilimon.com//brightcove/7034/7034.jpg"
          alt="Pastel de chocolate"
        />
        <h2 class="card-list-name">Pastel de chocolate</h2>
        <h3 class="card-list-precio">
          {{ $store.commit("addPrecio", "$100.00") }}{{ $store.state.precio }}
        </h3>
        <div class="card-list-desc">
          <h3 class="card-list-desc-sabor">
            Sabores:<br />
            {{ $store.commit("addSabor", "Chocolate") }}{{ $store.state.sabor }}
          </h3>
          <h3 class="card-list-desc-adornos">
            Adornos:<br />
            Lunetas
          </h3>
        </div>
        <button @click="showModal = true" class="card-list-btn">Ordenar</button>
      </div>
    </div>
    <div class="card">
      <div class="card-list">
        <img
          class="card-list-img"
          src="https://cdn7.kiwilimon.com/recetaimagen/29948/32254.jpg"
          alt="Pastel de cajeta"
        />
        <h2 class="card-list-name">Pastel de cajeta</h2>
        <h3 class="card-list-precio">
          {{ $store.commit("addPrecio", "$300.00") }}{{ $store.state.precio }}
        </h3>
        <div class="card-list-desc">
          <h3 class="card-list-desc-sabor">
            Sabores:<br />
            {{ $store.commit("addSabor", "Cajeta") }}{{ $store.state.sabor
            }}<br />
            {{ $store.commit("addSabor", "Vainilla") }}{{ $store.state.sabor }}
          </h3>
          <h3 class="card-list-desc-adornos">
            Adornos:<br />
            {{ $store.commit("addAdorno", "Nuez") }}{{ $store.state.adorno
            }}<br />
            {{ $store.commit("addAdorno", "Hershey's")
            }}{{ $store.state.adorno }}
          </h3>
        </div>
        <button @click="showModal = true" class="card-list-btn">Ordenar</button>
      </div>
    </div>
    <div class="card">
      <div class="card-list">
        <img
          class="card-list-img"
          src="https://m.media-amazon.com/images/I/71XEDJH9V8L._SL1500_.jpg"
          alt="Pastel de cumpleaños"
        />
        <h2 class="card-list-name">Pastel de cumpleaños</h2>
        <h3 class="card-list-precio">
          {{ $store.commit("addPrecio", "$700.00") }}{{ $store.state.precio }}
        </h3>
        <div class="card-list-desc">
          <h3 class="card-list-desc-sabor">
            Sabores:<br />
            {{ $store.commit("addSabor", "Vainilla") }}{{ $store.state.sabor
            }}<br />
            {{ $store.commit("addSabor", "Queso") }}{{ $store.state.sabor }}
          </h3>
          <h3 class="card-list-desc-adornos">
            Adornos:<br />
            {{ $store.commit("addAdorno", "Chispas") }}{{ $store.state.adorno }}
          </h3>
        </div>
        <button @click="showModal = true" class="card-list-btn">Ordenar</button>
      </div>
    </div>
    <div class="card">
      <div class="card-list">
        <img
          class="card-list-img"
          src="https://i.pinimg.com/originals/b3/91/4f/b3914f4e0f5859593479601ce018411f.jpg"
          alt="Pastel de tres leches"
        />
        <h2 class="card-list-name">Pastel de tres leches</h2>
        <h3 class="card-list-precio">
          {{ $store.commit("addPrecio", "$600.00") }}{{ $store.state.precio }}
        </h3>
        <div class="card-list-desc">
          <h3 class="card-list-desc-sabor">
            Sabores:<br />
            {{ $store.commit("addSabor", "Vainilla") }}{{ $store.state.sabor
            }}<br />
            {{ $store.commit("addSabor", "Queso") }}{{ $store.state.sabor }}
          </h3>
          <h3 class="card-list-desc-adornos">
            Adornos:<br />
            {{ $store.commit("addAdorno", "Duraznos") }}{{ $store.state.adorno
            }}<br />
            {{ $store.commit("addAdorno", "Fresas") }}{{ $store.state.adorno }}
          </h3>
        </div>
        <button @click="showModal = true" class="card-list-btn">Ordenar</button>
      </div>
    </div>
    <div class="card">
      <div class="card-list">
        <img
          class="card-list-img"
          src="https://i.pinimg.com/originals/b3/91/4f/b3914f4e0f5859593479601ce018411f.jpg"
          alt="Pastel de tres leches"
        />
        <h2 class="card-list-name">Pastel de graduacion</h2>
        <h3 class="card-list-precio">
          {{ $store.commit("addPrecio", "$270.00") }}{{ $store.state.precio }}
        </h3>
        <div class="card-list-desc">
          <h3 class="card-list-desc-sabor">
            Sabores:<br />
            {{ $store.commit("addSabor", "Fresa") }}{{ $store.state.sabor
            }}<br />
            {{ $store.commit("addSabor", "Vainilla") }}{{ $store.state.sabor }}
          </h3>
          <h3 class="card-list-desc-adornos">
            Adornos:<br />
            {{ $store.commit("addAdorno", "Globos") }}{{ $store.state.adorno
            }}<br />
            {{ $store.commit("addAdorno", "Dona") }}{{ $store.state.adorno }}
          </h3>
        </div>
        <button @click="showModal = true" class="card-list-btn">Ordenar</button>
      </div>
    </div>
  </div>

  <!-- modal -->
  <div class="modal" v-if="showModal">
    <div class="modal-btn">
      <button class="close" @click="showModal = false">x</button>
    </div>
    <Modal />
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "Cards",
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.modal-btn {
  display: flex;
  width: 100%;
  justify-content: end;
}
.close {
  width: 30px;
  position: absolute;
  height: 30px;
  background-color: #ff6363;
  /* margin-top: 30px; */
  border: none;
  margin-right: 80px;
  cursor: pointer;
}
.close:hover {
  background-color: #f98f8f;
}
.card {
  display: grid;
  background-color: #e4a1a1;
  margin: 10px;
  box-sizing: border-box;
  height: 430px;
  color: white;
}
.card-list {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.card-list-name {
  display: flex;
  justify-content: center;
}
.card-list-img {
  display: block;
  margin: auto;
  margin-top: 20px;
  width: 80%;
  height: 150px;
}
.card-list-precio {
  margin-top: -10px;
  text-align: center;
}
.card-list-desc {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  margin-top: -20px;
}
.card-list-btn {
  font-family: Roboto;
  color: white;
  font-size: 15px;
  background-color: #cf9494;
  width: 40%;
  border-radius: 100px;
  border: 2px solid white;
  padding: 10px 20px;
  justify-content: center;
  display: flex;
  margin: auto;
  cursor: pointer;
  transition: 0.2s all;
}
.card-list-btn:active {
  transform: translateY(4px);
}

.modal {
  position: fixed;
  z-index: 1;
  top: 50px;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  /* Full width */
}

.containerCard {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
