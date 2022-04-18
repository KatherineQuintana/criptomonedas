<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/type" class="btn btn-success btn-lg">Ingresar</router-link>
  </div>
</template>

<script>
export default {
  name: 'Wellcome',
  props: {
    msg: String
  }
}
</script>
