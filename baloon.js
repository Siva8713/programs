function countBalloon(txt) {
  count = { b: 0, a: 0, l: 0, o: 0, n: 0 };

  for (let char of txt) {
    if (count.hasOwnProperty(char)) {
      count[char]++;
    }
  }

  count["l"] = Math.floor(count["l"] / 2);
  count["o"] = Math.floor(count["o"] / 2);

  return Math.min(count["b"], count["a"], count["l"], count["o"], count["n"]);
}
console.log(countBalloon("balloonballoon")); // Output: 2
console.log(countBalloon("bbaall")); // Output: 0
console.log(countBalloon("balloonballoooon")); // Output: 2
