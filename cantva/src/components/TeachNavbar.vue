<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="bg-blue-50">
    <h1 class="font-bold underline text-2xl">Schooled Systems</h1>
    <nav class="space-x-4">
        <RouterLink to="/TeachDash">Dashboard</RouterLink>
        <RouterLink to="/TeachChat">Chats</RouterLink>
        <RouterLink to="/TeachClass">Classes</RouterLink>
    </nav>


    <footer class="fixed bottom-0 bg-blue-50 w-full">
        <p>&copy; 2021 Schooled Systems</p>
    </footer>
    </div>
</template>
<style scoped>
</style>