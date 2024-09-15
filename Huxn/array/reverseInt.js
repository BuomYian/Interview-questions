const revereseInt = (int) => {
  let reversed = int.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(int);
};

console.log(revereseInt(-12345));
