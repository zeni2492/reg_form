<template>
  <div class="w-100 w-2/3 sm:block">
    <h1 class="text-5xl text-center font-bold">Login to your Account</h1>

    <div class="w-100 flex justify-center">
      <p class="text-center description mt-6">with email</p>
    </div>

    <form action="submit" class="mt-6">
      <div class="flex flex-col">
        <div v-if="UserAuthentication">
          <p class="text-center w-100 bg-red-500 text-white text-2xl rounded-xlg mb-base">Wrong username or password</p>
        </div>
        <div
          class="w-100 py-5 pl-2 flex flex-row border-secondary border-2 border-opacity-50 bg-secondary bg-opacity-10 h-16 rounded-xlg outline-none items-center">
          <div class="flex justify-center items-center">
            <img class="w-8 h-8 " src="@/public/person.svg" alt="">
          </div>
          <input class="w-full outline-none text-2xl h-14 rounded-r-xlg bg-secondary bg-opacity-0 ml-2" type="text"
            name="Username" placeholder="Username" v-model="LogInUsername">
        </div>

        <div
          class="w-100 py-4 pl-2 pr-5 flex flex-row border-secondary border-2 border-opacity-50 bg-secondary bg-opacity-10 h-16 rounded-xlg mt-2 outline-none items-center">
          <img src="@/public/shield-slash.svg" alt="">
          <input class="w-full ml-2 h-14 rounded-r-xlg outline-none text-2xl bg-secondary bg-opacity-0"
            :type="passwordFieldType" name="password" placeholder="Password" v-model="LogInPassword">
          <button @click.prevent="togglePasswordVisibility"><img src="@/public/eye-slash.svg" alt=""></button>
        </div>

        <div class="buttonContainer  mt-11">
          <button @click.prevent="LogIn" ref="LogInButton" :disabled="LogInUsername === '' || LogInPassword === ''"
            v-bind:class="{ 'disabled': LogInUsername === '' || LogInPassword === '' }"
            class="button w-full h-16 bg-primary cursor-pointer transition-all rounded-xlg text-xl font-bold text-white">
            LOG IN
          </button>
        </div>

      </div>
    </form>

    <p class="text-base text-center mt-5">Don’t have account?
      <NuxtLink to="/signUp">
        <span class="text-secondary">Create an account</span>
      </NuxtLink>
    </p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { ofetch } from 'ofetch';

import { useUserData } from '@/stores/userData.ts'
const $userData = useUserData();

let LogInUsername = ref($userData.userName);
let LogInPassword = ref($userData.password);

const LogInButton = ref();
const passwordFieldType = ref('password');

const UserAuthentication = ref(false);

const togglePasswordVisibility = () => {
  passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
};


async function LogIn() {
  try {
    const CheckUser = await ofetch(`http://dummyjson.com/users/search?q=${LogInUsername.value}`);
    if (CheckUser.users.length === 0) {
      UserAuthentication.value = true
      return
    }
    const response = await ofetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: LogInUsername.value,
        password: LogInPassword.value,
        expiresInMins: 30,
      })
    });

    if (response.status === 200) {
      UserAuthentication.value = true
    }
    console.log(response);
  }
  catch (error) {
    console.error('An error occurred:', error);
  }
}


</script>

<style scoped>
.description {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 453px;
}

.description::before {
  content: '';
  display: inline-block;
  width: 130px;
  height: 1px;
  background: #000;
}

.description::after {
  content: '';
  display: inline-block;
  width: 130px;
  height: 1px;
  background: #000;
}

.disabled {
  cursor: not-allowed;
  background: #8098F9;
}
</style>
