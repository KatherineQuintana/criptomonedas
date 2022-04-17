<template>
  <div class="card">
      <div class="card-body">
          <router-link :to="`/element/${cripto.name}`" class="text-success">{{cripto.name}}</router-link>
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
