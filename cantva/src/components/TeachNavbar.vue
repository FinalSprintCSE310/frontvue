<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="bg-blue-50">
    <h1 class="font-bold underline text-2xl">Schooled Systems</h1>
    <nav class="space-x-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
    </nav>


    <footer class="fixed bottom-0 bg-blue-50 w-full">
        <p>&copy; 2021 Schooled Systems</p>
    </footer>
    </div>
</template>
<style scoped>
</style>