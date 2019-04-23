<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex xs4>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h2>Bubble Sort</h2>
              <div>One of the simplest sorting algorithems there is.</div>
              <div>Time complexity: O(n^2)</div>
            </div>
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn flat color="blue" @click="showBubble()">Visualize</v-btn>
          </v-card-actions>
        </v-card>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h2>Insertion Sort</h2>
              <div>One of the simplest sorting algorithems there is.</div>
              <div>Time complexity: O(n^2)</div>
            </div>
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn flat color="blue" @click="showInsertion()">Visualize</v-btn>
          </v-card-actions>
        </v-card>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h2>Quick Sort</h2>
              <div>One of the fastest sorting algorithems there is.</div>
              <div>Time complexity: O(nlog(n))</div>
            </div>
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn flat color="blue" @click="showQuick()">Visualize</v-btn>
          </v-card-actions>
        </v-card>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h2>Merge Sort</h2>
              <div>One of the fastest sorting algorithems there is.</div>
              <div>Time complexity: O(nlog(n))</div>
            </div>
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn flat color="blue" @click="showMerge()">Visualize</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    showBubble() {
      this.$router.push("/bubblesort");
    },

    showInsertion() {
      this.$router.push("/insertionsort");
    },

    showQuick() {
      this.$router.push("/quicksort");
    },

    showMerge() {
      this.$router.push("/mergesort")
    }
  }
};
</script>

<style>
</style>
