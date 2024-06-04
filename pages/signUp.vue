<template>
  <div class="w-full flex flex-row signUpBody">

    <div class="leftSide w-1/2">
      <div class="w-full flex justify-center">
        <LeftSideSignInComponent/>
      </div>
    </div>

    <div class="rightSide w-1/2 h-full bg-primary flex justify-center items-center ml-14 relative">
      <RightSideSignInComponent/>
    </div>
    
  </div>
</template>

<script setup>
  import LeftSideSignInComponent from '../components/SignInPageComponents/LeftSideSignInComponent.vue';
  import RightSideSignInComponent from '../components/SignInPageComponents/RightSideSignInComponent.vue';
</script>

<style scoped>
.signUpBody {
  height: 100vh;
  display: flex;
  align-items: center;
}

.image {
  max-width: 100%;
}

.disabled {
  cursor: not-allowed;
}

@media screen and (max-width: 580px) {
  .leftSide{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .rightSide{
    display: none;
  }
}
</style>