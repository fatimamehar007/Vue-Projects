<template>
  <div>
    <h1>About Page</h1>
    <p>Global count: {{ counter.count }}</p>
    <button @click="counter.increment">Increment</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'
const counter = useCounterStore()
</script>
