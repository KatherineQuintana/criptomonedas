<template>
  <div class="home">
    <img alt="Cripto logo" src="../assets/criptos.png">
    <wellcome msg="Bienvenido a ver las estadisticas de las criptomonedas"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Wellcome from '../components/Wellcome.vue'

export default {
  name: 'HomeView',
  components: {
    Wellcome
  }
}
</script>
