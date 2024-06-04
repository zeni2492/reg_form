<template>
  <div class="w-full flex flex-row signUpBody">
    
    <div class="leftSide w-1/2 flex justify-center">
      <LeftSideOTPComponent/>
    </div>

    <div class="rightSide w-1/2 h-full bg-primary flex justify-center items-center ml-14 flex-col relative">
      <RightSideOTPComponent/>
    </div>

  </div>
</template>

<script setup> 
  import LeftSideOTPComponent from '../components/OTPComponents/LeftSideOTPComponent.vue';
  import RightSideOTPComponent from '../components/OTPComponents/RightSideOTPComponent.vue';
</script>

<style scoped>
.signUpBody {
  height: 100vh;
  display: flex;
  align-items: center;
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