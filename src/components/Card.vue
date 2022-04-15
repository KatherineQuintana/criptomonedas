<template>
  <div class="card">
      <div class="card-body">
          <h2 class="text-success">{{cripto.name}}</h2>
          <h5 class="card-text">
              <span class="badge bg-secondary mb-1">Rankin: {{cripto.rank}}</span>
              <span class="badge bg-dark d-block mb-1">Simbolo: {{cripto.symbol}}</span>
              <span class="badge bg-light text-dark mb-1">Tipo: {{cripto.type}}</span>
          </h5>
      </div>
  </div>
</template>

<script>
export default {
    props: ['cripto']
}
</script>

<style>

</style>