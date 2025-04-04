<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { registerOrg } from './login.vue';
import { loginOrg } from './login.vue';
import { registerUser } from './login.vue';


//const schools = ref([{id: 1, name: 'School A'}, {id: 2, name: 'School B'}, {id: 3, name: 'School C'}]);
const data = ref(null);

// Function to fetch data from the API
async function getAllSchools(){
    try{
        const response = await fetch("http://localhost:8000/api/v1/global/schools");
        data.value = await response.json();
        console.log(data.value);
    }catch(err){}
}

onMounted(() => {
    getAllSchools();
});


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
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="pass" />
                    <select class="border-1 border-solid border-blue-500 bg-cyan-200 cursor-pointer" name="school">
                        <option  v-for="school in data " :key="school.SchoolId" :value="school.SchoolId">{{school.SchoolName}}</option>
                        
                    </select>
                    <button class="border-1 border-solid border-blue-500 bg-cyan-200 cursor-pointer" type="submit">Login</button>
                </form>
        </div>

        <!--Register for Users-->
        <div class="block">
                <form class="grid grid-rows-2 place-content-evenly bg-white" >
                    <div class="title">
                        <h1>Register</h1>
                    </div>
                    <input type="text" placeholder="First Name" name="fname" />
                    <input type="text" placeholder="Last Name" name="lname"/>

                    <select name="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>

                    <input type="text" placeholder="email" name="email"/>
                    <input type="date" placeholder="date of birth" name="dob"/>
                    <input type="password" placeholder="password" name="pass"/>
                    <select name="role">
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Parent">Parent</option>
                    </select>
                    <select class="border-1 border-solid border-blue-500 bg-cyan-200 cursor-pointer" name="school">
                        <option  v-for="school in data " :key="school.SchoolId" :value="school.SchoolId">{{school.SchoolName}}</option>
                        
                    </select>
                    <button class="border-1 border-solid border-blue-500 bg-cyan-200 cursor-pointer" type="submit">Register</button>
                </form>
        </div>
    </container>

    <!--Org Login and Register section-->
    <h1>Organization Login</h1>

    <container class="grid grid-cols-2 place-content-evenly">

        <!--Org Login form-->
        <div class="block">
                <form class="grid grid-rows-2 place-content-evenly bg-white" v-on:submit="loginOrg">
                    <div class="title">
                        <h1>Login</h1>
                    </div>
                    <input type="text" placeholder="Email" name="school_email" />
                    <input type="password" placeholder="Password" name="school_pass"/>
                    <button class="border-1 border-solid border-blue-500 bg-cyan-200 cursor-pointer" type="submit">Login</button>
                </form>
        </div>

        <!--Org register form-->
        <div class="block">
                <form class="grid grid-rows-2 place-content-evenly bg-white" >
                    <div class="title">
                        <h1>Register</h1>
                    </div>
                    <input type="text" placeholder="Email" name="school_email" />
                    <input type="password" placeholder="Password" name="school_pass"/>
                    <input type="text" placeholder="School Name" name="school_name"/>
                    <button class="border-1 border-solid border-blue-500 bg-cyan-200 cursor-pointer" type="submit">Register</button>
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