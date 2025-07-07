<template>
  <div>
    <h1>Destinations</h1>

    <div>
      <button @click="filterLevel = 4">Above 4</button>
      <button @click="filterLevel = 4.5">Above 4.5</button>
      <button @click="filterLevel = 5">5 Only</button>
    </div>

    <h3 v-if="filteredPlaces.length">Showing places with rating > {{ filterLevel }}</h3>
    <p v-else>No places match this filter.</p>

    <ul>
      <li v-for="place in filteredPlaces" :key="place.name">
        {{ place.name }} - Rating: {{ place.rating }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// your data: list of places with ratings
const places = ref([
  { name: 'Paris', rating: 4.7 },
  { name: 'London', rating: 4.3 },
  { name: 'Rome', rating: 4.8 },
  { name: 'Berlin', rating: 4.0 },
  { name: 'New York', rating: 5.0 },
  { name: 'Sydney', rating: 3.9 }
])

// which threshold to filter
const filterLevel = ref(4)

// computed list that filters by selected threshold
const filteredPlaces = computed(() =>
  places.value.filter(place => place.rating > filterLevel.value)
)
</script>

<style scoped>
button {
  margin: 5px;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
}
button:hover {
  background-color: #aaa;
}
</style>
