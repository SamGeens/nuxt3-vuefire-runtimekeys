<template>
  <h1>Hello from login page!</h1>
  <h1>Public runtime config:</h1>
  <p>apiBase: {{ runtimeConfig.public.apiBase }}</p>
</template>

<script setup="ts">
const runtimeConfig = useRuntimeConfig();
</script>
