let p5;

export function main(_p5) {
  p5 = _p5;
  p5.setup = _ => {
    var canvas = p5.createCanvas(500, 500)
    canvas.parent("p5Canvas");
  }
}
