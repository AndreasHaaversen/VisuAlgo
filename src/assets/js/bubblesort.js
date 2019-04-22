let p5;

let values;

let i = 0;

export function main(_p5) {
  p5 = _p5;

  p5.setup = function() {
    var canvas = p5.createCanvas(800, 500);
    canvas.parent("p5Canvas");
    values = new Array(p5.width);
    for (let i = 0; i < values.length; i++) {
      values[i] = p5.random(p5.height);
    }

    // Sort
  };

  p5.draw = function() {
    p5.background(0);

    if (i < values.length) {
      for (let j = 0; j < values.length - i - 1; j++) {
        var a = values[j];
        var b = values[j + 1];
        if (a > b) {
          swap(values, j, j + 1);
        }
      }
    } else {
      p5.noLoop();
    }
    i++;

    for (let i = 0; i < values.length; i++) {
      p5.stroke(255);
      p5.line(i, p5.height, i, p5.height - values[i]);
    }
  };

  function swap(arr, a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
}
