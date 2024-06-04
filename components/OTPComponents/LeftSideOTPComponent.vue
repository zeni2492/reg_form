<template>
  <div class="w-full OTPContainer flex justify-center">
    <div class=" flex justify-center flex-col">
      <h1 class="text-5xl font-bold">Enter OTP</h1>

      <p class="text-base">Sent OTP on
        <span class="text-secondary">{{ $userData.email }}</span>
      </p>

      <button @click.prevent="changeEmail" class="w-28 text-nowrap text-start">
        <NuxtLink to="/signUp">
          <p class="text-primary">Change Email</p>
        </NuxtLink>
      </button>

      <form class="w-full flex flex-col mt-6">

        <div class="flex gap-4 inputs flex-wrap w-100 justify-center ">
          <input v-for="(input, index) in inputs" :key="index"
            class="w-16 h-16 bg-primary bg-opacity-10 border-primary border-2 border-opacity-50 rounded-xlg flex text-center text-3xl outline-none"
            type="text" maxlength="1" placeholder="-" v-model="input.value" @keydown="onKeyDown(index, $event)">
        </div>

        <div class="w-100 SubmitContainer flex justify-center">
          <button @click.prevent="Submit"
            class="Submit mx-4 button w-full h-16 bg-secondary rounded-xlg text-xl font-bold text-white mt-6">SUBMIT</button>
        </div>

      </form>

    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { ofetch } from 'ofetch';
import { useUserData } from '@/stores/userData.ts'
const $userData = useUserData();

function changeEmail() {
  $userData.setPassword('');
}

const inputs = ref([
  { value: '' },
  { value: '' },
  { value: '' },
  { value: '' },
  { value: '' },
  { value: '' }
]);

const onKeyDown = (index, event) => {
  if (event.key >= '0' && event.key <= '9') {
    if (index < inputs.value.length) {
      const input = inputs.value[index];
      input.value = event.key;
      if (index < inputs.value.length - 1) {
        nextTick(() => {
          const nextInput = document.querySelector(`input:nth-of-type(${index + 2})`);
          if (nextInput && nextInput.value === '') {
            nextInput.value = '-';
            nextInput.focus();
          }
        });
      }
    }
  }
}

async function Submit() {
  try {
    const response = await ofetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: $userData.userName,
        password: $userData.password,
        email: $userData.email,
      })
    });
    console.log(response);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
</script>

<style scoped>
@media screen and (max-width: 580px) {

  .OTPContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .inputs {
    padding: 0 60px;
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
  }

  .SubmitContainer {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .Submit {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>