<script setup>
import { ref } from 'vue';
const schools = ref([{id: 1, name: 'School A'}, {id: 2, name: 'School B'}, {id: 3, name: 'School C'}]);
</script>

<template>
    <div class="bg-blue-50">
    <!-- Begin General user login/register-->
    <h1>Welcome to Login</h1>

    <!--Login form for users-->
    <container class="grid grid-cols-2 align-content-center">
        <div class="block">
                <form class="grid grid-rows-2 place-content-evenly bg-white">
                    <div class="title">
                        <h1>Login</h1>
                    </div>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <select class="border-1 border-solid border-blue-500 bg-cyan-200 cursor-pointer">
                        <option  v-for="school in schools " :key="school.id">{{school.name}}</option>
                        <
                    </select>
                    <button class="border-1 border-solid border-blue-500 bg-cyan-200 cursor-pointer">Login</button>
                </form>
        </div>

        <!--Register for Users-->
        <div class="block">
                <form class="grid grid-rows-2 place-content-evenly bg-white">
                    <div class="title">
                        <h1>Register</h1>
                    </div>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="list" placeholder="Gender" />
                    <input type="text" placeholder="email" />
                    <input type="date" placeholder="date of birth" />
                    <input type="password" placeholder="password" />
                    <input type="list" placeholder="Student/Teacher/Parent" />
                    <input type="list" placeholder="School" />
                    <button class="border-1 border-solid border-blue-500 bg-cyan-200 cursor-pointer">Register</button>
                </form>
        </div>
    </container>

    <!--Org Login and Register section-->
    <h1>Organization Login</h1>

    <container class="grid grid-cols-2 place-content-evenly">

        <!--Org Login form-->
        <div class="block">
                <form class="grid grid-rows-2 place-content-evenly bg-white">
                    <div class="title">
                        <h1>Login</h1>
                    </div>
                    <input type="list" placeholder="School" />
                    <input type="password" placeholder="Password" />
                    <button class="border-1 border-solid border-blue-500 bg-cyan-200 cursor-pointer">Login</button>
                </form>
        </div>

        <!--Org register form-->
        <div class="block">
                <form class="grid grid-rows-2 place-content-evenly bg-white">
                    <div class="title">
                        <h1>Register</h1>
                    </div>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="list" placeholder="School" />
                    <button class="border-1 border-solid border-blue-500 bg-cyan-200 cursor-pointer">Register</button>
                </form>
        </div>    
    </container>
    </div>
</template>

<style scoped>
    h1
    {
        text-align: center;
    }
    form
    {
        display: grid;
        gap: .5rem;
        border: black 1px solid;
    }
</style>