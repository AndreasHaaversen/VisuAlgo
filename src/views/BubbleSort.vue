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
var bubblesort = require("@/assets/js/bubblesort.js");
import P5 from "p5";

export default {
  mounted() {
    new P5(bubblesort.main);
  }
};
</script>

<style>
</style>
