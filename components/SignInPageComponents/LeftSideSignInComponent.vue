<template>
  <div class="w-100 w-2/3 sm:block">
    <h1 class="text-5xl font-bold">Create your account</h1>

    <div class="w-100 flex">
      <p class="text-start description">Unlock all Features!</p>
    </div>

    <form action="submit" class="mt-6">
      <div class="flex flex-col">
        <div v-if="CheckUserExisting">
          <p class="text-center w-100 bg-red-500 text-white text-2xl rounded-xlg mb-base">User already exists</p>
        </div>
        <div
          class="input-container w-100 py-5 pl-2 flex flex-row border-secondary border-2 border-opacity-50 bg-secondary bg-opacity-10 h-16 rounded-xlg outline-none items-center">
          <div class="flex justify-center items-center">
            <img class="w-8 h-8 " src="@/public/person.svg" alt="">
          </div>
          <input v-model="username" class="w-full px-3 h-14 rounded-r-xlg outline-none text-2xl bg-secondary bg-opacity-0 "
            type="Username" name="Username" placeholder="Username">
        </div>

        <div
          class="input-container w-100 py-5 pl-2 flex flex-row border-secondary border-2 border-opacity-50 bg-secondary bg-opacity-10 h-16 rounded-xlg mt-base outline-none items-center">
          <img src="@/public/emailIcon.svg" alt="">
          <input v-model="email" class="w-full px-3 h-14 rounded-r-xlg outline-none text-2xl bg-secondary bg-opacity-0" type="email"
            name="email" placeholder="Email">
        </div>

        <div
          class="input-container w-100 py-4 pl-2 pr-5 flex flex-row border-secondary border-2 border-opacity-50 bg-secondary bg-opacity-10 h-16 rounded-xlg mt-base outline-none items-center">
          <img src="@/public/shield-slash.svg" alt="">
          <input class="w-full px-3 h-14  outline-none text-2xl bg-secondary bg-opacity-0" type="password" name="password"
            placeholder="Password" v-model="password" ref="passwordInput">
          <button class="w-10" ref="passwordButton" @click.prevent="togglePasswordVisibility()">
            <img src="@/public/eye-slash.svg" alt="">
          </button>
        </div>

        <div
          class="input-container w-100 pl-2 pr-5 flex flex-row border-secondary border-2 border-opacity-50 bg-secondary bg-opacity-10 h-16 rounded-xlg mt-base outline-none items-center">
          <img src="@/public/shield-slash.svg" alt="">
          <input class="w-full px-3 h-14  outline-none text-2xl bg-secondary bg-opacity-0" type="password" name="Confirm"
            placeholder="Confirm Password" v-model="passwordRepeat" ref="passwordInputRepeat">

          <button class="w-10" ref="RepeatpasswordButton" @click.prevent="toggleRepeatPasswordVisibility()"><img
              src="@/public/eye-slash.svg" alt=""></button>
        </div>

        <div class="w-full flex flex-row h-7 items-center mt-base">
          <input :checked="checkbox" @change="CheckBox" type="checkbox" id="termsCheckbox" class="checkbox mr-base h-5 w-5">
          <p class="text-base h-5 w-auto flex items-center">
            Accept
            <NuxtLink to="/signUp" class="ml-1">
              <span class="text-secondary">terms and conditions</span>
            </NuxtLink>
          </p>
        </div>

        <div class="buttonContainer">
          <button @click.prevent="DisableButton" ref="submitButton"
            :disabled="username === '' || email === '' || password !== passwordRepeat || checkbox === false"
            v-bind:class="{ 'disabled': username === '' || email === '' || password !== passwordRepeat || checkbox === false }"
            class="cursor-pointer button w-full h-16 bg-primary transition-all rounded-xlg text-xl font-bold text-white mt-6">
            SIGN UP
          </button>
        </div>

        <p class="text-base text-center mt-5">You have account?
          <NuxtLink to="/">
            <span class="text-secondary"> Login now</span>
          </NuxtLink>
        </p>

      </div>
    </form>

  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { ofetch } from 'ofetch';
import { useRouter, onBeforeRouteLeave } from 'vue-router'

const router = useRouter();

import { useUserData } from '@/stores/userData.ts'
const $userData = useUserData();

const username = ref($userData.userName);
const email = ref($userData.email);
const password = ref('');

const passwordInput = ref();
const passwordInputRepeat = ref('');
const submitButton = ref();
const passwordRepeat = ref('');
const CheckUserExisting = ref(false);

let checkbox = ref(false);

function CheckBox() {
  checkbox.value = !checkbox.value;
}

onBeforeRouteLeave((to, from, next) => {
  if (from.path === '/signUp' && to.path === '/oneTimePassword') {
    next();
  } else {
    if (username.value.length > 0 || email.value.length > 0 || password.value.length > 0 || passwordRepeat.value.length > 0) {
      const confirmMessage = "You have unsaved changes. Are you sure you want to leave?";
      if (confirm(confirmMessage)) {
        next();
        $userData.resetData();
      } else {
        next(false);
      }
    } else {
      next();
    }
  }
});

const togglePasswordVisibility = () => {
  const passwordRepeat = passwordInput.value;
  if (passwordRepeat !== null) {
    if (passwordRepeat.type === 'password') {
      passwordRepeat.type = 'text';
    } else {
      passwordRepeat.type = 'password';
    }
  }
};

const toggleRepeatPasswordVisibility = () => {
  const passwordRepeat = passwordInputRepeat.value;
  if (passwordRepeat !== null) {
    if (passwordRepeat.type === 'password') {
      passwordRepeat.type = 'text';
    } else {
      passwordRepeat.type = 'password';
    }
  }
};


async function DisableButton() {

  $userData.setName(username.value);
  $userData.setEmail(email.value);
  $userData.setPassword(password.value);

  const CheckUser = await ofetch(`http://dummyjson.com/users/search?q=${username.value}`);
    if (CheckUser.users.length > 0) {
      CheckUserExisting.value = true
      return
    }
  else {
    CheckUserExisting.value = false;
  }
  
  router.push('/oneTimePassword');
}

onMounted(() => {
  if (submitButton.value) {
    submitButton.value = document.querySelector('button.button');
  }
});



</script>

<style scoped>
.disabled {
  cursor: not-allowed;
  background: #8098F9;
}

.input-container:focus-within {
  box-shadow: #4c6ffb 0px 0px 10px 0px !important;
  transition: 0.3s all;
}

.checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #8098F9;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
}

.checkbox:checked::after {
  content: "\2713";
  color: white;
  font-weight: bold;
  background: #8098F9;
  width: 20px;
  position: absolute;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: -2px;
  top: -2px;
  border-radius: 5px;
}
</style>