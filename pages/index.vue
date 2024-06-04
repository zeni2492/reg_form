<template>
  <div class="w-full flex flex-row signUpBody">

    <div class="leftSide w-1/2 flex justify-center">
      <leftSideComponent/>
    </div>

    <div class="rightSide w-1/2 h-full bg-primary flex justify-center items-center ">
      <RightSideComponent/>
    </div>
    
  </div>
</template>

<script setup>
import leftSideComponent from '../components/indexPageComponents/leftSideIndexComponent.vue';
import RightSideComponent from '../components/indexPageComponents/rightSideIndexComponent.vue';
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