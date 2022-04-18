<template>
  <div class="home">
    <img alt="Cripto logo" src="../assets/criptos.png">
    <wellcome msg="Bienvenidos a ver los tipos y estadisticas de las criptomonedas"/>
  </div>
</template>

<script>

import Wellcome from '../components/Wellcome.vue'

export default {
  name: 'HomeView',
  components: {
    Wellcome
  }
}
</script>
