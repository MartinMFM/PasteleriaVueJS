<template>
  <div class="modal-content">
    <!--<span class="close">&times;</span>-->
    <h1>FORMULARIO</h1>
    <div>
      <form>
        <label>Nombre</label><br />
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Ingresa tu nombre"
        /><br />
        <label>Teléfono</label><br />
        <input
          type="text"
          id="telefono"
          name="telefono"
          placeholder="Ingresa tu Teléfono"
        /><br />
        <label>Correo Electrónico</label><br />
        <input
          type="email"
          id="Correo"
          name="Correo"
          placeholder="Ingresa tu Correo Electrónico"
        /><br />
        <label>Descripción</label>
        <label
          >Pastel de chocolate
          <input type="radio" checked="checked" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label
          >Pastel de cajeta
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label
          >Pastel de cumpleaños
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label
          >Pastel de graduacion
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label
          >Pastel de tres leches
          <input type="radio" name="radio" />
          <span class="checkmark"></span> </label
        ><br />

        <span>Sabor:</span>
        <label id="labelAdornos">Sabor 1 <input type="checkbox" /><br /> </label
        ><br />
        <label id="labelAdornos"
          >Adorno 2 <input type="checkbox" /><br /> </label
        ><br /><br />
        <label>Adornos</label>
        <label id="labelAdornos"
          >Adorno 1 <input type="checkbox" /><br />
        </label>
        <label id="labelAdornos"
          >Adorno 2 <input type="checkbox" /><br /> </label
        ><br />

        <label>Nota para el pastelero</label>
        <textarea name="nota" id="nota" cols="30" rows="10"></textarea>
        <input class="submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Modal Content */
.modal-content {
  background-color: #fefefe;
  font-family: Roboto;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  height: 950px;
}
input[type="text"],
[type="email"],
select,
textarea {
  width: 50%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

.submit-btn {
  font-family: Roboto;
  color: white;
  font-size: 15px;
  background-color: #f0aeae;
  width: 15%;
  margin-top: 30px;
  border-radius: 100px;
  border: 2px solid white;
  padding: 10px 20px;
  justify-content: center;
  display: flex;
  cursor: pointer;
  transition: 0.2s all;
}
.submit-btn:active {
  transform: translateY(4px);
}

label {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
