<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <div class="container border">
          <div id="p5Canvas"></div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
var insertionsort = require("@/assets/js/insertionsort.js");
import P5 from "p5";

export default {
  mounted() {
    new P5(insertionsort.main);
  }
};
</script>

<style>
</style>
