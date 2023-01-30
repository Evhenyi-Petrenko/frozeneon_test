<script setup>
import SearchInput from "./components/SearchInput.vue";
import TablePackage from "./components/TablePackage.vue";
</script>

<template>
  <v-container fluid>
    <search-input />
    <table-package />
    <footer>
      <v-row>
        <v-col cols="6" class="d-flex align-center">
          <div>
            <p>https://github.com/Evhenyi-Petrenko</p>
            <p>https://www.codewars.com/users/Why_Hollow</p>
          </div>
        </v-col>
        <v-col cols="6" class="d-flex justify-center">
          <img src="./assets/EvhenyiPetrenko.jpg" alt="" />
        </v-col>
      </v-row>
    </footer>
  </v-container>
</template>

<style>
#app {
  background-color: #f8f9fa;
  height: 100vh;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
footer img {
  max-height: 200px;
  max-width: 320px;
}
</style>
