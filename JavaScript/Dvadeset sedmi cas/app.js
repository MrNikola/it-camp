function rastojanje(x1, y1, x2, y2) {
  let y = x2 - x1;
  let x = y2 - y1;

  return Math.sqrt(x * x + y * y);
}
console.log(rastojanje(10, 15, 20, 30));

function ocene(Takmicar1M, Takmicar1P, Takmicar2M, Takmicar2P) {
  let gg1 = Takmicar1M + Takmicar1P;
  let gg2 = Takmicar2M + Takmicar2P;
  if (gg1 > gg2) {
    return "Takmicar1 je pobednik.";
  } else if (gg1 < gg2) {
    return "Takmicar2 je pobednik.";
  }
  if ((gg1 = gg2)) {
    return "Takmicar1 je pobednik.";
  }
}
console.log(ocene(40, 45, 45, 35));

function NZD(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    let t = y;
    y = x % y;
    x = t;
  }
  return x;
}
console.log(NZD(4, 9));
