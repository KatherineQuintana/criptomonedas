<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <button type="button" class="btn btn-success btn-lg">Ingresar</button> -->
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
