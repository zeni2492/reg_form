<template>
  <div class="w-full flex justify-center items-center select-none">
    <div class="outerCircle absolute left-1/7 top-1/5">
      <img class="image" src="@/public/LoginEllipse.svg" alt="">
    </div>

    <div class="innerCircle absolute left-1/5 top-1/5">
      <img class="image" src="@/public/innerEllipse.svg" alt="">
    </div>

    <div class="img absolute  top-1/2  -translate-y-1/2 translate-x-1 ">
      <img class="image" src="@/public/undraw_two_factor_authentication_namy (1) 1.svg" alt="">
    </div>
  </div>

  <div class="UnderText absolute top-3/4 mt-28  text-center ">
    <h2 class="text-xl text-text">Connect with any device.</h2>
    <p class="text-text text-base">Everything you need is an internet connection.</p>
  </div>

</template>

<style scoped>
  .outerCircle {
    width: 540px;
    max-width: none;
  }

  .innerCircle {
    width: 480px;
    max-width: none;

  }

  .img {
    width: 540px;
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
    margin-top: 100px;

  }
}

@media screen and (max-width: 860px) {
  .outerCircle {
    width: 300px;
    max-width: none;
  }

  .innerCircle {
    width: 240px;
    max-width: none;
  }

  .img {
    width: 290px;
  }

  .UnderText {
    margin-top: 50px;
    width: 200px;
  }
}
</style>
