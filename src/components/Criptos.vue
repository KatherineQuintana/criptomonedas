<template>
  <div class="row">
      <div 
      class="col-12"
      v-for="cripto in cripto" :key="cripto.id"
      >
      <Card :cripto="cripto"/>
      </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed, onMounted} from 'vue' 
import Card from './Card.vue'

export default {
  components: { Card },
  
  setup(){
      const store = useStore()

      const cripto = computed(()=> {
          return store.state.cripto
      })

      onMounted(()=>{
         store.dispatch('getCripto')
      })

      return {cripto}
  }
}
</script>

