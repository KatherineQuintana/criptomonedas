<template>
<div>
  <h1>Estadisticas de {{id}}</h1>
  <div v-for="(estadisCriptos, index) in estadisCriptos" :key="index">
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Fecha</th>
      <th scope="col">Apertura</th>
      <th scope="col">Alto</th>
      <th scope="col">Bajo</th>
      <th scope="col">Cierre</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{estadisCriptos.time_close}}</th>
      <td>${{estadisCriptos.open}}</td>
      <td>${{estadisCriptos.high}}</td>
      <td>${{estadisCriptos.low}}</td>
      <td>${{estadisCriptos.close}}</td>
    </tr>
  </tbody>
</table>
 </div>
</div>
</template>

<script>

import {useStore} from 'vuex'
import {computed, onMounted} from 'vue' 

//data de estadísticas
export default {
    props:['id'],
    setup(props){

      const store = useStore()

      const estadisCriptos = computed(()=> {
          return store.getters.orderDate
      })

      onMounted(()=>{
         store.dispatch('getCriptoEstadi')
      })

      return {estadisCriptos}

/*       const nameParams = useRoute()
      const estadiCripto = ref([])
   
   //falta optener el ID en la ruta para adquerir las estadisticas.
      onMounted(async()=>{
           try{
        const res = await fetch (`https://api.coinpaprika.com/v1/coins/${nameParams.params.id}/ohlcv/historical?start=2022-04-11&end=2022-04-17`)
        estadiCripto.value = await res.json()
      }catch (error) {
        console.log(error)
      }
      })
      return estadiCripto */
      }
}
</script>
