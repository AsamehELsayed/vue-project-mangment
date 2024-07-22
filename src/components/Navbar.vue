<template>
<nav class="bg-green-200 p-4">
  <div class="max-w-7xl mx-auto">
    <div class="flex justify-between items-center">
      <!-- Navbar brand/logo -->
      <RouterLink to="/" class="text-2xl font-bold text-white">project manger</RouterLink>

      <!-- Navbar links -->
      <div class="space-x-2">
        <RouterLink to="/" class="text-white hover:text-gray-800">Home</RouterLink>
        <RouterLink :to="{name:'create'}" class="text-white hover:text-gray-800">Add</RouterLink>
      
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name:'Nav'
}
</script>

<style>

</style>