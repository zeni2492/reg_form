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
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
}

.UnderText {
    min-width: 330px;    
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
    width: 330px;
  }
  .UnderText {
    margin-top: 80px;
  } 
}
</style>