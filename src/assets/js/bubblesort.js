let p5;

let values;

let i = 0;
let j = 0;
let z = 0;

let w = 20;

export function main(_p5) {
  p5 = _p5;

  p5.setup = function() {
    var canvas = p5.createCanvas(800, 600);
    canvas.parent("p5Canvas");
    values = new Array(Math.floor(p5.width / w));
    for (let i = 0; i < values.length; i++) {
      values[i] = p5.random(p5.height);
    }

    p5.frameRate(20);
  };

  p5.draw = function() {
    p5.background(0);

    if (i < values.length) {
      j++;
      if (j >= values.length - i - 1) {
        j = 0;
        i++;
      }
      var a = values[j];
      var b = values[j + 1];
      if (a > b) {
        swap(values, j, j + 1);
      }

      for (let i = 0; i < values.length; i++) {
        p5.stroke(200);
        if (i - 1 === j) {
          p5.fill(255, 0, 0);
        } else {
          p5.fill(255);
        }
        p5.rect(i * w, p5.height - values[i], w, values[i]);
      }
    } else {
      for (let i = 0; i < values.length; i++) {
        p5.stroke(200);
        if (i < z) {
          p5.fill(0, 255, 0);
        } else {
          p5.fill(255);
        }
        p5.rect(i * w, p5.height - values[i], w, values[i]);
      }
      z++;
      if (z === values.length) {
        p5.noLoop();
      }
    }
  };

  function swap(arr, a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
}
