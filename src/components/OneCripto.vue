<template>
<div>
  <div v-for="(estadisCriptos, index) in estadisCriptos" :key="index">
  <h1>Estadisticas de {{id}}</h1>
  <span class="badge bg-light text-dark mb-1">prueba: {{estadisCriptos.time_open}}</span>
 </div>
</div>
</template>

<script>
/* import { onMounted, ref } from '@vue/runtime-core'
import {useRoute} from 'vue-router' */
import {useStore} from 'vuex'
import {computed, onMounted} from 'vue' 

//data de estadísticas
export default {
    props:['id'],
    setup(props){

      const store = useStore()

      const estadisCriptos = computed(()=> {
          return store.state.estadisCriptos
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
