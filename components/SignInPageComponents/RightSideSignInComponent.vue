<template>
<div class="w-full flex justify-center items-center select-none">
        <div class="outerCircle absolute left-1/7 top-1/5">
          <img class="image" src="@/public/LoginEllipse.svg" alt="">
        </div>
        <div class="innerCircle absolute left-1/5 top-1/5">
          <img class="image" src="@/public/innerEllipse.svg" alt="">
        </div>
        <div class="img absolute  top-1/2 transform -translate-y-1/3 translate-x-7 ">
          <img class="image" src="@/public/signUpRigthSideImage.svg" alt="">
        </div>
      </div>
      <div class="UnderText absolute top-3/4 mt-28 w-96 text-center px-10 ">
        <h2 class="text-xl text-text">Join us!</h2>
        <p class="text-text text-base">Just go through the boring process of creating an account.</p>
      </div>
</template>

<style scoped>

body{
  overflow-x: hidden;
}
.outerCircle {
    width: 540px;
    max-width: none;
  }

  .innerCircle {
    width: 480px;
    max-width: none;

  }

  .img {
    width: 580px;
    max-width: none;
  }

  .UnderText {
    margin-top: 100px;

  }

@media screen and (max-width: 1240px) {
  .outerCircle {
    width: 340px;
    max-width: none;
  }

  .innerCircle {
    width: 280px;
    max-width: none;

  }

  .img {
    width: 380px;
    max-width: none;
  }

  .UnderText {
    margin-top: 20px;

  }
}

@media screen and (max-width: 860px) {
  .outerCircle {
    width: 260px;
    max-width: none;
  }

  .innerCircle {
    width: 220px;
    max-width: none;
  }

  .img {
    width: 270px;
    margin-right: 50px;
  }

  .UnderText {
    margin-top: 30px;
    width: 250px;
  }
  .terms{
    font-size: 12px;
  }
}
</style>