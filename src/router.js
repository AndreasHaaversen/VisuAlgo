import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import BubbleSort from "./views/BubbleSort.vue";
import QuickSort from "./views/QuickSort.vue";
import InsertionSort from "./views/InsertionSort.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/bubblesort",
      name: "BubbleSort",
      component: BubbleSort
    },
    {
      path: "/quicksort",
      name: "QuickSort",
      component: QuickSort
    },
    {
      path: "/insertionsort",
      name: 'InsertionSort',
      component: InsertionSort
    }
  ]
});
