let p5;

export function main(_p5) {
  p5 = _p5;

  let values;
  let w = 5;

  let states = [];

  p5.setup = function() {
    var canvas = p5.createCanvas(800, 600);
    p5.colorMode(p5.HSB, p5.height);
    canvas.parent("p5Canvas");

    values = new Array(Math.floor(p5.width / w));
    for (let i = 0; i < values.length; i++) {
      values[i] = p5.random(p5.height);
    }
    mergeSort(values, 0, values.length - 1);
    p5.frameRate(1);
  };

  var stateIndex = 0;

  p5.draw = function() {
    p5.background(0);

    for (let i = 0; i < states[stateIndex].length; i++) {
      let col = p5.color(states[stateIndex][i], p5.height, p5.height);
      p5.stroke(col);
      p5.fill(col);
      p5.rect(i * w, p5.height - states[stateIndex][i], w, p5.height);
    }
    stateIndex++;
    if (stateIndex > states.length - 1) {
      p5.noLoop();
    }
  };

  function merge(arr, start, mid, end) {
    let start2 = mid + 1;

    // If the direct merge is already sorted
    if (arr[mid] <= arr[start2]) {
      return;
    }

    // Two pointers to maintain start
    // of both arrays to merge
    while (start <= mid && start2 <= end) {
      states.push(arr);
      // If element 1 is in right place
      if (arr[start] <= arr[start2]) {
        start++;
      } else {
        let value = arr[start2];
        let index = start2;

        // Shift all the elements between element 1
        // element 2, right by 1.
        while (index != start) {
          arr[index] = arr[index - 1];
          index--;
        }
        arr[start] = value;

        // Update all the pointers
        start++;
        mid++;
        start2++;
      }
    }
  }

  /* l is for left index and r is right index of the  
       sub-array of arr to be sorted */
  function mergeSort(arr, l, r) {
    if (l < r) {
      // Same as (l + r) / 2, but avoids overflow
      // for large l and r
      let m = Math.floor(l + (r - l) / 2);

      // Sort first and second halves
      mergeSort(arr, l, m);
      mergeSort(arr, m + 1, r);

      merge(arr, l, m, r);
    }
  }
}
