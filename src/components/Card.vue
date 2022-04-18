<template>
  <div class="card">
      <div class="card-body">
          <h1><router-link :to="`/element/${cripto.id}`" class="badge bg-secondary mb-1">{{cripto.name}}</router-link></h1>
          <h3 class="card-text">
              <span class="badge bg-light text-dark mb-1">Rankin: {{cripto.rank}}</span>
              <span class="badge bg-light text-dark mb-1">Simbolo: {{cripto.symbol}}</span>
              <span class="badge bg-light text-dark mb-1">Tipo: {{cripto.type}}</span>
          </h3>
      </div>
  </div>
</template>

<script>
export default {
    props: ['cripto']
}
</script>
