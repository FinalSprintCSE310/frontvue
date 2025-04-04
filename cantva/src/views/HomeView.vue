<script setup>
</script>

<template>
  <div class="min-h-screen bg-blue-200 flex flex-col items-center">
    <!-- Top Bar -->
    <div class="w-full bg-white p-2 text-left">
      <span class="font-semibold">Schooled Systems</span>
    </div>

    <!-- Hero Section -->
    <div class="relative w-full">
      <img src="@/assets/school-building.webp" alt="School Building" class="w-full h-64 object-cover" />
      <div class="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg">
        <h1 class="text-3xl font-bold text-black">Schooled Systems</h1>
      </div>
      <div class="absolute top-28 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white px-6 py-4 rounded-full shadow-lg">
        Schooled Systems streamlines school operations by putting class management, communication, and recordkeeping all in one place.
      </div>
      <div class="absolute top-44 left-1/2 transform -translate-x-1/2">
        <button class="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600">Log In</button>
      </div>
    </div>

    <!-- Info Sections -->
    <div class="w-full flex flex-col items-center py-8 space-y-6">
      <div class="bg-blue-900 text-white p-6 rounded-xl shadow-lg w-4/5 text-center">
        One application for schools, teachers, students, and parents
      </div>
      <div class="bg-blue-900 text-white p-6 rounded-xl shadow-lg w-3/5 text-center">
        Minimal setup, ease of use, and full control
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>