<template>
  <div id="app">
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style>
body {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  overflow-y: hidden;
  font-family: 'Montserrat', sans-serif;
}



@media screen and (max-width: 1030px) {
  .outerCircle {
    width: 380px;
    max-width: none;
  }
  .innerCircle {
    width: 320px;
    max-width: none;
    
  }
  .img {
    width: 420px;
    max-width: none;

  }
  .UnderText {
    margin-top: 100px;
    
  } 
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
    margin-top: 120px;
    width: 250px;
  }
  .terms{
    font-size: 12px;
  }
}
</style>